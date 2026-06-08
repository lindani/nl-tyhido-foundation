import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Info, Target, MessageSquare, Image, HandHelping } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Nav Items configuration array
  const navItems = [
    { id: 'about', label: 'About Us', icon: <Info size={15} /> },
    { id: 'objectives', label: 'Objectives', icon: <Target size={15} /> },
    { id: 'testimonials', label: 'Community Voices', icon: <MessageSquare size={15} /> },
    { id: 'gallery', label: 'Gallery', icon: <Image size={15} /> },
  ];

  // Prevent background viewport movement and scrolling conflicts when menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Unified Scroll Listener for styling updates & dynamic active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // FIX: If user is at the top of the page (Hero Section), explicitly clear highlights
      if (currentScrollY < 150) {
        setActiveSection('');
        return;
      }

      // Calculate active link based on current viewport coordinates
      const scrollPosition = currentScrollY + 200;
      let matched = false;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            matched = true;
            break;
          }
        }
      }

      // Fallback fallback to ensure state resets if between boundaries
      if (!matched) setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5 py-3 shadow-xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* FIX: Wrapped logo in a structural anchor targeting #hero. Resets mobile menu state on click. */}
          <a 
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="flex-shrink-0 flex flex-col text-left z-[110] group cursor-pointer outline-none select-none"
          >
            <span className="text-white font-black text-sm sm:text-base md:text-lg tracking-tighter uppercase leading-none transition-colors duration-300 group-hover:text-slate-200">
              NDITHINI L. TYHIDO <span className="text-orange-500 inline-block transition-transform group-hover:scale-105 duration-300">FOUNDATION</span>
            </span>
            <span className="text-[8px] font-black tracking-[0.35em] text-slate-400 mt-1 uppercase block transition-colors duration-300 group-hover:text-orange-500/80">
              Registered NPC
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-bold text-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className={`relative py-2 flex items-center gap-2 transition-all duration-300 group ${
                    isActive ? 'text-orange-500' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span className={`transition-transform duration-300 group-hover:-translate-y-0.5 ${
                    isActive ? 'text-orange-500' : 'text-orange-500/80 group-hover:text-orange-500'
                  }`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  
                  {/* Underline Micro-interaction Effect */}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-300 ${
                    isActive ? 'w-full shadow-[0_0_8px_#f97316]' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              );
            })}
            
            <a 
              href="#contact" 
              className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2.5 rounded-xl flex items-center gap-2 font-black text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-orange-600/20 hover:shadow-orange-600/30"
            >
              Partner With Us 
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Hamburg Trigger Button */}
          <div className="md:hidden z-[110]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white outline-none active:scale-95 transition-all duration-300"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} className="animate-spin-slow" /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Alternative Full-Screen Isolated Interactive Mobile Overlay Framework */}
      <div className={`fixed inset-0 w-full h-screen bg-slate-950 px-6 pt-32 pb-10 md:hidden flex flex-col justify-between transition-all duration-500 ease-in-out z-[100] ${
        isOpen 
          ? 'opacity-100 pointer-events-auto translate-y-0' 
          : 'opacity-0 pointer-events-none -translate-y-8'
      }`}>
        
        {/* Core Links Matrix Grid Container */}
        <div className="grid grid-cols-1 gap-3 max-w-md mx-auto w-full">
          <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] pl-2 mb-2 animate-pulse">
            Navigation Menu
          </p>
          
          {navItems.map((item, idx) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              onClick={() => setIsOpen(false)} 
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`flex items-center gap-4 p-4 rounded-2xl border bg-white/[0.02] border-white/5 text-slate-200 transition-all duration-300 hover:bg-white/[0.05] active:scale-[0.98] ${
                isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              } ${activeSection === item.id ? 'border-orange-500/30 bg-orange-500/[0.02]' : ''}`}
            >
              <div className={`p-2.5 rounded-xl transition-colors duration-300 ${
                activeSection === item.id ? 'bg-orange-600 text-white' : 'bg-orange-600/10 text-orange-500'
              }`}>
                {item.icon}
              </div>
              <span className={`font-bold text-base tracking-wide ${activeSection === item.id ? 'text-orange-500' : ''}`}>
                {item.label}
              </span>
            </a>
          ))}
        </div>
        
        {/* Call to Action Anchor Module (Bottom Sticky Anchor) */}
        <div className={`max-w-md mx-auto w-full space-y-6 transition-all duration-500 delay-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="border-t border-white/5 pt-6">
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="w-full bg-orange-600 hover:bg-orange-500 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-orange-600/20 active:scale-95 transition-all duration-300"
            >
              <HandHelping size={18} /> Partner With Us <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-[9px] font-black uppercase text-slate-600 tracking-widest">
              Registration No: 2023 / 564482 / 08
            </p>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;