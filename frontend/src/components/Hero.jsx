import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { preloadImages } from "../utils/imageOptimization";
import { ArrowRight, CheckCircle2, X, Heart, Copy } from "lucide-react";

const Hero = () => {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroRef = useRef(null);

  const heroSlides = [
    {
      img: "/images/misc-28.png",
      title: "Mentoring Minds, Building Futures.",
      sub: "A grassroots foundation unlocking potential through mentorship, dignity, and community-led progress."
    },
    {
      img: "/images/misc-22.png",
      title: "Leadership Starts Here.",
      sub: "Creating environments where young people learn, grow, and take ownership of their future."
    },
    {
      img: "/images/ndibs1.png",
      title: "Action, Accountability, Impact.",
      sub: "We build lasting change through reliable support, ethical leadership, and measurable outcomes."
    },
    {
      img: "/images/misc-16.png",
      title: "Community Strength Through Connection.",
      sub: "Every workshop, training, and conversation is designed to bring people together for real progress."
    }
  ];

  const currentSlide = heroSlides[currentImageIndex];

  useEffect(() => {
    const imageUrls = heroSlides.map((slide) => slide.img);
    preloadImages(imageUrls);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (heroRef.current) {
      const targets = heroRef.current.querySelectorAll('.fade-in');
      
      gsap.set(targets, { opacity: 0, y: 20 });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    }
  }, [currentImageIndex]);

  const handleCopyBanking = () => {
    const text = "Account: 10192837465, Bank: Standard Bank, Branch: 051001";
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const isMobile = window.innerWidth < 768;
      const scrollBehavior = isMobile ? 'start' : 'center';
      
      contactSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: scrollBehavior,
        inline: 'nearest' 
      });
    } else {
      window.location.hash = '#contact';
    }
  };

  return (
    // Replaced min-h-[85vh] with dynamic full height min-h-screen / h-screen boundaries for mobile device viewports
    <section className="relative min-h-screen w-full flex items-center justify-center bg-slate-950 overflow-hidden pt-[88px] pb-12 md:py-24">
      
      {/* --- DONATE MODAL --- */}
      {showDonateModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setShowDonateModal(false)} />
          <div className="relative bg-white w-full max-w-lg rounded-[2rem] p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button className="absolute top-5 right-5 p-2 text-slate-400 hover:text-orange-600 transition-colors" onClick={() => setShowDonateModal(false)}>
              <X size={22} />
            </button>
            <div className="text-center">
              <div className="inline-flex p-3 bg-orange-50 text-orange-600 rounded-xl mb-4">
                <Heart size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-1">Support Our Vision</h3>
              <p className="text-slate-400 mb-6 text-[10px] uppercase tracking-widest font-bold">Banking Details</p>
              
              <div className="bg-slate-50 rounded-xl p-4 text-left mb-6 space-y-3 text-xs md:text-sm font-semibold text-slate-700">
                <div className="flex justify-between border-b border-slate-200 pb-2"><span>Bank</span> <span className="font-bold text-slate-900">Standard Bank</span></div>
                <div className="flex justify-between border-b border-slate-200 pb-2"><span>Account</span> <span className="text-right font-bold text-slate-900">NL Tyhido Foundation</span></div>
                <div className="flex justify-between border-b border-slate-200 pb-2"><span>Number</span> <span className="text-orange-600 font-bold">10192837465</span></div>
                <div className="flex justify-between"><span>Branch</span> <span className="font-bold text-slate-900">051001</span></div>
              </div>

              <button onClick={handleCopyBanking} className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-orange-600 transition-all active:scale-95 text-sm">
                {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                {copied ? 'Copied!' : 'Copy Details'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- BACKGROUND IMAGES --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.img}
            alt={`hero-${idx}`}
            decoding="async"
            loading={idx === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
            sizes="100vw"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />
      </div>

      {/* --- MAIN HERO BODY CONTENTS --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8" ref={heroRef}>
        <div className="max-w-4xl mx-auto text-center" key={currentImageIndex}>
          <div className="fade-in min-h-[5.5rem] sm:min-h-0">
            <TextGenerateEffect
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight font-black leading-tight"
              words={currentSlide.title}
            />
          </div>
          <p className="fade-in mt-4 md:mt-6 text-sm md:text-base lg:text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed font-normal">
            {currentSlide.sub}
          </p>
          <div className="fade-in flex flex-col sm:flex-row justify-center gap-3.5 max-w-xs sm:max-w-none mx-auto">
            <button onClick={handleContactClick} className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-7 py-3.5 rounded-xl font-bold text-sm md:text-base hover:from-orange-500 hover:to-orange-400 transition-all hover:shadow-lg active:scale-97">
              Contact Us
            </button>
            <button onClick={() => setShowDonateModal(true)} className="border border-white/40 text-white px-7 py-3.5 rounded-xl font-bold text-sm md:text-base hover:bg-white/10 hover:border-white/60 transition-all active:scale-97 backdrop-blur-sm">
              Support Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;