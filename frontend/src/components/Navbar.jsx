import { Menu, X, HeartHandshake, UserPlus, Quote, Info, Target, GalleryVertical } from 'lucide-react';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import { navItems } from '../constants';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleNavClick = (e, href) => {
    if (e) e.preventDefault();
    
    // 1. Immediately close the mobile drawer when an item is clicked
    setMobileDrawerOpen(false); 
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const isMobile = window.innerWidth < 768;
      const isObjectives = targetId === 'objectives';
      
      const scrollBehavior = (isMobile || isObjectives) ? 'start' : 'center';
      
      // Delay slightly if needed to let the layout settle, but smooth scroll handles it great
      setTimeout(() => {
        targetElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: scrollBehavior,
          inline: 'nearest' 
        });
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (mobileDrawerOpen) {
        setShowNavbar(true);
      } else {
        setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileDrawerOpen]);

  // Lock body scroll when mobile menu is active to prevent twin scrollbars
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileDrawerOpen]);

  const textColor = isScrolled ? 'text-orange-800' : 'text-white';

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/60 border-b border-neutral-700/50 py-2 backdrop-blur-md' : 'bg-black/20 py-3'
      } ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="w-full px-6 mx-auto relative text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* --- LOGO GROUP --- */}
          <div className="flex items-center flex-shrink-0 group cursor-pointer z-50">
            <div className="w-12 h-12 md:w-14 md:h-14 mr-3 flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105">
              <img
                src="/images/nav-logo.png"
                className="w-full h-full object-contain"
                alt="Ndithini Foundation Logo"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextSibling) {
                    e.currentTarget.nextSibling.style.display = 'block';
                  }
                }}
              />
              <svg 
                className="h-full w-full text-orange-500 hidden" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            
            <a href="#" className={`font-bold text-lg md:text-xl transition-colors ${mobileDrawerOpen ? 'text-white' : textColor}`}>
              Ndithini <span className="text-orange-500">Foundation</span>
            </a>
          </div>

          {/* --- DESKTOP LINKS --- */}
          <ul className={`hidden lg:flex ml-14 space-x-8 ${textColor} font-semibold uppercase tracking-wider text-xs`}>
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="hover:text-orange-500 transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* --- DESKTOP BUTTONS --- */}
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            <button
              onClick={() => toast.success('Coming Soon!')}
              className={`py-2 px-4 border border-white/20 rounded-xl ${textColor} font-bold hover:bg-white/10 transition-all`}
            >
              Support Us
            </button>
            <button
              onClick={() => toast.success('Coming Soon!')}
              className="bg-orange-600 hover:bg-orange-500 py-2 px-4 rounded-xl text-white font-bold transition-all shadow-lg active:scale-95"
            >
              Get Started
            </button>
          </div>

          {/* --- MOBILE TRIGGER --- */}
          <div className="lg:hidden flex items-center z-50">
            <button 
              onClick={toggleNavbar} 
              className="text-orange-500 p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- OPAQUE & CLOSABLE MOBILE DRAWER --- */}
      <div 
        className={`fixed inset-0 top-0 right-0 z-40 bg-neutral-950 w-full h-screen overflow-y-auto px-8 pt-28 pb-12 flex flex-col justify-between items-center lg:hidden transition-transform duration-350 ease-in-out ${
          mobileDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="space-y-5 text-xl text-white font-medium w-full max-w-sm mx-auto text-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center space-x-3 hover:text-orange-500 transition-colors py-2.5 border-b border-white/5"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label === 'Testimonials' && <Quote size={20} className="text-orange-500" />}
              {item.label === 'About' && <Info size={20} className="text-orange-500" />}
              {item.label === 'Objectives' && <Target size={20} className="text-orange-500" />}
              {item.label === 'Gallery' && <GalleryVertical size={20} className="text-orange-500" />}
              <a 
                href={item.href}
                className="cursor-pointer tracking-wide"
                onClick={(e) => e.preventDefault()} // Handled by parent li click event handler
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col space-y-4 w-full max-w-sm mx-auto mt-auto pt-8">
          <button
            onClick={() => {
              setMobileDrawerOpen(false);
              toast('Support Us feature coming soon!', {
                icon: '👏',
                style: { borderRadius: '10px', background: '#333', color: '#fff' }
              });
            }}
            className="flex items-center justify-center gap-2 py-3.5 px-4 border border-orange-600 rounded-xl hover:bg-orange-700 transition text-white font-bold"
          >
            <HeartHandshake size={20} /> Support Us
          </button>
          
          <button
            onClick={() => {
              setMobileDrawerOpen(false);
              toast('Create Account feature coming soon!', {
                icon: '👏',
                style: { borderRadius: '10px', background: '#333', color: '#fff' }
              });
            }}
            className="flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:opacity-95 transition font-bold shadow-lg"
          >
            <UserPlus size={20} /> Create an Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;