import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 main-content">
        <h1 className="text-6xl font-bold text-halo-blue animate-pulse">404</h1>
        <h2 className="text-2xl text-halo-orange">Mission Failed: Page Not Found</h2>
        <p className="text-halo-light-blue max-w-md mx-auto">
        Las coordenadas que estás buscando parecen estar en otra dimensión. Te llevaremos de vuelta a una zona segura..
        </p>
        <Button asChild className="bg-halo-blue hover:bg-halo-light-blue text-black font-semibold mt-4">
          <Link href="/">Retorno a la Base</Link>
        </Button>
      </div>
    </div>
  )
}

