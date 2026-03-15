import { Check } from 'lucide-react';

export default function Tickets() {
  const plans = [
    {
      name: 'Essential',
      price: 'R$ 8.000',
      originalPrice: 'R$ 12.000',
      note: 'Vagas limitadas por turma',
      buttonText: 'Garantir vaga Essential',
      features: [
        '2 dias de imersão presencial completa',
        'Acesso aos módulos de metacognição e Beleza Funcional',
        'Material de apoio digital',
        'Certificado de participação',
        'Acesso à comunidade MetaHumano'
      ]
    },
    {
      name: 'Premium',
      badge: 'Mais escolhido',
      price: 'R$ 12.000',
      originalPrice: 'R$ 18.000',
      note: 'Apenas 8 vagas disponíveis',
      buttonText: 'Garantir vaga Premium',
      features: [
        'Tudo do Essential',
        'Sessão de mentoria individual pré-imersão (60 min)',
        'Protocolo personalizado de posicionamento',
        'Acesso ao grupo exclusivo de alumni por 6 meses',
        '1 sessão de supervisão clínica pós-evento'
      ]
    },
    {
      name: 'Diamond',
      price: 'R$ 22.000',
      originalPrice: 'R$ 32.000',
      note: 'Apenas 3 vagas — seleção criteriosa',
      buttonText: 'Garantir vaga Diamond',
      features: [
        'Tudo do Premium',
        'Mentoria de carreira com o Dr. Matheus por 3 meses',
        'Acompanhamento na construção do posicionamento',
        'Acesso vitalício à comunidade MetaHumano',
        'Convite para o próximo evento internacional'
      ]
    }
  ];

  return (
    <section className="bg-brand-primary py-20 md:py-[80px] px-5 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-white text-[11px] font-semibold tracking-[0.15em] uppercase">
              Ingressos
            </span>
          </div>
          <h2 className="text-white text-4xl md:text-[67px] leading-[1.1] font-medium tracking-[-0.03em] mb-6">
            Entre na arena.
          </h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto">
            Turmas reduzidas por design. O método exige atenção individual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-[16px] p-8 flex flex-col relative">
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-black font-bold text-[22px] mb-4">
                {plan.name}
              </h3>
              
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-black font-medium text-[40px] tracking-[-0.02em] leading-none">
                  {plan.price}
                </span>
                <span className="text-brand-dark-2 text-lg line-through">
                  {plan.originalPrice}
                </span>
              </div>
              
              <p className="text-brand-dark-2 text-[15px] mb-8 font-medium">
                {plan.note}
              </p>

              <button className="w-full bg-black text-white rounded-full py-4 text-[16px] font-medium hover:bg-brand-dark-2 transition-colors mb-8">
                {plan.buttonText}
              </button>

              <ul className="flex flex-col gap-4 mt-auto">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-black text-[15px] leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
