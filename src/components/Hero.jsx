import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// import ContactModal from "./ContactFormModal";
// import { navItems } from "../constants";
import { ArrowRight, CheckCircle2, X, Heart, Copy } from "lucide-react";

const Hero = () => {

  const [currentHero, setCurrentHero] = useState(0);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


   // Global fallback image for broken URLs
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://images.unsplash.com/photo-1521791136364-798a7bc0d261?auto=format&fit=crop&q=60&w=800";
  };

  // --- DATA ---
  
  const heroSlides = [
    {
      img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=2000",
      title: "Pioneering Community Growth",
      sub: "A legacy of mentorship, leadership, and sustainable social impact in South Africa's heartland."
    },
    {
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000",
      title: "Cultivating Excellence",
      sub: "Empowering the next generation of leaders through structured, community-led support."
    }
  ];

  const heroRef = useRef(null);

   useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const heroInterval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(heroInterval);
    };
  }, []);

  const handleCopyBanking = () => {
    const text = "Account: 10192837465, Bank: Standard Bank, Branch: 051001";
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-slate-950 overflow-hidden py-24">

      {/* --- DONATE MODAL --- */}
      {showDonateModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={() => setShowDonateModal(false)} />
          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-6 md:p-12 shadow-2xl animate-slide-up">
            <button className="absolute top-6 right-6 p-2 text-slate-400 hover:text-orange-600 transition-colors" onClick={() => setShowDonateModal(false)}>
              <X size={24} />
            </button>
            <div className="text-center">
              <div className="inline-flex p-4 bg-orange-50 text-orange-600 rounded-2xl mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-2">Support Our Vision</h3>
              <p className="text-slate-500 mb-8 text-xs uppercase tracking-widest font-bold">Banking Details</p>
              
              <div className="bg-slate-50 rounded-2xl p-4 md:p-6 text-left mb-6 space-y-4 text-sm font-bold">
                <div className="flex justify-between border-b border-slate-200 pb-2"><span>Bank</span> <span>Standard Bank</span></div>
                <div className="flex justify-between border-b border-slate-200 pb-2"><span>Account</span> <span className="text-right">NL Tyhido Foundation</span></div>
                <div className="flex justify-between border-b border-slate-200 pb-2"><span>Number</span> <span className="text-orange-600">10192837465</span></div>
                <div className="flex justify-between"><span>Branch</span> <span>051001</span></div>
              </div>

              <button onClick={handleCopyBanking} className="w-full bg-slate-900 text-white py-4 md:py-5 rounded-xl font-black flex items-center justify-center gap-3 hover:bg-orange-600 transition-all active:scale-95">
                {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />}
                {copied ? 'Copied' : 'Copy Details'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, idx) => (
          <div key={idx} className={`absolute inset-0 transition-opacity duration-1500 ${idx === currentHero ? 'opacity-40' : 'opacity-0'}`}>
            <img 
              src={slide.img} 
              className="w-full h-full object-cover scale-105" 
              alt="Foundation Hero" 
              onError={handleImageError}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          {heroSlides.map((slide, idx) => (
            <div key={idx} className={`${idx === currentHero ? 'block' : 'hidden'} animate-fade-in`}>
              <div className="flex items-center gap-3 text-orange-500 mb-6">
                <div className="w-8 h-[2px] bg-orange-500 hidden sm:block" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">NPC 2023 / 564482 / 08</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase">
                {slide.title}
              </h1>
              <p className="text-base md:text-xl text-slate-300 mb-10 max-w-xl font-medium leading-relaxed">
                {slide.sub}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#about" className="bg-orange-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg hover:bg-white hover:text-orange-600 transition-all flex items-center gap-3 shadow-lg active:scale-95">
                  Learn More <ArrowRight size={20} />
                </a>
                <button onClick={() => setShowDonateModal(true)} className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg hover:bg-white/20 transition-all active:scale-95">
                  Get Involved
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;