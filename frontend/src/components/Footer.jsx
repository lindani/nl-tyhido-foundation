import React, { useState } from 'react';
import { Heart, Mail, MapPin, ArrowRight, ArrowUp } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* --- CONTACT --- */}
      <section id="contact" className="py-20 md:py-32 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20">
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
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl font-bold outline-none focus:ring-2 ring-orange-100 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl font-bold outline-none focus:ring-2 ring-orange-100 transition-all"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl font-bold outline-none focus:ring-2 ring-orange-100 transition-all"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl font-bold outline-none focus:ring-2 ring-orange-100 resize-none transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 text-white py-5 rounded-xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-white pt-20 md:pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Grid Container */}
          <div className="grid lg:grid-cols-12 gap-12 md:gap-16 mb-20">
            
            {/* Column 1: Branding & Intro */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-5 mb-10 group">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 border-orange-500/30 group-hover:border-orange-500 transition-all duration-500 rotate-3 group-hover:rotate-0 shadow-2xl">
                    <img
                      src="/images/ndibs-profile.png"
                      alt="Ndithini L Tyhido"
                      className="w-full h-full object-cover object-top scale-110 group-hover:scale-100 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='32' fill='%23f97316'/%3E%3Ctext x='32' y='38' font-family='Arial, sans-serif' font-size='24' font-weight='bold' text-anchor='middle' fill='white'%3ENT%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-600 rounded-lg flex items-center justify-center border-2 border-slate-950">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-2xl md:text-3xl font-black tracking-tighter leading-none text-white uppercase">
                    NDITHINI <span className="text-orange-500">L TYHIDO</span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mt-2">
                    Founder & Visionary
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 font-medium max-w-md">
                Dedicated to molding ethical leaders and self-sufficient youth within the heart of South African communities.
              </p>

              <div className="flex justify-center lg:justify-start gap-3 md:gap-4">
                <a href="https://facebook.com/NDITHINI" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300" aria-label="Facebook"><FaFacebook size={18} /></a>
                <a href="https://twitter.com/NLTF_SA" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-400 hover:border-blue-400 transition-all duration-300" aria-label="Twitter"><FaTwitter size={18} /></a>
                <a href="https://instagram.com/ndithinityhido" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-500 hover:border-pink-500 transition-all duration-300" aria-label="Instagram"><FaInstagram size={18} /></a>
                <a href="https://linkedin.com/in/ndithini-tyhido-90092b89/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-700 hover:border-blue-700 transition-all duration-300" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
              <div className="text-center lg:text-left w-full mt-12 lg:mt-0">
                <h6 className="text-[10px] font-black uppercase text-orange-500 tracking-widest mb-6">
                  Navigation
                </h6>
                <ul className="grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:space-y-4 text-slate-400 font-bold text-sm">
                  <li className="text-center lg:text-left">
                    <a href="#about" className="hover:text-white transition-colors">About Us</a>
                  </li>
                  <li className="text-center lg:text-left">
                    <a href="#objectives" className="hover:text-white transition-colors">Objectives</a>
                  </li>
                  <li className="text-center lg:text-left">
                    <a href="#gallery" className="hover:text-white transition-colors">Impact Gallery</a>
                  </li>
                  <li className="text-center lg:text-left">
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Newsletter */}
            <div className="lg:col-span-4 bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col items-center lg:items-start text-center lg:text-left mt-12 lg:mt-0">
              <h6 className="text-[10px] font-black uppercase text-orange-500 tracking-widest mb-4">
                Newsletter
              </h6>
              <p className="text-xs md:text-sm text-slate-400 mb-6 font-medium max-w-xs">
                Join our community updates for monthly impact reports.
              </p>
              <form className="flex gap-2 w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="flex-1 bg-white/10 border-none px-4 py-3 rounded-xl font-bold text-xs md:text-sm outline-none focus:ring-1 ring-orange-500 min-w-0" 
                />
                <button className="bg-orange-600 p-3 rounded-xl hover:bg-orange-700 transition-all flex-shrink-0">
                  <ArrowRight size={18} />
                </button>
              </form>
              <div className="mt-8 pt-8 border-t border-white/5 w-full">
                <p className="text-[10px] font-black uppercase text-slate-500 mb-2 tracking-widest">NPC Registration</p>
                <p className="font-mono text-base md:text-lg font-bold text-slate-300 tracking-wider">2023 / 564482 / 08</p>
              </div>
            </div>
          </div> {/* Correctly closing the main grid */}

          {/* Bottom Bar */}
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