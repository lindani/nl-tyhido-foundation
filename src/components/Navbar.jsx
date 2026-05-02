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
      <div className="container px-8 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <svg className="h-12 w-12 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
            </svg>
            <a href="#" className={`font-bold text-xl ${textColor}`}>
              Ndithini Foundation
            </a>
          </div>
          <ul className={`hidden lg:flex ml-14 space-x-12 ${textColor} font-bold`}>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
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
              className={`py-2 px-3 border rounded-md ${textColor} font-bold`}
            >
              Support Us
            </a>
            <a
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md text-white font-bold"
              href="#"
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
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end text-orange-500">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
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
                  <a href={item.href}>{item.label}</a>
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
      </div>
    </nav>
  );
};

export default Navbar;