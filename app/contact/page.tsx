"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MapPin, Phone, Clock, Mail } from "lucide-react";
import { FacebookIcon, XIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/icons";
import { windowNotification } from "@/components/global-notification";

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FAF9F8]">
      {/* ── Background Image & Header Text ── */}
      <section className="relative w-full pt-[170px] pb-48 lg:pt-[244px] lg:pb-[350px] overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/contactbackground.svg"
            alt="Contact background"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* The floating icon from the mockup (top right of the container) */}
        {/* <div className="absolute right-[-20px] top-[15%] lg:right-[5%] lg:top-[20%] z-20 w-[140px] h-[140px] lg:w-[220px] lg:h-[220px] opacity-80 lg:opacity-100 pointer-events-none">
           <Image src="/mailnotificon.svg" alt="Notification" fill className="object-contain" />
        </div> */}

        <div className="relative z-10 w-full px-4 sm:px-[100px] lg:px-[150px] flex flex-col items-center text-center">
          <h1 className="text-[28px] md:text-4xl lg:text-[42px] font-bold text-[#0B4264] mb-4 lg:mb-6">
            Contactez-nous en toute <span className="font-extrabold text-[#0B4264]">CONFIANCE</span>
          </h1>
          <p className="text-[#0B4264] text-[14px] lg:text-[17px] max-w-[800px] font-medium leading-relaxed">
            Nous disposons d&apos;une équipe prête pour récolter vos craintes, vos demandes et vos messages envers notre équipe municipale.
          </p>
        </div>
      </section>

      {/* ── Main Layout: Form (Left) & Info (Right) ── */}
      <section className="relative z-30 px-4 sm:px-[100px] lg:px-[150px] -mt-32 lg:-mt-[280px] pb-32 lg:pb-36">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Card: Formulaire */}
          <div className="w-full lg:w-[480px] shrink-0 bg-[#FEFDFD] rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-6 md:p-8 relative">
            <h2 className="text-[20px] lg:text-[22px] font-bold text-black mb-6">
              Laissez-nous votre message
            </h2>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              import('@/components/global-notification').then(({ windowNotification }) => {
                windowNotification.show({
                  title: 'Message envoyé !',
                  description: 'Votre message a bien été envoyé, nous vous renverrons bientôt une réponse. Surveillez votre email. Merci beaucoup !',
                  duration: 4000,
                });
              });
            }}>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-[13px] text-gray-700 mb-1.5 font-medium">Votre Nom complet</label>
                  <Input placeholder="Ex : John Doe" className="bg-[#F0EDED]/60 border-transparent text-[13px] py-5 rounded-[8px] focus-visible:ring-[#0B4264]" />
                </div>
                <div className="flex-1">
                  <label className="block text-[13px] text-gray-700 mb-1.5 font-medium">Votre Email</label>
                  <Input placeholder="Ex : johndoe@gmail.com" type="email" className="bg-[#F0EDED]/60 border-transparent text-[13px] py-5 rounded-[8px] focus-visible:ring-[#0B4264]" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] text-gray-700 mb-1.5 font-medium">Sujet</label>
                <Input placeholder="Ex : Signalement d'un vol" className="bg-[#F0EDED]/60 border-transparent text-[13px] py-5 rounded-[8px] focus-visible:ring-[#0B4264]" />
              </div>
              <div>
                <label className="block text-[13px] text-gray-700 mb-1.5 font-medium">Votre message</label>
                <Textarea placeholder="Ecrivez ici..." className="bg-[#F0EDED]/60 border-transparent text-[13px] min-h-[120px] rounded-[8px] resize-none focus-visible:ring-[#0B4264]" />
              </div>
              <Button type="submit" className="mt-2 bg-[#0B4264] hover:bg-[#083050] text-white px-8 py-6 rounded-[8px] text-[14px] font-semibold gap-2 shadow-sm">
                Envoyer
                <Send className="w-4 h-4 ml-1" />
              </Button>
            </form>
          </div>

          {/* Right Column: Contact info & Socials */}
          <div className="flex-1 flex flex-col justify-center lg:pt-24 shrink-0 max-w-xl w-full">
            <h3 className="text-[24px] lg:text-[28px] font-bold text-black leading-tight mb-2">
              N&apos;hésitez pas à nous contacter
            </h3>
            <p className="text-gray-600 text-[14px] mb-8 lg:mb-12">
              Voici quelques de nos coordonnées
            </p>

            {/* 4 Cards Container — With background on mobile */}
            <div className="relative w-full rounded-[24px] overflow-hidden lg:overflow-visible mb-12">
              {/* Background only on mobile/md as per mockup hint */}
              <div className="absolute inset-0 z-0 lg:hidden">
                <Image src="/cardsection.png" alt="" fill className="object-cover brightness-100" />
                <div className="absolute inset-0 bg-[#FAF9F8]/60 backdrop-blur-[2px]" />
              </div>

              {/* Cards Grid */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5 p-4 sm:p-6 lg:p-0 w-full">
                {/* Office */}
                <div className="p-[1.5px] rounded-[22px] bg-gradient-to-br from-blue-600/60 to-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-xl transition-all h-fit group">
                  <a 
                    href="https://maps.app.goo.gl/P8xAsSmRLFiXtFTU6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white group-hover:bg-blue-50/30 rounded-[20px] p-5 flex items-center gap-4 cursor-pointer w-full h-full transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex flex-shrink-0 items-center justify-center">
                      <MapPin className="text-blue-600 w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B4264] text-[15px] leading-tight mb-0.5">Office</h4>
                      <p className="text-gray-500 text-[13px]">BP 2020, Cotonou</p>
                    </div>
                  </a>
                </div>

                {/* Téléphone */}
                <div className="p-[1.5px] rounded-[22px] bg-gradient-to-br from-orange-500/60 to-orange-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-xl transition-all h-fit sm:translate-y-4 lg:translate-y-0 group">
                  <a 
                    href="https://wa.me/2290121300410" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white group-hover:bg-orange-50/30 rounded-[20px] p-5 flex items-center gap-4 w-full h-full cursor-pointer transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex flex-shrink-0 items-center justify-center">
                      <Phone className="text-orange-500 w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B4264] text-[15px] leading-tight mb-0.5">Téléphone</h4>
                      <p className="text-gray-500 text-[13px]">+229 01 21 30 04 10</p>
                    </div>
                  </a>
                </div>

                {/* Heures */}
                <div className="p-[1.5px] rounded-[22px] bg-gradient-to-br from-emerald-600/60 to-emerald-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-xl transition-all h-fit group">
                  <div className="bg-white group-hover:bg-emerald-50/30 rounded-[20px] p-5 flex items-center gap-4 w-full h-full transition-colors">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex flex-shrink-0 items-center justify-center">
                      <Clock className="text-emerald-600 w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B4264] text-[15px] leading-tight mb-0.5">Heures</h4>
                      <p className="text-gray-500 text-[13px]">Lun-Ven : 08h-17h</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-[1.5px] rounded-[22px] bg-gradient-to-br from-purple-600/60 to-purple-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-xl transition-all h-fit sm:translate-y-4 lg:translate-y-0 group">
                  <a 
                    href="mailto:info@cotonou.bj"
                    className="bg-white group-hover:bg-purple-50/30 rounded-[20px] p-5 flex items-center gap-4 w-full h-full cursor-pointer transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex flex-shrink-0 items-center justify-center">
                      <Mail className="text-purple-600 w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B4264] text-[15px] leading-tight mb-0.5">Email</h4>
                      <p className="text-gray-500 text-[13px]">info@cotonou.bj</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <hr className="w-full border-gray-200 mt-2 mb-6" />

            {/* Social Media Row */}
            <div className="flex items-center justify-between w-full">
              <span className="font-bold text-black text-[18px]">Social Media :</span>
              <div className="flex items-center justify-between flex-1 ml-6 sm:ml-10">
                <a href="https://www.facebook.com/lavilledecotonou/?ti=as" target="_blank" rel="noopener noreferrer" className="text-[#0B4264] hover:opacity-80 transition-opacity">
                  <FacebookIcon className="w-6 h-6" />
                </a>
                <a href="https://x.com/cotonoumairie" target="_blank" rel="noopener noreferrer" className="text-[#0B4264] hover:opacity-80 transition-opacity">
                  <XIcon className="w-[20px] h-[20px]" />
                </a>
                <a href="https://www.instagram.com/mairiedecotonouofficiel/" target="_blank" rel="noopener noreferrer" className="text-[#0B4264] hover:opacity-80 transition-opacity">
                  <InstagramIcon className="w-6 h-6" />
                </a>
                <a href="https://flickr.com/photos/199317604@N06" target="_blank" rel="noopener noreferrer" className="text-[#0B4264] hover:opacity-80 transition-opacity flex items-center gap-[3px]">
                  <span className="w-2 h-2 bg-[#0B4264] rounded-full" /><span className="w-2 h-2 bg-[#0B4264] rounded-full" />
                </a>
                <a href="https://www.youtube.com/watch?v=8XU2fOMUZB8&feature=youtu.be" target="_blank" rel="noopener noreferrer" className="text-[#0B4264] hover:opacity-80 transition-opacity mt-1">
                  <YoutubeIcon className="w-[26px] h-[26px]" />
                </a>
                <a href="https://www.linkedin.com/company/mairie-de-cotonou/about/" target="_blank" rel="noopener noreferrer" className="text-[#0B4264] hover:opacity-80 transition-opacity">
                  <LinkedinIcon className="w-[22px] h-[22px]" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Newsletter Section ── */}
      <section className="px-4 sm:px-[100px] lg:px-[150px] pb-16 lg:pb-24 bg-[#FAF9F8] relative z-20">
        <div className="max-w-[1000px] mx-auto rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] p-[2px] bg-gradient-to-tr from-[#FDBC2F] via-[#83CEE9] to-[#0B4264]">
          <div className="w-full h-full rounded-[10px] overflow-hidden relative bg-white">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <Image src="/newsletterbackground.png" alt="Newsletter" fill className="object-cover" />
            </div>
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center py-12 px-6 lg:py-16">
              <h2 className="text-[26px] lg:text-[32px] font-bold text-[#0B4264] mb-3">
                S&apos;inscrire à notre Newsletter
              </h2>
              <p className="text-[#0B4264] text-[15px] max-w-lg mb-8">
                Recevez directement dans votre boîte mail des informations concernant votre commune.<br />
                Garantie sans SPAMS.
              </p>
              <form
                className="w-full max-w-2xl flex flex-col items-center"
                onSubmit={(e) => {
                  e.preventDefault();
                  windowNotification.show({
                    title: "Inscription Réussie !",
                    description: "Votre email a bien été reçu pour inscription à notre newsletter, toutes les informations capitales de la commune depuis votre téléphone !",
                    duration: 4000
                  });
                }}
              >
                <div className="w-full text-left mb-6">
                  <label className="block text-[#0B4264] text-[14px] font-bold mb-2">Votre Email :</label>
                  <Input placeholder="Ex : info@gmail.com" className="w-full bg-[#EBE9E8]/90 border-transparent py-7 px-4 rounded-lg text-[14px] focus-visible:ring-[#0B4264]" />
                </div>
                <Button type="submit" className="bg-[#0B4264] hover:bg-[#072a40] text-white px-10 py-6 rounded-lg text-[15px] font-semibold gap-2">
                  S&apos;inscrire
                  <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                  </svg>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Localisation Section ── */}
      <section className="px-4 sm:px-[100px] lg:px-[150px] pb-[180px] lg:pb-[230px] bg-[#FAF9F8] relative z-20">
        <div className="flex flex-col items-center">
          <h2 className="text-[26px] lg:text-[32px] font-bold text-[#0B4264] mb-10 pb-1 border-b-2 border-[#0B4264] inline-block">
            Notre localisation
          </h2>

          <div className="w-full max-w-[1000px] rounded-[12px] p-[1.5px] bg-gradient-to-tr from-[#0B4264] via-[#FDBC2F] to-[#2E8B57] shadow-lg">
            <div className="w-full relative rounded-[10.5px] overflow-hidden bg-white aspect-video max-h-[500px]">
              <Image
                src="/townhalllocation.png"
                alt="Carte de localisation de la mairie"
                fill
                className="object-cover"
              />
              <a 
                href="https://maps.app.goo.gl/P8xAsSmRLFiXtFTU6" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 bg-[#0B4264] hover:bg-[#072a40] text-white px-8 py-6 rounded-lg text-[15px] font-semibold shadow-md">
                  Ouvrir une carte
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
