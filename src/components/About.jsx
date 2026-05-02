import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-auto md:h-[600px] relative group">
          <img
            src="https://images.unsplash.com/photo-1521791136364-798a7bc0d261?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            alt="Mentorship Meeting"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1521791136364-798a7bc0d261?auto=format&fit=crop&q=60&w=800";
            }}
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem] md:rounded-[3rem]" />
        </div>
        <div>
          <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">About Us</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Ndithini L Tyhido Foundation</h2>
          <div className="space-y-6 text-slate-600 text-base md:text-lg font-medium leading-relaxed">
            <p>The <span className="text-slate-900 font-bold border-b-2 border-orange-500 pb-1">Ndithini L Tyhido Foundation</span> is built on the belief that proximity to leadership changes lives.</p>
            <p>We provide a platform for community youth to engage with professional mentors, fostering a culture of ethics, accountability, and ambition.</p>

            <div className="grid grid-cols-2 gap-6 md:gap-10 pt-8">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <div className="text-3xl md:text-4xl font-black text-slate-900">120+</div>
                <div className="text-[9px] font-black uppercase text-orange-600 tracking-widest mt-1">Impacted</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <div className="text-3xl md:text-4xl font-black text-slate-900">15+</div>
                <div className="text-[9px] font-black uppercase text-orange-600 tracking-widest mt-1">Active Mentors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;