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

const pageCount = 2;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const Testimonials = () => {
  const [testimonialPage, setTestimonialPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialPage((current) => (current + 1) % pageCount);
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setTestimonialPage((current) => (current - 1 + pageCount) % pageCount);
  };

  const handleNext = () => {
    setTestimonialPage((current) => (current + 1) % pageCount);
  };

  const currentBatch = testimonials.slice(testimonialPage * 3, testimonialPage * 3 + 3);

  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-slate-950 text-white px-6 overflow-hidden">
      <div className="absolute -left-16 top-16 w-44 h-44 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -right-16 bottom-10 w-56 h-56 rounded-full bg-slate-700/30 blur-3xl" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-14">
          <div>
            <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Community Voices</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter max-w-3xl">Word From Our Communities</h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-white/5 p-2 border border-white/10 shadow-lg shadow-black/10">
              <button
                onClick={handlePrev}
                className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 transition"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              {[...Array(pageCount)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestimonialPage(idx)}
                  className={`h-2.5 w-10 rounded-full transition-all ${testimonialPage === idx ? 'bg-orange-500 shadow-[0_0_0_3px_rgba(249,115,22,0.18)]' : 'bg-white/10 hover:bg-white/20'}`}
                  aria-label={`Show testimonials page ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={testimonialPage}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={cardVariants}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="grid md:grid-cols-3 gap-6 md:gap-12"
          >
            {currentBatch.map((testimonial, index) => (
              <motion.article
                key={testimonial.name + index}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/70 p-8 md:p-10 shadow-2xl shadow-black/20"
              >
                <div className="absolute -right-6 -top-6 text-white/10 opacity-40">
                  <Quote className="w-20 h-20" />
                </div>
                <p className="relative text-base md:text-lg leading-relaxed text-slate-200 mb-10 min-h-[120px]">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-orange-500 text-xl font-black text-slate-950">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-sm font-black tracking-tight">{testimonial.name}</h5>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-orange-400/90 font-bold">{testimonial.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
