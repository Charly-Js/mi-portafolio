import Link from "next/link"

const menuItems = [
  { name: "Proyectos", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Aceraca de mi", path: "/about" },
  { name: "Contacto", path: "/contact" },
]

export default function MainMenu() {
  return (
    <nav className="flex justify-center">
      <ul className="flex flex-wrap justify-center gap-4">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>
              <span className="inline-block px-6 py-3 bg-halo-dark-blue bg-opacity-50 text-halo-light-blue rounded-full hover:bg-opacity-70 transition-all duration-300 hover:text-halo-blue">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

