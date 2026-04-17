import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { 
  Heart, 
  Users, 
  Target, 
  ArrowRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Award,
  MapPin,
  Mail,
  Copy,
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowUp
} from 'lucide-react';

/**
 * Ndithini L Tyhido Foundation (NPC)
 * Updated with Image Fallbacks and Enhanced Responsive Design.
 */

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentHero, setCurrentHero] = useState(0);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [testimonialPage, setTestimonialPage] = useState(0);

  // Global fallback image for broken URLs
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://images.unsplash.com/photo-1521791136364-798a7bc0d261?auto=format&fit=crop&q=60&w=800";
  };

  // --- DATA ---
  
  const heroSlides = [
    {
      img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=2000",
      title: "Pioneering Community Growth",
      sub: "A legacy of mentorship, leadership, and sustainable social impact in South Africa's heartland."
    },
    {
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000",
      title: "Cultivating Excellence",
      sub: "Empowering the next generation of leaders through structured, community-led support."
    }
  ];

  const corePrograms = [
    { 
      icon: <Users />, 
      title: "Leadership Talks", 
      desc: "Motivational sessions sparking ambition and ethical leadership among school youth.", 
      img: "https://images.unsplash.com/photo-1523240715630-97af400173b0?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      icon: <Target />, 
      title: "Social Awareness", 
      desc: "Holistic awareness programs focused on preventing drug abuse and fostering community health.", 
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      icon: <Award />, 
      title: "Skills Development", 
      desc: "Tangible vocational workshops helping youth transition into the formal workforce with confidence.", 
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
    }
  ];

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200", title: "Youth Workshop" },
    { url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=1200", title: "Skills Training" },
    { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200", title: "Community Outreach" },
    { url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200", title: "Mentorship Circle" },
    { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200", title: "Leadership Seminar" },
    { url: "https://images.unsplash.com/photo-1523240715630-97af400173b0?auto=format&fit=crop&q=80&w=1200", title: "Youth Empowerment" },
  ];

  const allTestimonials = [
    { name: "Sipho M.", role: "Youth Participant", text: "The mentorship program gave me a vision for my life when I felt lost. Ndithini's guidance is practical." },
    { name: "Lindiwe D.", role: "Business Owner", text: "Seeing the foundation's impact on our youth has been incredible. They teach responsibility." },
    { name: "Thabo K.", role: "Community Leader", text: "This foundation is the bridge our community needed. They live their mission every day." },
    { name: "Zanele R.", role: "Parent", text: "My son has a completely different attitude toward his future since joining the talks." },
    { name: "Mzi G.", role: "Educator", text: "They provide the character building that children need beyond the classroom." },
    { name: "Buhle S.", role: "Alumni Student", text: "Because of the skills workshop, I secured my first internship. I am forever grateful." }
  ];

  const testimonialBatches = [allTestimonials.slice(0, 3), allTestimonials.slice(3, 6)];

  // --- EFFECTS ---

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const heroInterval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(heroInterval);
    };
  }, []);

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

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-slate-900 selection:bg-orange-100 overflow-x-hidden">
      
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

      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-[80] transition-all duration-500 px-6 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-md h-16 md:h-20' : 'bg-transparent h-24'
      }`}>
        <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={scrollToTop}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${scrolled ? 'bg-orange-600 text-white' : 'bg-white text-orange-600 shadow-xl group-hover:scale-110'}`}>
              <Heart size={20} />
            </div>
            <div className="flex flex-col">
              <span className={`text-base md:text-xl font-black uppercase tracking-tighter leading-none transition-colors duration-500 ${scrolled ? 'text-slate-900' : 'text-white'}`}>Ndithini L Tyhido</span>
              <span className={`text-[8px] font-black uppercase tracking-[0.3em] transition-colors duration-500 ${scrolled ? 'text-orange-600' : 'text-orange-300'}`}>Foundation NPC</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10 font-black text-[10px] uppercase tracking-[0.2em]">
            {['About', 'Programs', 'Gallery', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all hover:after:w-full ${scrolled ? 'text-slate-600 hover:text-orange-600' : 'text-white/80 hover:text-white'}`}>
                {item}
              </a>
            ))}
            <button onClick={() => setShowDonateModal(true)} className={`px-6 py-3 rounded-xl transition-all font-black shadow-lg active:scale-95 ${scrolled ? 'bg-orange-600 text-white hover:bg-orange-700' : 'bg-white text-orange-600 hover:bg-orange-50'}`}>
              Donate
            </button>
          </div>

          <button className={`lg:hidden p-3 rounded-xl transition-colors ${scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE NAV --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-white flex flex-col items-center justify-center p-8 space-y-10 lg:hidden animate-fade-in">
          <div className="absolute top-8 left-8 flex items-center gap-3">
             <Heart size={24} className="text-orange-600" />
             <span className="font-black text-xl tracking-tighter">NL TYHIDO</span>
          </div>
          <button className="absolute top-8 right-8 p-3 bg-slate-100 rounded-full" onClick={() => setIsMenuOpen(false)}><X /></button>
          
          <div className="flex flex-col items-center gap-8">
            {['About', 'Programs', 'Gallery', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-3xl font-black uppercase tracking-tight hover:text-orange-600 transition-colors" onClick={() => setIsMenuOpen(false)}>{item}</a>
            ))}
          </div>
          
          <button onClick={() => { setIsMenuOpen(false); setShowDonateModal(true); }} className="w-full max-w-xs bg-orange-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-orange-200">Donate Now</button>
        </div>
      )}

      {/* --- HERO --- */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-slate-950 overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, idx) => (
            <div key={idx} className={`absolute inset-0 transition-opacity duration-1500 ${idx === currentHero ? 'opacity-40' : 'opacity-0'}`}>
              <img 
                src={slide.img} 
                className="w-full h-full object-cover scale-105" 
                alt="Foundation Hero" 
                onError={handleImageError}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            {heroSlides.map((slide, idx) => (
              <div key={idx} className={`${idx === currentHero ? 'block' : 'hidden'} animate-fade-in`}>
                <div className="flex items-center gap-3 text-orange-500 mb-6">
                  <div className="w-8 h-[2px] bg-orange-500 hidden sm:block" />
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">NPC 2023 / 564482 / 08</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase">
                  {slide.title}
                </h1>
                <p className="text-base md:text-xl text-slate-300 mb-10 max-w-xl font-medium leading-relaxed">
                  {slide.sub}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#about" className="bg-orange-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg hover:bg-white hover:text-orange-600 transition-all flex items-center gap-3 shadow-lg active:scale-95">
                    Learn More <ArrowRight size={20} />
                  </a>
                  <button onClick={() => setShowDonateModal(true)} className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg hover:bg-white/20 transition-all active:scale-95">
                    Get Involved
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT --- */}
      <section id="about" className="py-20 md:py-32 px-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-auto md:h-[600px] relative group">
            <img 
              src="https://images.unsplash.com/photo-1521791136364-798a7bc0d261?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              alt="Mentorship Meeting" 
              onError={handleImageError}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem] md:rounded-[3rem]" />
          </div>
          <div>
            <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter uppercase">Rooted in Mentorship.</h2>
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

      {/* --- PROGRAMS --- */}
      <section id="programs" className="py-20 md:py-24 bg-slate-50 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">Our Initiatives.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {corePrograms.map((p, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-500 group">
                <div className="h-56 md:h-64 rounded-[2rem] overflow-hidden mb-6 relative">
                  <img 
                    src={p.img} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    alt={p.title} 
                    onError={handleImageError}
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-xl text-orange-600 shadow-md">
                    {p.icon}
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <h3 className="text-xl md:text-2xl font-black mb-3">{p.title}</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 font-medium">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section id="gallery" className="py-20 md:py-24 bg-white overflow-hidden scroll-mt-20">
        <div className="text-center mb-16">
            <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">In Action.</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">Visual impact of our work</h2>
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

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 md:py-24 bg-slate-950 text-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Feedback</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Voices of Change.</h2>
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
                <Quote className="text-orange-500 mb-6 opacity-40" size={32} />
                <p className="text-base md:text-lg italic font-medium mb-10 opacity-80 leading-relaxed min-h-[100px]">"{t.text}"</p>
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

      {/* --- CONTACT --- */}
      <section id="contact" className="py-20 md:py-24 bg-slate-50 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-10 uppercase">Let's Connect<br className="hidden md:block" /> For Impact.</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-center group">
                <div className="p-4 bg-white rounded-2xl shadow-md text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300"><Mail /></div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400">Email Address</p>
                  <p className="font-bold text-base md:text-lg">info@nltyhidofoundation.org</p>
                </div>
              </div>
              <div className="flex gap-6 items-center group">
                <div className="p-4 bg-white rounded-2xl shadow-md text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300"><MapPin /></div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400">Our Location</p>
                  <p className="font-bold text-base md:text-lg">Khayelitsha Hub, Cape Town</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl font-bold outline-none focus:ring-2 ring-orange-100 transition-all" />
                <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl font-bold outline-none focus:ring-2 ring-orange-100 transition-all" />
              </div>
              <input type="text" placeholder="Subject" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl font-bold outline-none focus:ring-2 ring-orange-100 transition-all" />
              <textarea placeholder="Your Message" rows={4} className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl font-bold outline-none focus:ring-2 ring-orange-100 resize-none transition-all" />
              <button className="w-full bg-slate-900 text-white py-5 rounded-xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl active:scale-95">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-white pt-20 md:pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-16 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Heart size={20} />
                </div>
                <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">NDITHINI L TYHIDO</span>
              </div>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 font-medium max-w-md">
                Dedicated to molding ethical leaders and self-sufficient youth within the heart of South African communities.
              </p>
              <div className="flex gap-3 md:gap-4">
                {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-orange-600 hover:border-orange-600 transition-all duration-300">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 grid grid-cols-2 gap-8 lg:block lg:space-y-12">
              <div>
                <h6 className="text-[10px] font-black uppercase text-orange-500 tracking-widest mb-6">Navigation</h6>
                <ul className="space-y-4 text-slate-400 font-bold text-sm">
                  <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#programs" className="hover:text-white transition-colors">Initiatives</a></li>
                  <li><a href="#gallery" className="hover:text-white transition-colors">Impact Gallery</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/5 p-8 rounded-[2rem] border border-white/10">
              <h6 className="text-[10px] font-black uppercase text-orange-500 tracking-widest mb-4">Newsletter</h6>
              <p className="text-xs md:text-sm text-slate-400 mb-6 font-medium">Join our community updates for monthly impact reports.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email Address" className="flex-1 bg-white/10 border-none px-4 py-3 rounded-xl font-bold text-xs md:text-sm outline-none focus:ring-1 ring-orange-500" />
                <button className="bg-orange-600 p-3 rounded-xl hover:bg-orange-700 transition-all">
                  <ArrowRight size={18} />
                </button>
              </form>
              <div className="mt-8 pt-8 border-t border-white/5">
                 <p className="text-[10px] font-black uppercase text-slate-500 mb-2 tracking-widest">NPC Registration</p>
                 <p className="font-mono text-base md:text-lg font-bold text-slate-300">2023 / 564482 / 08</p>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] font-black text-slate-500 flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 uppercase tracking-[0.2em]">
              <span>© 2026 Ndithini L Tyhido Foundation</span>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
            
            <button onClick={scrollToTop} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-500 transition-all group">
              Scroll to Top
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-inner">
                <ArrowUp size={14} />
              </div>
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;