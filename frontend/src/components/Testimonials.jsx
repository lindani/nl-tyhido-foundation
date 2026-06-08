import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { name: 'John Doe', role: 'Stellar Solutions', text: 'I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.' },
  { name: 'John Doe', role: 'Stellar Solutions', text: 'I could not be happier with the outcome of our project. The team’s creativity and problem-solving skills were instrumental in bringing our vision to life.' },
  { name: 'Jane Smith', role: 'Blue Horizon Technologies', text: 'Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.' },
  { name: 'David Johnson', role: 'Quantum Innovations', text: 'Working with the team was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we imagined.' },
  { name: 'Ronee Brown', role: 'Fusion Dynamics', text: 'I am amazed by the level of professionalism and dedication shown by the team. They exceeded our expectations and delivered outstanding results.' },
  { name: 'Michael Wilson', role: 'Visionary Creations', text: 'The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched.' }
];

const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 160 : -160,
    y: 0
  }),
  enter: { 
    opacity: 1, 
    x: 0, 
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] }
  },
  exit: (direction) => ({ 
    opacity: 0, 
    x: direction < 0 ? 160 : -160, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeIn' }
  })
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Handled layout swap neatly at 1024px break
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = isMobile ? testimonials.length : Math.ceil(testimonials.length / 3);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 9000);

    return () => clearInterval(timer);
  }, [isMobile, currentIndex, totalPages]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentBatch = isMobile 
    ? [testimonials[currentIndex]] 
    : testimonials.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-slate-950 text-white px-4 sm:px-8 xl:px-4 overflow-hidden">
      <div className="absolute -left-16 top-16 w-44 h-44 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -right-16 bottom-10 w-56 h-56 rounded-full bg-slate-700/30 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        
        {/* Simple Uncluttered Header */}
        <div className="text-center lg:text-left mb-14 md:mb-20 max-w-2xl mx-auto lg:mx-0">
          <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Community Voices</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Word From Our Communities</h2>
        </div>

        {/* Integrated Carousel Framework Container Grid */}
        <div className="relative flex items-center justify-between w-full gap-4 xl:gap-8">
          
          {/* LEFT CHEVRON BUTTON: Renders relative inline on desktop, absolute overlay on mobile */}
          <button
            onClick={handlePrev}
            className="absolute left-0 lg:relative lg:left-auto top-1/2 lg:top-auto -translate-y-1/2 lg:translate-y-0 z-20 p-3 rounded-full bg-slate-900/80 lg:bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/15 hover:scale-105 active:scale-95 transition-all shadow-xl backdrop-blur-md shrink-0 cursor-pointer"
            aria-label="Previous batch"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dynamic Content Frame Viewport Window */}
          <div className="relative overflow-hidden w-full min-h-[400px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[360px] xl:min-h-[320px] px-10 lg:px-0">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={cardVariants}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 w-full absolute top-0 left-0 h-full"
              >
                {currentBatch.map((testimonial, index) => {
                  if (!testimonial) return null;
                  return (
                    <motion.article
                      key={testimonial.name + index}
                      whileHover={isMobile ? {} : { y: -6, borderColor: 'rgba(249, 115, 22, 0.3)' }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 p-6 md:p-8 xl:p-10 shadow-2xl shadow-black/40 backdrop-blur-sm h-full flex flex-col justify-between transition-colors duration-300"
                    >
                      <div className="absolute -right-4 -top-4 text-white/5 opacity-25 pointer-events-none group-hover:text-orange-500/5 group-hover:scale-110 transition-transform duration-500">
                        <Quote className="w-16 h-16 xl:w-20 xl:h-20" />
                      </div>
                      
                      <p className="relative text-sm md:text-base leading-relaxed text-slate-300 font-medium mb-6">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center gap-4 border-t border-white/5 pt-5 mt-auto">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-base font-black text-slate-950 shadow-md shadow-orange-500/10 group-hover:scale-105 transition-transform duration-300">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="min-w-0 text-left">
                          <h5 className="text-xs md:text-sm font-black tracking-tight truncate text-white">{testimonial.name}</h5>
                          <p className="text-[9px] uppercase tracking-[0.25em] text-orange-400 font-bold truncate mt-0.5">{testimonial.role}</p>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT CHEVRON BUTTON: Renders relative inline on desktop, absolute overlay on mobile */}
          <button
            onClick={handleNext}
            className="absolute right-0 lg:relative lg:right-auto top-1/2 lg:top-auto -translate-y-1/2 lg:translate-y-0 z-20 p-3 rounded-full bg-slate-900/80 lg:bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/15 hover:scale-105 active:scale-95 transition-all shadow-xl backdrop-blur-md shrink-0 cursor-pointer"
            aria-label="Next batch"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

        </div>

        {/* Unified Responsive Navigation Indicators Bottom Strip */}
        <div className="flex justify-center items-center gap-2 mt-8 lg:mt-12">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx 
                  ? 'w-7 bg-orange-500 shadow-[0_0_0_3px_rgba(249,115,22,0.15)]' 
                  : 'w-2 bg-white/10 hover:bg-white/25'
              }`}
              aria-label={`Show page ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;