import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-black z-50 px-5 md:px-12 flex items-center justify-between border-b border-brand-dark-2">
      <div className="text-white font-bold text-xl tracking-wider uppercase">
        Tony Robbins
      </div>
      
      <nav className="hidden lg:flex items-center gap-8">
        {['About', 'Programs', 'Events', 'Coaching', 'Explore', 'Shop'].map((item) => (
          <a key={item} href="#" className="text-white text-[15px] hover:opacity-70 transition-opacity">
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4">
          <button className="text-white border border-white rounded-full px-6 py-2 text-[15px] font-medium hover:bg-white hover:text-black transition-colors">
            Log in
          </button>
          <button className="bg-white text-black rounded-full px-6 py-2 text-[15px] font-medium hover:bg-gray-200 transition-colors">
            Start now
          </button>
        </div>
        <button className="lg:hidden text-white p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
