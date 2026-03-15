import { Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 md:pt-[100px] pb-10 px-5 md:px-12 border-t border-brand-dark-2">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          
          <div>
            <h3 className="text-white font-bold text-2xl uppercase tracking-tight mb-4">
              Dr. Matheus Arantes
            </h3>
            <p className="text-brand-gray text-[18px] leading-relaxed max-w-xs font-medium">
              Reacenda a arte de ser médico.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[Instagram, Youtube, Linkedin].map((Icon, index) => (
              <a key={index} href="#" className="w-12 h-12 rounded-full bg-brand-dark-2 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

        </div>

        <div className="border-t border-brand-dark-2 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-gray text-[14px]">
            &copy; 2026 MetaHumano Project. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-brand-gray text-[14px] hover:text-white transition-colors">
              Políticas de Privacidade
            </a>
            <a href="#" className="text-brand-gray text-[14px] hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-brand-gray text-[14px] hover:text-white transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
