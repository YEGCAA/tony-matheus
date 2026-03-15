import { useState, useRef } from 'react';
import { Play } from 'lucide-react';

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="bg-black py-20 md:py-[80px] px-5 md:px-12">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="inline-flex items-center justify-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-white text-[11px] font-semibold tracking-[0.15em] uppercase">
            Sobre
          </span>
        </div>
        
        <h2 className="text-white text-4xl md:text-[55px] leading-[1.1] font-medium tracking-[-0.028em] max-w-4xl mx-auto mb-8">
          Você não precisa sair da medicina.<br />Você precisa voltar para ela.
        </h2>

        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
          O mercado médico está polarizado: de um lado, te empurram pra vender curso online. Do outro, te treinam pra ser um executor de protocolos sem identidade. A MetaTransformação existe pra quem recusa as duas opções.
        </p>

        <div 
          className="relative w-full aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden bg-black/50 group cursor-pointer"
          onClick={!isPlaying ? handlePlay : undefined}
        >
          <video 
            ref={videoRef}
            src="https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/IMG_8856+(1).MOV" 
            className="w-full h-full object-cover"
            controls={isPlaying}
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          
          {!isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/20 transition-colors group-hover:bg-black/10">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-colors">
                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
              </div>
              <span className="text-white font-medium text-xl drop-shadow-md">Assista a história do Dr. Matheus</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
