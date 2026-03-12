"use client";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { FacebookIcon, XIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/icons";

const CONTACTS = [
  {
    icon: MapPin,
    title: "Office",
    value: "BP 1320 Cotonou",
    color: "bg-blue-500",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+229 23 30 04 10",
    color: "bg-[#FDE100]",
  },
  {
    icon: Clock,
    title: "Heures",
    value: "Lun-Vend: 7h30 - 16h30",
    color: "bg-green-500",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@cotonou.cm",
    color: "bg-purple-500",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contactez-nous en toute CONFIANCE"
        subtitle="Nous disposons d'une équipe prête pour vous fournir une assistance, répondre à vos demandes et à vos messages concernant notre service municipal."
      />

      <section className="py-12 px-4 sm:px-[100px] lg:px-[150px] -mt-24 relative z-20">
        <Card className="max-w-2xl mx-auto shadow-xl border-0 overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-xl font-bold text-[#0B4264] mb-6">
              Laissez-nous votre message
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Votre Nom complet
                  </label>
                  <Input placeholder="Mr. John Doe" className="rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Votre Email
                  </label>
                  <Input placeholder="dr.johnDoe@gmail.com" type="email" className="rounded-lg" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <Input placeholder="Dr. question/suggestion/etc." className="rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Votre Message
                </label>
                <Textarea placeholder="Ecrivez ici..." className="min-h-[120px] rounded-lg" />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#0B4264] hover:bg-[#072a40] gap-2"
              >
                Envoyer
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Contact methods */}
      <section className="py-16 px-4 sm:px-[100px] lg:px-[150px] bg-[#0B4264] text-white">
        <h2 className="text-2xl font-bold mb-2">N&apos;hésitez pas à nous contacter</h2>
        <p className="text-white/80 mb-10">Voici quelques-uns de nos contacts</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {CONTACTS.map((c) => (
            <Card key={c.title} className="border-0 bg-white/10 overflow-hidden">
              <CardContent className="p-6 text-center">
                <div
                  className={`w-14 h-14 rounded-full ${c.color} flex items-center justify-center mx-auto mb-3`}
                >
                  <c.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-white">{c.title}</h3>
                <p className="text-sm text-white/90 mt-1">{c.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#" aria-label="Facebook" className="text-white hover:opacity-80">
            <FacebookIcon className="w-6 h-6" />
          </a>
          <a href="#" aria-label="X" className="text-white hover:opacity-80">
            <XIcon className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram" className="text-white hover:opacity-80">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="#" aria-label="YouTube" className="text-white hover:opacity-80">
            <YoutubeIcon className="w-6 h-6" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-white hover:opacity-80">
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 px-4 sm:px-[100px] lg:px-[150px] bg-[#83CEE9]">
        <h2 className="text-2xl font-bold text-white mb-2">
          S&apos;inscrire à notre Newsletter
        </h2>
        <p className="text-white/90 mb-6 max-w-xl">
          Recevez directement dans votre boîte email des informations concernant votre commune.
          Gérez votre abonnement.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md">
          <Input
            placeholder="Votre Email - Ex: info@mail.com"
            className="rounded-lg bg-white border-0 flex-1"
          />
          <Button className="bg-[#0B4264] hover:bg-[#072a40] shrink-0 gap-2">
            S&apos;inscrire
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 px-4 sm:px-[100px] lg:px-[150px] bg-white">
        <h2 className="text-2xl font-bold text-[#0B4264] mb-6">Notre localisation</h2>
        <div className="relative w-full aspect-video max-h-[400px] bg-gray-200 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            Carte - Mairie de Cotonou (intégration carte à prévoir)
          </div>
          <Button
            className="absolute bottom-4 right-4 bg-[#0B4264] hover:bg-[#072a40]"
          >
            Voir sur la carte
          </Button>
        </div>
      </section>
    </>
  );
}
