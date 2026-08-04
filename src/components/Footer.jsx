import { FaCoffee, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-chocolate text-creme py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-bold text-lg">
          <FaCoffee className="text-caramelo" />
          Café Pudim
        </div>

        <div className="flex gap-4">
          <a href="#" className="hover:text-caramelo transition-colors">
            <FaInstagram className="text-xl" />
          </a>
          <a href="#" className="hover:text-caramelo transition-colors">
            <FaFacebook className="text-xl" />
          </a>
          <a href="#" className="hover:text-caramelo transition-colors">
            <FaWhatsapp className="text-xl" />
          </a>
        </div>

        <p className="text-sm text-creme/60">
          © 2026 Café Pudim. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}