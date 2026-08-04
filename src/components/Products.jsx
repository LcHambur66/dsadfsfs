import { FaCoffee, FaCookie, FaBreadSlice, FaGlassWhiskey } from 'react-icons/fa'

const products = [
  {
    icon: FaCoffee,
    name: 'Café Especial',
    description: 'Expresso, cappuccino ou filtrado com grãos selecionados.',
    price: 'R$ 12,90',
  },
  {
    icon: FaCookie,
    name: 'Pudim Clássico',
    description: 'Pudim de leite condensado com calda de caramelo.',
    price: 'R$ 18,00',
  },
  {
    icon: FaBreadSlice,
    name: 'Pães & Doces',
    description: 'Croissants, pães de queijo e doces artesanais.',
    price: 'R$ 9,50',
  },
  {
    icon: FaGlassWhiskey,
    name: 'Bebidas Especiais',
    description: 'Chocolate quente, chai latte e opções geladas.',
    price: 'R$ 15,90',
  },
]

export default function Products() {
  return (
    <section id="cardapio" className="bg-pudim py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-chocolate mb-10">
          Nosso Cardápio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-creme rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="w-12 h-12 mb-4 bg-caramelo rounded-xl flex items-center justify-center">
                  <Icon className="text-xl text-white" />
                </div>
                <h3 className="font-bold text-chocolate mb-1">{item.name}</h3>
                <p className="text-sm text-chocolate/70 mb-4 flex-1">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-caramelo">{item.price}</span>
                  <button className="bg-chocolate hover:bg-caramelo text-white text-sm px-4 py-1.5 rounded-full transition-colors">
                    Pedir
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}