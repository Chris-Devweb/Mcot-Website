"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { 
  X, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  MessageCircle,
  ChevronDown
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function EkodoAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "A dɔ̌ gangbe à? (Bonjour !) Je suis Ekodɔ, votre petit Eko. Comment puis-je vous aider aujourd'hui ? Un sixú d'alɔ we à?",
      timestamp: new Date()
    }
  ]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Speech Recognition Setup
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = "fr-FR";

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInputText(transcript);
          setIsRecording(false);
          handleSend(transcript);
        };

        recognitionRef.current.onerror = () => {
          setIsRecording(false);
        };

        recognitionRef.current.onend = () => {
          setIsRecording(false);
        };
      }
    }
  }, []);

  const toggleRecording = () => {
    if (!recognitionRef.current) {
      alert("La reconnaissance vocale n'est pas supportée par votre navigateur.");
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
    } else {
      setIsRecording(true);
      recognitionRef.current.start();
    }
  };

  const speak = (text: string) => {
    if (typeof window === "undefined" || isMuted) return;
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    utterance.rate = 1.1;
    utterance.pitch = 1.8; // Very high pitch for a small boy voice

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async (text: string = inputText) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      role: "user",
      content: text,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const { response, url } = simulateEkodoResponse(text);
      const assistantMsg: Message = {
        role: "assistant",
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMsg]);
      setIsTyping(false);
      speak(response);

      // Execute navigation if applicable
      if (url) {
        setTimeout(() => {
          router.push(url);
          // Optional: close assistant after navigation on mobile
          if (window.innerWidth < 768) setIsOpen(false);
        }, 1200);
      }
    }, 1500);
  };

  const simulateEkodoResponse = (input: string): { response: string, url?: string } => {
    const text = input.toLowerCase();
    
    // Command patterns (Search & Navigation)
    if (text.includes("va vers") || text.includes("ouvre") || text.includes("montre") || text.includes("page")) {
      if (text.includes("contact")) return { response: "Mǐ yì kplé (On y va) ! Je vous emmène sur la page Contact.", url: "/contact" };
      if (text.includes("actualit")) return { response: "Kútɔ́nù wɛn (Les nouvelles) ! Les actualités arrivent.", url: "/actualites" };
      if (text.includes("service")) return { response: "Services page ɔ́ nì (Voici la page Services). On y est !", url: "/services" };
      if (text.includes("projet")) return { response: "Mɛ̌li sín azɔ̌ (Les travaux du Maire). Regardons les projets.", url: "/municipalite/projets" };
      if (text.includes("document")) return { response: "Wéma mǐtɔn lɛ (Nos documents). C'est par ici.", url: "/documents" };
      if (text.includes("découvrir") || text.includes("visiter")) return { response: "Kútɔ́nù nyɔ́ ɖɛkpɛ (Cotonou est belle). Je vous montre la ville !", url: "/decouvrir-cotonou" };
      if (text.includes("mairie") || text.includes("municipalité")) return { response: "Mɛ̌li mɛ kàn xò (À la Mairie). Allons voir la municipalité.", url: "/municipalite" };
    }

    // Informational patterns
    if (text.includes("naissance") || text.includes("civil")) {
      return { response: "Pour le 'Vi jí wéma' (acte de naissance), allez sur la page Services ou sur eservices.anip.bj. É mɔ wɛn à?", url: "/services" };
    }
    if (text.includes("maire") || text.includes("luc atrokpo")) {
      return { response: "Luc Sètondji Atrokpo wɛ nyí Mɛ̌li mǐtɔn! C'est notre grand Maire. Vous pouvez le voir dans la section Municipalité.", url: "/municipalite" };
    }
    if (text.includes("contact") || text.includes("téléphone") || text.includes("mail")) {
      return { response: "Appelez-nous au +229 21 31 21 00. Mǐ ɖò kpɔ́! (On est ensemble !)", url: "/contact" };
    }
    if (text.includes("tourisme") || text.includes("visiter") || text.includes("cotonou")) {
      return { response: "Alon wa Kútɔ́nù! (Venez à Cotonou !) Allez voir la Place de l'Amazone ou la Plage.", url: "/decouvrir-cotonou" };
    }
    
    return { response: "Ényí a jló na kan nǔ ɖebǔ byɔ̌ ɔ, un ɖò fǐ! (Si tu veux me demander quoi que ce soit, je suis là !)" };
  };

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-[200]">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 p-[3px] bg-gradient-to-tr from-[#0B4264] via-[#0088CC] to-[#83CEE9]"
        >
          <div className="absolute inset-0 rounded-full bg-[#0088CC]/20 animate-ping duration-[3s]" />
          <div className="absolute inset-0 rounded-full bg-[#0088CC]/20 animate-ping duration-[3s] [animation-delay:1s]" />
          <div className="absolute inset-0 rounded-full bg-[#0088CC]/20 animate-ping duration-[3s] [animation-delay:2s]" />
          <div className="relative w-full h-full overflow-hidden rounded-full border-2 border-white bg-white">
            <Image 
              src="/Ekodo.png" 
              alt="Eko" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="absolute -top-0.5 -right-0.5 bg-green-500 w-4 h-4 rounded-full border-2 border-white shadow-sm z-10" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="relative w-[350px] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-[#0B4264] p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-white/50 bg-white overflow-hidden relative">
                <Image src="/Ekodo.png" alt="Eko" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-[15px]">Ekodɔ (Eko)</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[11px] opacity-90 font-medium">En ligne</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => {
                  const newMuted = !isMuted;
                  setIsMuted(newMuted);
                  if (newMuted && typeof window !== "undefined") {
                    window.speechSynthesis.cancel();
                  }
                }} 
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title={isMuted ? "Activer le son" : "Couper le son"}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-1 p-5 overflow-y-auto bg-gray-50 flex flex-col gap-4 scroll-smooth"
          >
            {messages.map((msg, index) => (
              <div 
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed shadow-sm ${
                    msg.role === "user" 
                      ? "bg-[#0B4264] text-white rounded-tr-none" 
                      : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                  }`}
                >
                  {msg.content}
                  <div className={`text-[10px] mt-1.5 opacity-60 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-[#0B4264] rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-[#0B4264] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-[#0B4264] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 bg-gray-50 rounded-2xl px-3 py-2 border border-gray-200">
              <button 
                onClick={toggleRecording}
                className={`p-2.5 rounded-xl transition-all ${
                  isRecording 
                    ? "bg-red-500 text-white animate-pulse" 
                    : "text-gray-500 hover:bg-gray-200"
                }`}
              >
                {isRecording ? <MicOff size={20} /> : <Mic size={20} />}
              </button>
              <input 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={isRecording ? "Je vous écoute..." : "Écrire un message..."}
                className="flex-1 bg-transparent border-none focus:outline-none text-[14px] text-gray-800 placeholder:text-gray-400"
              />
              <button 
                onClick={() => handleSend()}
                disabled={!inputText.trim()}
                className="p-2.5 bg-[#0B4264] text-white rounded-xl hover:bg-[#083050] transition-colors disabled:opacity-40"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-center text-[10px] text-gray-400 mt-2 font-medium">
              Ekodɔ peut vous aider via texte ou voix.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
