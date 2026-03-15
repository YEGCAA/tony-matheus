export default function Speakers() {
  const agenda = [
    {
      block: 'Dia 1 · Manhã',
      title: 'Quebre a Algema de Ouro',
      description: 'Diagnóstico de identidade, score emocional e o framework de metacognição aplicado à carreira médica. Você mapeia o que te trava antes de aprender qualquer técnica.'
    },
    {
      block: 'Dia 1 · Tarde',
      title: 'A Ciência da Beleza Funcional',
      description: 'Fundamentos do método: diagnóstico causal, princípios de arte clássica, leitura de postura e proporção corporal. Teoria que sustenta a prática do dia seguinte.'
    },
    {
      block: 'Dia 2 · Manhã',
      title: 'Escultura Corporal na Prática',
      description: 'Casos clínicos ao vivo: projeção de glúteo, remodelação de braço, abdômen pós-emagrecimento, região umbilical. Protocolos com hidroxiapatita e ultrassom microfocado.'
    },
    {
      block: 'Dia 2 · Tarde',
      title: 'Arquitetura do Médico-Fundador',
      description: 'Posicionamento, ecossistema integrado, ticket alto e comunicação de autoridade. Você sai com um mapa de carreira — não com mais uma técnica solta.'
    }
  ];

  return (
    <section className="bg-black py-20 md:py-[80px] px-5 md:px-12 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto">
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-white text-[11px] font-semibold tracking-[0.15em] uppercase">
            Agenda
          </span>
        </div>

        <h2 className="text-white text-4xl md:text-[55px] leading-[1.1] font-medium tracking-[-0.028em] mb-6">
          Crescimento em dias,<br />não em décadas.
        </h2>
        
        <p className="text-white/80 text-lg max-w-2xl mb-16 leading-relaxed">
          Cada bloco foi desenhado com uma progressão narrativa precisa. Você entra como está. Sai como quer ser.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agenda.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <span className="text-white/60 text-sm font-bold tracking-wider uppercase mb-4 block">
                {item.block}
              </span>
              <h3 className="text-white font-bold text-2xl mb-4">
                {item.title}
              </h3>
              <p className="text-white/80 text-[16px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
