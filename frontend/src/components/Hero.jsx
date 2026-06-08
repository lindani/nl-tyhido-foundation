import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { preloadImages } from "../utils/imageOptimization";
// import ContactModal from "./ContactFormModal";
// import { navItems } from "../constants";
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
    // Preload all hero images for smoother transitions
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
      
      // Reset to start state immediately to prevent "flashing" or staying invisible
      gsap.set(targets, { opacity: 0, y: 30 });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.out',
        overwrite: 'auto' // Prevents animation overlapping
      });
    }
  }, [currentImageIndex]);

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

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const isMobile = window.innerWidth < 768; // md breakpoint
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
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden py-16 md:py-24">
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
              idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="100vw"
          />
        ))}
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={heroRef}>
        {/* 2. Add a key here so React treats every slide change as a fresh start */}
        <div className="max-w-4xl mx-auto text-center" key={currentImageIndex}>
          <div className="fade-in">
            <TextGenerateEffect
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight font-black leading-tight"
              words={currentSlide.title}
            />
          </div>
          <p className="fade-in mt-6 md:mt-8 lg:mt-10 text-sm md:text-base lg:text-lg xl:text-xl text-slate-100 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
            {currentSlide.sub}
          </p>
          <div className="fade-in flex flex-wrap justify-center gap-3 md:gap-4">
            <button onClick={handleContactClick} className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-sm md:text-base hover:from-orange-500 hover:to-orange-400 transition-all hover:shadow-lg active:scale-95">
              Contact Us
            </button>
            <button onClick={() => setShowDonateModal(true)} className="border-2 border-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-sm md:text-base hover:bg-white/10 hover:border-white/50 transition-all active:scale-95">
              Support Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;