// El SEO (Search Engine Optimization) en el contexto de un desarrollo web se refiere a las prácticas y técnicas utilizadas para mejorar la visibilidad y el posicionamiento de un sitio web en los resultados de búsqueda orgánica de los motores de búsqueda como Google, Bing y Yahoo, entre otros.
import { MainProducts } from "app/components/home/MainProducts"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "✨ Future world",
  description: "Welcome to the future world, an ecommerce from other century",
  keywords: ["ecommerce", "future", "world","technology"],
}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  )
}

