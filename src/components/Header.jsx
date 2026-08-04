import { FaCoffee } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-creme shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl text-chocolate">
          <FaCoffee className="text-caramelo text-2xl" />
          Café Pudim
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <span>Início</span>
          <span>Diferenciais</span>
          <span>Cardápio</span>
          <span>Depoimentos</span>
        </nav>

        <button className="bg-caramelo text-white text-sm font-semibold px-5 py-2 rounded-full">
          Peça Já
        </button>
      </div>
    </header>
  )
}