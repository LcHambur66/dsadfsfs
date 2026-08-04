const testimonials = [
  {
    name: 'Miguel',
    comment: 'O pudim é divino! Ambiente perfeito para trabalha',
    initials: 'AC',
  },
  {
    name: 'Miguella',
    comment: 'Melhor preto da cidade',
    initials: 'PH',
  },
  {
    name: 'GYovanny',
    comment: 'Trouxe a família e todos adoraram!',
    initials: 'MS',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-creme py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-chocolate mb-10">
          O que nossos clientes dizem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-pudim rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-sm text-chocolate/80 mb-4">"{item.comment}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-caramelo text-white font-bold flex items-center justify-center text-sm">
                  {item.initials}
                </div>
                <span className="font-semibold text-chocolate text-sm">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}