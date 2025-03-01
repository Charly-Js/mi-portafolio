import { motion } from "framer-motion"

const projects = [
  { name: "Colgit", description: "Herramienta de versionamiento open source" },
  { name: "Petshop", description: "Tienda completa de veterinaria con diversos servicios" },
  { name: "Nova", description: "IA local para responder preguntas y buscar archivos" },
  { name: "YouBriefSoftware", description: "Emprendimiento de desarrollo de software a medida" },
]

export default function Projects() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-green-500 mb-8">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-red-500 mb-2">{project.name}</h3>
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

