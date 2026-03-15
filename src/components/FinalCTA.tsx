export default function FinalCTA() {
  return (
    <section className="relative h-[600px] w-full bg-black flex flex-col justify-center items-center px-5 md:px-12 text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/tony-final/1920/1080?blur=1" 
          alt="Dr. Matheus Arantes" 
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 w-full max-w-[800px] mx-auto">
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-white text-[11px] font-semibold tracking-[0.15em] uppercase">
            Vagas Limitadas
          </span>
        </div>

        <h2 className="text-white text-4xl md:text-[67px] leading-[1.1] font-medium tracking-[-0.03em] mb-10">
          A medicina que você pratica hoje te trouxe até aqui.
        </h2>
        
        <p className="text-white/90 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Mas não vai te levar para o próximo nível. Junte-se ao Dr. Matheus Arantes e a um grupo seleto de médicos para reescrever as regras da sua carreira.
        </p>
        
        <button className="bg-white text-black rounded-full px-10 py-5 text-lg font-medium hover:bg-gray-200 transition-colors">
          Garantir minha vaga agora
        </button>
      </div>
    </section>
  );
}
