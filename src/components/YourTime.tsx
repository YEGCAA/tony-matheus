import { ArrowRight } from 'lucide-react';

export default function YourTime() {
  return (
    <>
      <section className="bg-white py-20 md:py-[80px] px-5 md:px-12 border-t border-brand-gray/30">
        <div className="max-w-[1200px] mx-auto">
          <div className="inline-flex items-center gap-2 mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
            <span className="text-brand-primary text-[11px] font-semibold tracking-[0.15em] uppercase">
              A Escolha
            </span>
          </div>

          <h2 className="text-black text-3xl md:text-[45px] leading-[1.2] font-medium tracking-[-0.02em] max-w-4xl mb-20">
            "Enquanto o mercado te diz pra <span className="font-bold">sair da medicina</span>, nós dizemos que nunca houve momento melhor pra ser médico. Mas não qualquer médico."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-brand-gray/20 rounded-2xl p-8 md:p-12">
              <h3 className="text-black font-bold text-2xl mb-8">O médico do protocolo fechado:</h3>
              <ul className="flex flex-col gap-4">
                <li className="text-brand-dark-2 text-lg">Agenda cheia, alma vazia</li>
                <li className="text-brand-dark-2 text-lg">Executa o que ensinaram — sem identidade técnica própria</li>
                <li className="text-brand-dark-2 text-lg">Disputa preço com 500 colegas fazendo o mesmo</li>
                <li className="text-brand-dark-2 text-lg">Confortável o suficiente pra se acomodar, frustrado o suficiente pra se perder</li>
                <li className="text-brand-dark-2 text-lg">Trata "onde está mole, coloca produto"</li>
              </ul>
            </div>

            <div className="bg-brand-primary rounded-2xl p-8 md:p-12">
              <h3 className="text-white font-bold text-2xl mb-8">O Médico-Fundador:</h3>
              <ul className="flex flex-col gap-4">
                <li className="text-white text-lg">→ Agenda seletiva, realização real</li>
                <li className="text-white text-lg">→ Tem um método próprio que ninguém replica</li>
                <li className="text-white text-lg">→ Comanda o preço pelo posicionamento e pela técnica</li>
                <li className="text-white text-lg">→ Construiu um ecossistema — não apenas um consultório</li>
                <li className="text-white text-lg">→ Diagnostica a causa e esculpe o resultado com arte e precisão</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 md:py-[80px] px-5 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="inline-flex items-center gap-2 mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-white text-[11px] font-semibold tracking-[0.15em] uppercase">
              Seu momento é agora
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex-1">
              <h2 className="text-white text-5xl md:text-[70px] leading-[1.1] font-medium tracking-[-0.028em] mb-8">
                A janela<br />não vai<br />durar.
              </h2>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-md">
                A explosão do Ozempic e da Tirzepatida criou uma demanda que o mercado não está preparado para atender. O médico que dominar o método Beleza Funcional nos próximos 12 meses vai capturar uma fatia desproporcional desse mercado.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-white font-medium text-[16px] hover:underline">
                Ver ingressos <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl flex flex-col justify-center min-h-[320px]">
              <span className="text-white text-[80px] md:text-[120px] font-black leading-none tracking-tighter mb-6">
                2017
              </span>
              <p className="text-white/80 text-lg leading-relaxed">
                Ano em que o Dr. Matheus sistematizou a Beleza Funcional. O método foi testado, refinado e aplicado em centenas de casos clínicos reais antes de chegar até você.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
