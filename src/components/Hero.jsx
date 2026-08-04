import { FaCoffee } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="inicio" className="bg-pudim py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-chocolate mb-4">
            O sabor do <span className="text-caramelo">pudim</span> em cada xícara
          </h1>
          <p className="text-chocolate/80 mb-8 max-w-md mx-auto md:mx-0">
            Café especial, sobremesas cremosas e um ambiente aconchegante para relaxar.
          </p>
          <a
            href="#cardapio"
            className="inline-block bg-caramelo hover:bg-chocolate text-white font-semibold px-8 py-3 rounded-full shadow-md transition-colors"
          >
            Ver Cardápio
          </a>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-56 h-56 bg-creme rounded-full shadow-xl flex items-center justify-center">
            <FaCoffee className="text-7xl text-caramelo" />
          </div>
        </div>
      </div>
    </section>
  )
}