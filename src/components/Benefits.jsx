import { FaLeaf, FaHeart, FaStar } from 'react-icons/fa'

const benefits = [
  {
    icon: FaLeaf,
    title: 'Ingredientes Naturais',
    description: 'Grãos e ingredientes frescos selecionados todos os dias.',
  },
  {
    icon: FaHeart,
    title: 'Feito com Carinho',
    description: 'Cada xícara e sobremesa preparada à mão com atenção.',
  },
  {
    icon: FaStar,
    title: 'Receitas Exclusivas',
    description: 'Pudim clássico e cafés especiais que só tem aqui.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-creme py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-chocolate mb-10">
          Por que escolher o Café Pudim?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-pudim rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-caramelo/20 rounded-full flex items-center justify-center">
                  <Icon className="text-2xl text-caramelo" />
                </div>
                <h3 className="font-bold text-chocolate mb-2">{item.title}</h3>
                <p className="text-sm text-chocolate/70">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}