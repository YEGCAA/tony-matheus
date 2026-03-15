import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Para quem é a imersão MetaTransformação?',
      answer: 'Para médicos (dermatologistas, cirurgiões plásticos, médicos estéticos e nutrólogos) que já atuam na área e sentem que atingiram um teto técnico ou financeiro. Não é um curso básico de injetáveis. É uma imersão de reposicionamento e maestria.'
    },
    {
      question: 'O que é a "Algema de Ouro"?',
      answer: 'É o conceito central do Dr. Matheus Arantes sobre como médicos ficam presos a procedimentos de baixo valor agregado, trabalhando muito e faturando pouco, sem construir uma marca forte. A imersão ensina como quebrar essa algema.'
    },
    {
      question: 'Haverá prática em pacientes (Hands-on)?',
      answer: 'A imersão tem foco estratégico, demonstrativo e de planejamento (Beleza Funcional). O Dr. Matheus fará demonstrações ao vivo de assessment e planejamento, mas os alunos não injetarão. O foco é mudar a mente que guia a mão.'
    },
    {
      question: 'Qual a diferença entre os ingressos Premium e Diamond?',
      answer: 'O Premium oferece mentoria pré-evento e supervisão clínica em grupo. O Diamond é uma experiência de proximidade extrema, com 3 meses de mentoria individual de carreira diretamente com o Dr. Matheus, focado em reestruturar seu consultório.'
    },
    {
      question: 'Posso levar minha equipe/gestor de clínica?',
      answer: 'A imersão é exclusiva para médicos. Acreditamos que a transformação da clínica começa invariavelmente pela transformação da identidade do médico líder.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 md:py-[80px] px-5 md:px-12 border-t border-brand-gray/30">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              <span className="text-brand-primary text-[11px] font-semibold tracking-[0.15em] uppercase">
                FAQ
              </span>
            </div>
            
            <h2 className="text-black text-5xl md:text-[80px] leading-[1] font-medium tracking-[-0.04em] mb-8">
              Perguntas Frequentes
            </h2>
            
            <p className="text-brand-dark-2 text-lg mb-8">
              Tem mais perguntas? Estamos aqui para ajudar.
            </p>
            
            <a href="#" className="inline-flex items-center gap-2 text-brand-primary font-medium text-[15px] hover:underline">
              Fale conosco
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border-b border-brand-gray/30 py-6 cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-black font-bold text-[18px] md:text-[20px] leading-snug">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-6 h-6 text-brand-dark-2 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                    />
                  </div>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-brand-dark-2 text-[16px] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
