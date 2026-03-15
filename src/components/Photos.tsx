import { useEffect, useRef } from 'react';

export default function Photos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const photos = [
    'https://www.posembelezafuncional.com/wp-content/uploads/2024/04/Grupo-de-mascara-1-copiar.webp',
    'https://www.posembelezafuncional.com/wp-content/uploads/2024/04/0ce6f992-30f1-4a2a-83c3-b73696584aae-copiar.webp',
    'https://www.posembelezafuncional.com/wp-content/uploads/2024/04/2023-10-28-21.27.55-copiar.webp',
    'https://www.posembelezafuncional.com/wp-content/uploads/2024/04/08935b3b-3b1f-4d48-8eac-0f62730851e0-copiar.webp',
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      
      // Check if we've reached the end (with a small 10px buffer for rounding)
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll by the width of one item + gap
        const firstChild = scrollContainer.children[0] as HTMLElement;
        const scrollAmount = firstChild ? firstChild.offsetWidth + 24 : 300; // 24px is gap-6
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 3000); // 3 seconds per scroll

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 md:py-[80px] px-5 md:px-12 overflow-hidden">
      <div className="max-w-[1200px] mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <h2 className="text-black text-4xl md:text-[55px] leading-[1.1] font-medium tracking-[-0.028em]">
            A transformação começa de dentro para fora.
          </h2>
          <p className="text-brand-dark-2 text-lg leading-relaxed max-w-md">
            Veja os momentos que marcaram a jornada de médicos que já passaram pela experiência MetaTransformação.
          </p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar pl-5 md:pl-12 -ml-5 md:-ml-12 pr-5 md:pr-12"
      >
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="flex-none w-[280px] md:w-[400px] h-[350px] md:h-[500px] snap-center rounded-2xl overflow-hidden"
          >
            <img 
              src={photo} 
              alt={`Event photo ${index + 1}`} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
