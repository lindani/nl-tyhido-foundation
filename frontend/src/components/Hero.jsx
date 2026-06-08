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
    // FIX: Explicitly configured ID boundary anchor matching target string logic inside the navbar element
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center bg-slate-950 overflow-hidden pt-[88px] pb-12 md:py-24">
      
      {/* --- PREMIUM DONATE MODAL --- */}
      {showDonateModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-all duration-300" onClick={() => setShowDonateModal(false)} />
          
          {/* Enhanced Dark Theme glass panel option matching site framework elements */}
          <div className="relative bg-slate-900/95 border border-white/10 w-full max-w-lg rounded-[2rem] p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh] text-white backdrop-blur-xl">
            <button className="absolute top-5 right-5 p-2.5 text-slate-400 hover:text-orange-500 rounded-xl hover:bg-white/5 transition-all outline-none" onClick={() => setShowDonateModal(false)}>
              <X size={20} />
            </button>
            <div className="text-center">
              <div className="inline-flex p-3.5 bg-orange-500/10 text-orange-500 rounded-2xl mb-4 border border-orange-500/20">
                <Heart size={26} />
              </div>
              <h3 className="text-xl md:text-2xl font-black tracking-tight mb-1">Support Our Vision</h3>
              <p className="text-slate-400 mb-6 text-[10px] uppercase tracking-[0.2em] font-black">Banking Details</p>
              
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 text-left mb-6 space-y-4 text-xs md:text-sm font-semibold text-slate-300">
                <div className="flex justify-between border-b border-white/5 pb-2.5">
                  <span className="text-slate-400">Bank</span> 
                  <span className="font-bold text-white">Standard Bank</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2.5">
                  <span className="text-slate-400">Account Name</span> 
                  <span className="text-right font-bold text-white">NL Tyhido Foundation</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2.5">
                  <span className="text-slate-400">Account Number</span> 
                  <span className="text-orange-500 font-black tracking-wide">10192837465</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Branch Code</span> 
                  <span className="font-bold text-white">051001</span>
                </div>
              </div>

              <button 
                onClick={handleCopyBanking} 
                className="w-full bg-orange-600 hover:bg-orange-500 text-white py-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20 active:scale-95 transition-all duration-300"
              >
                {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                {copied ? 'Copied to Clipboard!' : 'Copy Details'}
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
        {/* Adjusted gradient density overlays matching deeper sleek slate navbar backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/70 to-slate-950" />
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
          <p className="fade-in mt-4 md:mt-6 text-sm md:text-base lg:text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
            {currentSlide.sub}
          </p>
          <div className="fade-in flex flex-col sm:flex-row justify-center gap-4 max-w-xs sm:max-w-none mx-auto">
            <button 
              onClick={handleContactClick} 
              className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-orange-600/10 hover:shadow-orange-600/20"
            >
              Contact Us
            </button>
            <button 
              onClick={() => setShowDonateModal(true)} 
              className="border border-white/20 bg-white/[0.03] text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm"
            >
              Support Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;