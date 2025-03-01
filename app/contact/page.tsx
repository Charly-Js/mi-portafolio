"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import EnergySwords from "@/components/EnergySwords"

export default function Contact() {
  const mailtoLink = "mailto:youbriefsoft@gmail.com";

  return (
    <div className="container mx-auto px-4 py-16">
      <main className="main-content">
        <h1 className="text-4xl font-bold mb-6 text-center text-halo-blue">CONTACTAME</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-black bg-opacity-30 border-halo-blue">
            <CardHeader>
              <CardTitle className="text-halo-orange flex items-center">
                <Mail className="mr-2" />
                Contactame
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-center">
                <p className="text-halo-light-blue">
                Para contactarme, haga clic en el botón a continuación para abrir su aplicación de correo electrónico predeterminada y enviar un correo electrónico a: <strong>youbriefsoft@gmail.com</strong>
                </p>
                <Button
                  className="w-full bg-halo-blue hover:bg-halo-light-blue text-black font-semibold"
                  onClick={() => window.location.href = mailtoLink}
                >
                  <Mail className="mr-2 h-4 w-4" /> Enviar correo
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-black bg-opacity-30 border-halo-blue">
              <CardHeader>
                <CardTitle className="text-halo-orange">Contactame</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-around">
                  <SocialLink href="https://github.com/Charly-Js" icon={<Github />} label="GitHub" />
                  <SocialLink href="https://www.linkedin.com/in/carlos-eduardo-pinzon-gonzalez-87033a22b/" icon={<Linkedin />} label="LinkedIn" />
                  <SocialLink href="https://wa.me/573209650037" icon={<FontAwesomeIcon icon={faWhatsapp} />} label="WhatsApp" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black bg-opacity-30 border-halo-blue">
              <CardHeader>
                <CardTitle className="text-halo-orange">Mensaje Inspirador</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-halo-light-blue mb-4">
                  "Los espartanos nunca mueren, solo están desaparecidos en combate.
                  ¡Pero tu mensaje no lo estará, me llegará más rápido que un crucero del Covenant!"
                </p>
                <div className="flex justify-center">
                  <EnergySwords />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-halo-light-blue hover:text-halo-blue transition-colors duration-300 flex flex-col items-center"
      aria-label={label}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <span className="text-sm">{label}</span>
    </a>
  )
}
