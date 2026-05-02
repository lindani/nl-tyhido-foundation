import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [testimonialPage, setTestimonialPage] = useState(0);

  const allTestimonials = [
    { name: "John Doe", role: "Stellar Solutions", text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations." },
    { name: "John Doe", role: "Stellar Solutions", text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life." },
    { name: "Jane Smith", role: "Blue Horizon Technologies", text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service." },
    { name: "David Johnson", role: "Quantum Innovations", text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!" },
    { name: "Ronee Brown", role: "Fusion Dynamics", text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results." },
    { name: "Michael Wilson", role: "Visionary Creations", text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future." }
  ];

  const testimonialBatches = [allTestimonials.slice(0, 3), allTestimonials.slice(3, 6)];

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-slate-950 text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Community Voices</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Word From Our Communities</h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setTestimonialPage(0)}
              className={`p-4 rounded-xl transition-all ${testimonialPage === 0 ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/40' : 'bg-white/5 text-slate-500 hover:bg-white/10'}`}
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => setTestimonialPage(1)}
              className={`p-4 rounded-xl transition-all ${testimonialPage === 1 ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/40' : 'bg-white/5 text-slate-500 hover:bg-white/10'}`}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonialBatches[testimonialPage].map((t, i) => (
            <div key={i} className="bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
              <p className="text-base md:text-lg font-medium mb-10 opacity-80 leading-relaxed min-h-[100px]">{t.text}</p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center font-black text-xl">{t.name[0]}</div>
                <div>
                  <h5 className="font-black text-sm">{t.name}</h5>
                  <p className="text-[10px] uppercase font-bold text-orange-500 tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;