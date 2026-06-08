import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Info, Target, MessageSquare, Image, HandHelping } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Prevent background viewport movement and scrolling conflicts when menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Explicit high structural relative z-index boundary [z-50] for the core element
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-white/5 py-4 shadow-xl' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Official Registered Branding Identification - Elevates higher when active */}
          <div className="flex-shrink-0 flex flex-col text-left z-[110]">
            <span className="text-white font-black text-sm sm:text-base md:text-lg tracking-tighter uppercase leading-none">
              NDITHINI L. TYHIDO <span className="text-orange-500">FOUNDATION</span>
            </span>
            <span className="text-[8px] font-black tracking-[0.35em] text-slate-400 mt-1 uppercase block">
              Registered NPC
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 font-bold text-sm text-slate-300">
            <a href="#about" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
              <Info size={15} className="text-orange-500" /> About Us
            </a>
            <a href="#objectives" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
              <Target size={15} className="text-orange-500" /> Objectives
            </a>
            <a href="#testimonials" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
              <MessageSquare size={15} className="text-orange-500" /> Community Voices
            </a>
            <a href="#gallery" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
              <Image size={15} className="text-orange-500" /> Gallery
            </a>
            
            <a 
              href="#contact" 
              className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 font-black text-xs uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-orange-600/10"
            >
              Partner With Us <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Hamburg Trigger button - Pushed up on the z-axis layers */}
          <div className="md:hidden z-[110]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white outline-none active:scale-95 transition-all"
              aria-label="Toggle navigation structural framework menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* 
        ALTERNATIVE SOLID OVERLAY SOLUTION:
        Using full-screen absolute coverage with explicit top-0, left-0, 100vh height, 
        solid bg-slate-950, and absolute blocking index layer z-[100] to bypass clashing text.
      */}
      <div className={`fixed inset-0 w-full h-screen bg-slate-950 transition-all duration-300 ease-in-out z-[100] md:hidden flex flex-col justify-between px-6 pt-32 pb-10 ${
        isOpen ? 'opacity-100 pointer-events-auto transform translate-y-0' : 'opacity-0 pointer-events-none transform -translate-y-4'
      }`}>
        
        {/* Core Navigation Links Matrix Grid */}
        <div className="grid grid-cols-1 gap-3 max-w-md mx-auto w-full">
          <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] pl-2 mb-1">Navigation Menu</p>
          
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)} 
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-slate-200 hover:text-white hover:bg-white/[0.05] active:scale-[0.99] transition-all"
          >
            <div className="p-2.5 bg-orange-600/10 rounded-xl text-orange-500">
              <Info size={18} />
            </div>
            <span className="font-bold text-base tracking-wide">About Us</span>
          </a>

          <a 
            href="#objectives" 
            onClick={() => setIsOpen(false)} 
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-slate-200 hover:text-white hover:bg-white/[0.05] active:scale-[0.99] transition-all"
          >
            <div className="p-2.5 bg-orange-600/10 rounded-xl text-orange-500">
              <Target size={18} />
            </div>
            <span className="font-bold text-base tracking-wide">Objectives</span>
          </a>

          <a 
            href="#testimonials" 
            onClick={() => setIsOpen(false)} 
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-slate-200 hover:text-white hover:bg-white/[0.05] active:scale-[0.99] transition-all"
          >
            <div className="p-2.5 bg-orange-600/10 rounded-xl text-orange-500">
              <MessageSquare size={18} />
            </div>
            <span className="font-bold text-base tracking-wide">Community Voices</span>
          </a>

          <a 
            href="#gallery" 
            onClick={() => setIsOpen(false)} 
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-slate-200 hover:text-white hover:bg-white/[0.05] active:scale-[0.99] transition-all"
          >
            <div className="p-2.5 bg-orange-600/10 rounded-xl text-orange-500">
              <Image size={18} />
            </div>
            <span className="font-bold text-base tracking-wide">Gallery</span>
          </a>
        </div>
        
        {/* Call to Action Anchor Module (Bottom Sticky Anchor) */}
        <div className="max-w-md mx-auto w-full space-y-6">
          <div className="border-t border-white/5 pt-6">
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="w-full bg-orange-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-orange-600/20 active:scale-95 transition-all"
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