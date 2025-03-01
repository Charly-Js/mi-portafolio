export default function About() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-green-500 mb-8">Sobre mí</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <p className="text-gray-300 mb-4">
          Soy Carlos Eduardo Pinzón González, un apasionado desarrollador de software de Zipaquirá, Colombia.
        </p>
        <p className="text-gray-300 mb-4">Mi formación incluye:</p>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Técnico en Sistemas Computacionales</li>
          <li>Análisis y Desarrollo de Software en el SENA Colombia</li>
        </ul>
        <p className="text-gray-300">
          Me especializo en el desarrollo de software y la implementación de soluciones de IA, siempre buscando innovar
          y mejorar mis habilidades en el mundo tecnológico.
        </p>
      </div>
    </section>
  )
}

