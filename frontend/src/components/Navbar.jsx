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

  const handleLinkClick = () => {
    setMobileDrawerOpen(false);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const isMobile = window.innerWidth < 768; // md breakpoint
      const isObjectives = targetId === 'objectives';
      
      // On mobile or for objectives section, show the start of the section
      // On desktop for other sections, center them
      const scrollBehavior = (isMobile || isObjectives) ? 'start' : 'center';
      
      targetElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: scrollBehavior,
        inline: 'nearest' 
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const textColor = isScrolled ? 'text-orange-800' : 'text-white';


  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-transparent ${
        isScrolled ? 'bg-black/40 border-b border-neutral-700/50 py-2 backdrop-blur-md' : 'bg-black/10 py-2 '
      } ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="w-full px-6 mx-auto relative text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            {/* --- LOGO GROUP --- */}
          <div className="flex items-center flex-shrink-0 group cursor-pointer">
            {/* Container for the Logo - This replaces your <svg> */}
            <div className="w-14 h-14 mr-3 flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105">
              {/* YOUR TRANSPARENT IMAGE HERE */}
              <img
                src="/images/nav-logo.png" // Replace with your actual path
                className="w-full h-full object-contain" // object-contain is vital for transparency
                alt="Ndithini Foundation Logo"
                onError={(e) => {
                  // Fallback to the original circle SVG if the image fails to load
                  e.currentTarget.onerror = null;
                  e.currentTarget.style.display = 'none'; // Hide the broken image
                  // We find the fallback sibling and show it (optional but robust)
                  e.currentTarget.nextSibling.style.display = 'block';
                }}
              />
              
              {/* Optional: The original SVG Circle as a fallback (initially hidden) */}
              <svg 
                className="h-full w-full text-orange-500 hidden" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            </div>
            
            <a href="#" className={`font-bold text-xl ${textColor}`}>
              Ndithini <span className="text-orange-500">Foundation</span>
            </a>
            {/* Ndithini <span className="text-orange-500">Foundation</span> */}
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
          <div className="lg:hidden md:flex flex-col justify-end text-orange-500">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden min-h-screen">
            <ul className="space-y-6 text-lg text-white">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 hover:text-orange-500 transition"
                  onClick={handleLinkClick}
                >
                  {item.label === 'Testimonials' && <Quote size={20} />}
                  {item.label === 'About' && <Info size={20} />}
                  {item.label === 'Objectives' && <Target size={20} />}
                  {item.label === 'Gallery' && <GalleryVertical size={20} />}
                  <a 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4 w-full mt-8">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  toast('Support Us feature coming soon!', {
                    icon: '👏',
                    style: {
                      borderRadius: '10px',
                      background: '#333',
                      color: '#fff'
                    }
                  });
                }}
                href="#"
                className="flex items-center justify-center gap-2 py-2 px-4 border border-orange-700 rounded-md hover:bg-orange-700 transition text-white"
              >
                <HeartHandshake size={18} /> Support Us
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  toast('Create Account feature coming soon!', {
                    icon: '👏',
                    style: {
                      borderRadius: '10px',
                      background: '#333',
                      color: '#fff'
                    }
                  });
                }}
                href="#"
                className="flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-800 text-white rounded-md hover:opacity-90 transition"
              >
                <UserPlus size={18} /> Create an Account
              </a>
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navbar;