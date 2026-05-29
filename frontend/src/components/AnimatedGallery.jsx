import React, { useEffect } from 'react';
import { handleImageError, preloadImages } from '../utils/imageOptimization';

const AnimatedGallery = () => {
  const galleryImages = [
    { url: "/images/ndibs4.png", title: "Youth Workshop" },
    { url: "/images/ndibs9.png", title: "Skills Training" },
    { url: "/images/ndibs8.png", title: "Community Outreach" },
    { url: "/images/ndibs5.png", title: "Mentorship Circle" },
    { url: "/images/ndibs3.png", title: "Leadership Seminar" },
    { url: "/images/gallery-6.png", title: "Youth Empowerment" },
  ];

  // Preload critical gallery images on component mount
  useEffect(() => {
    const imagesToPreload = galleryImages.map((img) => img.url);
    preloadImages(imagesToPreload);
  }, []);

  const handleImageErrorCallback = (e) => {
    handleImageError(e, "/images/gallery-1.png");
  };

  return (
    <section id="gallery" className="relative py-16 md:py-24 lg:py-32 bg-slate-950 text-white overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute -left-16 top-16 w-44 h-44 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-16 bottom-10 w-56 h-56 rounded-full bg-slate-700/30 blur-3xl pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">In Action</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight">Our Impact in Action</h2>
        </div>

        {/* Gallery carousel with professional responsive sizing */}
        <div className="relative overflow-hidden">
          <div className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 animate-infinite-scroll py-4 md:py-6 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing will-change-transform">
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div
                key={i}
                className="group relative flex-shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg md:shadow-xl hover:shadow-2xl transition-shadow duration-300"
                style={{
                  width: 'clamp(280px, 100vw - 2rem, 450px)',
                  height: 'clamp(300px, 120vw - 2rem, 400px)',
                }}
              >
                {/* Lazy-loaded image with optimized properties */}
                <img
                  src={img.url}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:[animation-play-state:paused]"
                  alt={img.title}
                  onError={handleImageErrorCallback}
                  sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(50vw - 1rem), 450px"
                />

                {/* Professional overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8 pointer-events-none">
                  <span className="text-white font-black text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-tight leading-tight">
                    {img.title}
                  </span>
                </div>

                {/* Subtle focus ring on keyboard navigation */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-orange-500 opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Responsive hint text */}
        <p className="text-center text-slate-400 text-xs uppercase tracking-widest font-bold mt-8 hidden sm:block">Scroll to explore</p>
      </div>
    </section>
  );
};

export default AnimatedGallery;