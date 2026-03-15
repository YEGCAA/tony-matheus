import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Dra. Camila R.',
      title: 'Médica Estética · São Paulo',
      quote: "Entrei achando que era mais um curso de técnica. Saí com uma identidade nova. A Algema de Ouro faz sentido quando você para pra olhar de fora — e o Dr. Matheus te força a fazer isso.",
      image: 'https://picsum.photos/seed/med1/400/600'
    },
    {
      name: 'Dr. Rafael M.',
      title: 'Dermatologista · Belo Horizonte',
      quote: "A Beleza Funcional mudou completamente como eu vejo o corpo. Não é sobre colocar produto — é sobre leitura e escultura. Em 30 dias após a imersão, dobrei meu ticket médio.",
      image: 'https://picsum.photos/seed/med2/400/600'
    },
    {
      name: 'Dra. Patricia L.',
      title: 'Nutróloga Estética · Recife',
      quote: "Voltei pra medicina com olhos novos. Era exatamente o que eu precisava — não motivação, mas método. Método real, aplicado, com base em 10 anos de refinamento.",
      image: 'https://picsum.photos/seed/med3/400/600'
    }
  ];

  return (
    <section className="bg-white py-20 md:py-[80px] px-5 md:px-12 border-t border-brand-gray/30">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              <span className="text-brand-primary text-[11px] font-semibold tracking-[0.15em] uppercase">
                Resultados Reais
              </span>
            </div>
            <h2 className="text-black text-4xl md:text-[55px] leading-[1.1] font-medium tracking-[-0.028em] max-w-2xl">
              O que médicos como você dizem.
            </h2>
          </div>
          
          <div className="hidden md:flex gap-4">
            <button className="w-12 h-12 rounded-full border border-brand-gray flex items-center justify-center hover:bg-brand-light transition-colors">
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button className="w-12 h-12 rounded-full border border-brand-gray flex items-center justify-center hover:bg-brand-light transition-colors">
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar pl-5 md:pl-12 -ml-5 md:-ml-12 pr-5 md:pr-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex-none w-[280px] md:w-[320px] snap-center flex flex-col gap-6 group cursor-pointer"
            >
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-colors">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-black text-[18px] leading-relaxed mb-4 font-medium">
                  "{testimonial.quote}"
                </p>
                <p className="text-brand-dark-2 text-[14px] font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-brand-gray text-[14px]">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
