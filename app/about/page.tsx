import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SkillBar } from "@/components/SkillBar"
import { Timeline } from "@/components/Timeline"
import { PersonalInterests } from "@/components/PersonalInterests"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <main className="main-content">
        <h1 className="text-4xl font-bold mb-6 text-center text-halo-blue light:text-black">About Me</h1>
        <Card className="bg-black bg-opacity-50 border-halo-blue light:bg-white light:bg-opacity-80 light:border-gray-300">
          <CardHeader>
            <CardTitle className="text-halo-orange light:text-red-600 font-oswald">
              Carlos Eduardo Pinzón González
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-halo-light-blue light:text-black mb-4">
                          ¡Saludos, espartano! Soy un desarrollador de software apasionado ubicado en Zipaquirá, Colombia,
                          especializado en integración de IA y desarrollo full-stack. Aunque soy un junior, 
                          estoy  en una misión para superar los límites  de la tecnología y crear  soluciones innovadoras
                          que marquen la diferencia en el desarrollo de software.
            </p>
            <Tabs defaultValue="background" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="background">Antecedentes</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="experience">Experiencia</TabsTrigger>
                <TabsTrigger value="interests">Intereses</TabsTrigger>
              </TabsList>
              <TabsContent value="background">
                <h3 className="text-xl font-semibold mb-2 text-halo-orange light:text-red-600 font-oswald">
                  Education
                </h3>
                <ul className="list-disc list-inside text-halo-light-blue light:text-black mb-4">
                  <li>Tecnico  en sistemas Computacionales</li>
                  <li>Análisis y Desarrollo de Software SENA Colombia</li>
                </ul>
                <p className="text-halo-light-blue light:text-black">
                Mi viaje en el mundo de la tecnología comenzó con una fascinación por cómo funcionan
                las computadoras. Esta curiosidad me llevó a seguir una educación formal en sistemas
                informáticos y desarrollo de software. A lo largo del camino, he perfeccionado mis
                habilidades a través de innumerables horas de programación, resolución de problemas y
                aprendizaje contunuo.
                </p>
              </TabsContent>
              <TabsContent value="skills">
                <h3 className="text-xl font-semibold mb-2 text-halo-orange light:text-red-600 font-oswald">
                  Technical Arsenal
                </h3>
                <div className="space-y-4">
                  <SkillBar skill="React" level={50} />
                  <SkillBar skill="Node.js" level={40} />
                  <SkillBar skill="Python" level={60} />
                  <SkillBar skill="AI Integration" level={65} />
                  <SkillBar skill="Database Management" level={50} />
                  <SkillBar skill="JAVA" level={65} />               
                </div>
              </TabsContent>
              <TabsContent value="experience">
                <Timeline />
              </TabsContent>
              <TabsContent value="interests">
                <PersonalInterests />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

