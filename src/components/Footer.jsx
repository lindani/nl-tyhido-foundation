import React from 'react';
import { Heart, Mail, MapPin, ArrowRight, ArrowUp } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
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
                  <li><a href="#objectives" className="hover:text-white transition-colors">Objectives</a></li>
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
    </>
  );
};

export default Footer;