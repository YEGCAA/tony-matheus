import { Target, Zap, Heart, Brain, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'Quebre a Algema de Ouro',
    description: 'Identifique as crenças que te mantêm confortável mas estagnado — e desmonte cada uma com método.'
  },
  {
    icon: Target,
    title: 'Domine a Beleza Funcional',
    description: 'Aprenda o método exclusivo que usa arte clássica como base para diagnóstico e escultura corporal de precisão.'
  },
  {
    icon: Zap,
    title: 'Medicina Regenerativa de Ponta',
    description: 'Protocolos com hidroxiapatita e ultrassom microfocado para o paciente que emagreceu rápido e quer definição.'
  },
  {
    icon: TrendingUp,
    title: 'Torne-se o Médico-Fundador',
    description: 'Saia do modelo "consultório com agenda" e construa um ecossistema integrado com alto ticket e autoridade.'
  },
  {
    icon: Heart,
    title: 'Reacenda a chama da medicina',
    description: 'Reconecte-se com o que te fez escolher medicina — mas agora com método, arte e visão de futuro.'
  },
  {
    icon: Users,
    title: 'Posicionamento que comanda preço',
    description: 'Desenvolva o posicionamento e a comunicação para atrair pacientes que escolhem por valor, não por preço.'
  }
];

export default function Benefits() {
  return (
    <section className="bg-brand-primary py-20 md:py-[80px] px-5 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-white text-[11px] font-semibold tracking-[0.15em] uppercase">
            O que você vai conquistar
          </span>
        </div>
        
        <h2 className="text-white text-4xl md:text-[67px] leading-[1.1] font-medium tracking-[-0.03em] max-w-3xl mb-20">
          Tudo que você precisa para construir um legado real.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-[20px] mb-3 leading-snug">
                {benefit.title}
              </h3>
              <p className="text-white/80 text-[16px] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
