export default function Hero() {
  return (
    <section className="bg-black p-4 md:p-6 h-screen min-h-[800px]">
      <div className="relative w-full h-full rounded-3xl overflow-hidden flex flex-col justify-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://matheusarantes.com.br/wp-content/uploads/2025/08/bgmateus.jpg" 
            alt="Hero background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e2b4d] via-[#1e2b4d]/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-8 md:px-16 pb-12 md:pb-16 flex flex-col lg:flex-row justify-between items-end gap-12">
          
          <div className="max-w-4xl flex-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#d8cbf0]" />
              <span className="text-white text-sm font-medium tracking-wider uppercase">
                 Imersão Presencial · Vagas Limitadas
              </span>
            </div>
            
            <p className="text-white/80 text-lg md:text-xl font-medium mb-4 uppercase tracking-widest">
              MetaHumano Project apresenta
            </p>

            <h1 className="text-white text-5xl md:text-[80px] leading-[0.95] font-bold tracking-tight mb-6">
              Reacenda a arte<br />de ser médico.
            </h1>
            
            <p className="text-white text-lg md:text-[22px] max-w-2xl mb-12 leading-snug font-medium">
              A imersão que transforma o médico por dentro para que ele transforme o paciente por fora — com arte, ciência e medicina regenerativa de precisão.
            </p>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
              <div className="flex gap-4">
                <button className="bg-white text-black rounded-full px-8 py-4 text-[16px] font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Garantir minha vaga →
                </button>
                <button className="bg-transparent border border-white text-white rounded-full px-8 py-4 text-[16px] font-semibold hover:bg-white/10 transition-colors whitespace-nowrap hidden md:block">
                  Entender o método
                </button>
              </div>
              
              <div className="flex flex-wrap gap-8 md:gap-12">
                <div className="flex flex-col gap-1">
                  <span className="text-white/70 text-xs font-semibold tracking-wider uppercase">Data</span>
                  <span className="text-white font-bold text-base">Maio · 2026</span>
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-white/70 text-xs font-semibold tracking-wider uppercase">Formato</span>
                  <span className="text-white font-bold text-base">Imersão 2 dias</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-white/70 text-xs font-semibold tracking-wider uppercase">Vagas</span>
                  <span className="text-white font-bold text-base">Turma reduzida</span>
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-white/70 text-xs font-semibold tracking-wider uppercase">Investimento</span>
                  <span className="text-white font-bold text-base">A partir de R$ 8.000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-start justify-center bg-black/40 backdrop-blur-md p-8 rounded-xl min-w-[320px] border border-white/10">
            <span className="text-white/70 text-[12px] font-bold tracking-[0.2em] uppercase mb-4">
              MetaHumano Project
            </span>
            <span className="text-white text-[32px] font-black leading-[1.1] tracking-tight mb-4">
              MetaTransformação
            </span>
            <span className="text-white/90 text-[14px] font-medium tracking-wide">
              por Dr. Matheus Arantes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
