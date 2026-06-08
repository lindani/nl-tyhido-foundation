import React from 'react';
import { handleImageError, preloadImages } from '../utils/imageOptimization';

const About = () => {
  // Preload about images for faster rendering
  React.useEffect(() => {
    preloadImages(["/images/about-1.png"]);
  }, []);

  const handleAboutImageError = (e) => {
    handleImageError(e, "/images/about-2.png");
  };

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-20 items-center">
        <div className="rounded-2xl md:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-xl md:shadow-2xl aspect-[4/5] md:aspect-auto md:h-[500px] lg:h-[600px] relative group">
          <img
            src="/images/about-1.png"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            alt="Mentorship Meeting"
            onError={handleAboutImageError}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle overlay accent */}
          <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl md:rounded-3xl lg:rounded-[3rem] pointer-events-none" />
          
          {/* Decorative corner accent */}
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-500/20 to-transparent rounded-tl-3xl" />
        </div>
        
        <div className="space-y-6 md:space-y-8">
          <div>
            <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">About Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter leading-tight">Ndithini L Tyhido Foundation</h2>
          </div>
          
          <div className="space-y-6 text-slate-600 text-base md:text-lg font-medium leading-relaxed">
            <p>The <span className="text-slate-900 font-bold border-b-2 border-orange-500 pb-1">Ndithini L Tyhido Foundation</span> is built on the belief that proximity to leadership changes lives.</p>
            <p>We provide a platform for community youth to engage with professional mentors, fostering a culture of ethics, accountability, and ambition.</p>

            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-8">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 hover:border-orange-300 transition-colors duration-300">
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">120+</div>
                <div className="text-[9px] font-black uppercase text-orange-600 tracking-widest mt-2">Impacted</div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 hover:border-orange-300 transition-colors duration-300">
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">15+</div>
                <div className="text-[9px] font-black uppercase text-orange-600 tracking-widest mt-2">Active Mentors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;