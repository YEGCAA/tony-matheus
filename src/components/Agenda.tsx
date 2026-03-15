export default function Agenda() {
  const pillars = [
    {
      day: 'Pilar 01',
      title: 'A Arte Interna',
      description: 'Metacognição aplicada à carreira médica. O conjunto de crenças e estados emocionais que te trouxe até aqui é exatamente o que te impede de ir além. Através de um framework de transformação de identidade baseado em score emocional e Kairós, você reconstrói sua identidade a partir do futuro que quer criar — não do passado que já viveu.',
      result: '→ Você sai com clareza, método de mudança de estado e nova identidade profissional.',
      image: 'https://picsum.photos/seed/day1/400/300'
    },
    {
      day: 'Pilar 02',
      title: 'A Arte Externa',
      description: 'Beleza Funcional — a metodologia exclusiva sistematizada desde 2017. Diagnóstico causal baseado em arte clássica: proporção, harmonia, luz e sombra aplicados ao corpo humano. Escultura sem volume — ancoragem de pele em pontos musculares, criando definição real onde antes só havia flacidez.',
      result: '→ Uma abordagem técnica que nenhum concorrente ensina, aplicável imediatamente.',
      image: 'https://picsum.photos/seed/day2/400/300'
    },
    {
      day: 'Pilar 03',
      title: 'Medicina Regenerativa',
      description: 'As tecnologias que estão redefinindo o mercado: hidroxiapatita de cálcio como bioestimulador de alta definição, ultrassom microfocado de nova geração, protocolos de precisão para o paciente que emagreceu rápido — a maior tendência do mercado hoje.',
      result: '→ Domínio das ferramentas que 95% do mercado ainda não usa.',
      image: 'https://picsum.photos/seed/day3/400/300'
    },
    {
      day: 'Pilar 04',
      title: 'O Médico-Fundador',
      description: 'Como sair do modelo "consultório com agenda" e construir um ecossistema de saúde integrado. Posicionamento, comunicação de alto valor, venda de tratamentos premium, visão sistêmica de carreira. Não é sobre marketing — é sobre arquitetura de autoridade.',
      result: '→ Um mapa claro de como se tornar referência, não mais um especialista disputando preço.',
      image: 'https://picsum.photos/seed/day4/400/300'
    }
  ];

  return (
    <section className="bg-white py-20 md:py-[80px] px-5 md:px-12 border-t border-brand-gray/30">
      <div className="max-w-[1200px] mx-auto">
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
          <span className="text-brand-primary text-[11px] font-semibold tracking-[0.15em] uppercase">
            O Método
          </span>
        </div>
        
        <h2 className="text-black text-4xl md:text-[55px] leading-[1.1] font-medium tracking-[-0.028em] mb-6">
          MetaTransformação:<br />dois mundos, um sistema.
        </h2>

        <p className="text-brand-dark-2 text-lg leading-relaxed max-w-3xl mb-16">
          Ninguém mais no Brasil está unindo as duas camadas que realmente determinam o teto de um médico. O método do Dr. Matheus integra o interno e o externo — porque um sem o outro é incompleto.
        </p>

        <div className="flex flex-col gap-12 md:gap-16">
          {pillars.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start border-b border-brand-gray/30 pb-12 md:pb-16 last:border-0 last:pb-0">
              <div className="w-full md:w-32 flex-shrink-0">
                <span className="text-brand-dark-2 font-medium text-lg uppercase tracking-wider">
                  {item.day}
                </span>
              </div>
              
              <div className="flex-1 max-w-2xl">
                <h3 className="text-black font-bold text-2xl md:text-[28px] mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-brand-dark-2 text-lg leading-relaxed mb-6">
                  {item.description}
                </p>
                <p className="text-black font-medium text-lg">
                  {item.result}
                </p>
              </div>
              
              <div className="w-full md:w-[300px] h-[200px] flex-shrink-0 rounded-2xl overflow-hidden mt-6 md:mt-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
