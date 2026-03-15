export default function Science() {
  return (
    <section className="bg-black py-20 md:py-[80px] px-5 md:px-12 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="inline-flex items-center justify-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-white text-[11px] font-semibold tracking-[0.15em] uppercase">
            O Momento
          </span>
        </div>

        <h2 className="text-white text-4xl md:text-[67px] leading-[1.1] font-medium tracking-[-0.03em] mb-6 max-w-4xl mx-auto">
          A maior janela de oportunidade da história da medicina estética.
        </h2>
        
        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-20 leading-relaxed">
          Três forças de mercado estão convergindo ao mesmo tempo. O médico que entende esse momento lidera. O que não entende disputa preço.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <span className="text-white text-6xl md:text-[80px] font-bold tracking-tighter mb-4">
              +500%
            </span>
            <p className="text-white/70 text-[15px] max-w-[250px] leading-relaxed">
              Crescimento da demanda por remodelação corporal pós-Ozempic / Tirzepatida
            </p>
          </div>
          
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <span className="text-white text-6xl md:text-[80px] font-bold tracking-tighter mb-4">
              8×
            </span>
            <p className="text-white/70 text-[15px] max-w-[250px] leading-relaxed">
              Diferença de ticket entre médico posicionado e médico sem diferencial
            </p>
          </div>
          
          <div className="flex flex-col items-center pt-8 md:pt-0">
            <span className="text-white text-6xl md:text-[80px] font-bold tracking-tighter mb-4">
              2017
            </span>
            <p className="text-white/70 text-[15px] max-w-[250px] leading-relaxed">
              Ano em que o método Beleza Funcional foi sistematizado — hoje dominado por poucos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
