"use client";
import { useEffect, useState } from "react";

export type GlobalNotificationData = {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  duration?: number;
};

// Super lightweight event emitter for a standalone Notification System
type Listener = (data: GlobalNotificationData) => void;
let listeners: Listener[] = [];
export const windowNotification = {
  subscribe: (listener: Listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  show: (data: GlobalNotificationData) => {
    listeners.forEach((l) => l(data));
  },
};

export function GlobalNotificationRoot() {
  const [data, setData] = useState<GlobalNotificationData | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    const unsub = windowNotification.subscribe((newData) => {
      // If a notification is already visible, clear it so we can re-trigger animations
      setIsVisible(false);
      
      // tiny delay to allow DOM to flush false before true (restarting the CSS animation natively)
      setTimeout(() => {
         setData(newData);
         setIsVisible(true);
         
         const duration = newData.duration || 3000;
         
         timer = setTimeout(() => {
           setIsVisible(false);
           
           // If it's explicitly the redirect notification logic for the ANIP protocol
           if (newData.linkHref && newData.linkText === "eservices.anip.bj") {
              window.location.href = newData.linkHref;
           }
         }, duration);
      }, 50);
    });
    
    return () => {
      unsub();
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible || !data) return null;

  return (
    <>
      <style>{`
        @keyframes shrinkProgressNotif {
          0% { width: 100%; }
          100% { width: 0%; }
        }
        .animate-shrink-notif {
          animation: shrinkProgressNotif ${data.duration || 3000}ms linear forwards;
        }
      `}</style>

      {/* Re-positioned strictly at bottom-right per user mockup, not glued edge-to-edge */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[999999] animate-in fade-in slide-in-from-bottom-6 duration-300">
        <div 
          className="p-[2.5px] rounded-[16px] shadow-[0_15px_40px_rgba(0,0,0,0.18)] w-[90vw] max-w-[420px]"
          style={{ background: 'linear-gradient(to right, #083c5a, #268955, #f0ba32)' }}
        >
          <div className="bg-white rounded-[13.5px] px-6 py-6 pb-7 relative overflow-hidden flex flex-col items-start gap-1">
            <h3 className="text-black text-[22px] font-extrabold tracking-tight mb-2">
               {data.title}
            </h3>
            <p className="text-black text-[14px] font-medium leading-relaxed mb-3">
              {data.description}
            </p>
            {data.linkHref && data.linkText && (
              <a 
                href={data.linkHref} 
                target={data.linkHref.startsWith('http') ? "_blank" : "_self"}
                rel="noreferrer" 
                className="text-black underline underline-offset-4 decoration-black/60 text-[14px] font-bold"
              >
                {data.linkText}
              </a>
            )}
            
            {/* Animated Bottom Progress Bar */}
            <div 
              className="absolute bottom-0 left-0 h-[4.5px] w-full animate-shrink-notif"
              style={{ background: 'linear-gradient(to right, #083c5a, #268955, #f0ba32)' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
