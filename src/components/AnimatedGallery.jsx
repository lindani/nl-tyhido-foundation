import React from 'react';

const AnimatedGallery = () => {
  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200", title: "Youth Workshop" },
    { url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=1200", title: "Skills Training" },
    { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200", title: "Community Outreach" },
    { url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200", title: "Mentorship Circle" },
    { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200", title: "Leadership Seminar" },
    { url: "https://images.unsplash.com/photo-1523240715630-97af400173b0?auto=format&fit=crop&q=80&w=1200", title: "Youth Empowerment" },
  ];

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://images.unsplash.com/photo-1521791136364-798a7bc0d261?auto=format&fit=crop&q=60&w=800";
  };

  return (
    <section id="gallery" className="py-20 md:py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="text-center mb-16">
        <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">In Action</span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">Our Impact in Action</h2>
      </div>
      <div className="flex gap-4 md:gap-6 animate-infinite-scroll py-6 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
        {[...galleryImages, ...galleryImages].map((img, i) => (
          <div key={i} className="w-[280px] md:w-[450px] h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden flex-shrink-0 shadow-lg group relative">
            <img
              src={img.url}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              alt={img.title}
              onError={handleImageError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <span className="text-white font-black text-lg md:text-xl uppercase tracking-tight">{img.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedGallery;