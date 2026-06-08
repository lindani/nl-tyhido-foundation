import React, { useState } from 'react';
import { Heart, Mail, MapPin, ArrowRight, ArrowUp, Send } from 'lucide-react';
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
  const [newsletterEmail, setNewsletterEmail] = useState('');

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

    // Dynamic environment API switch fallback to origin domain if env is empty
    const API_BASE = process.env.REACT_APP_API_URL || window.location.origin;

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    
    toast.success('Thank you for subscribing to our newsletter updates!');
    setNewsletterEmail('');
  };

  return (
    <>
      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-16 md:py-32 bg-slate-50 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Copy Branding Column */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div>
              <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-3 block">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight uppercase">
                Let's Connect<br className="hidden lg:block" /> For Impact.
              </h2>
            </div>
            
            <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
              Have questions, collaboration ideas, or want to view our community programs up close? Drop us a line and let's work together.
            </p>

            <div className="space-y-4 max-w-sm mx-auto lg:mx-0 text-left">
              <div className="flex gap-4 items-center group p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="p-3 bg-orange-50 text-orange-600 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Email Address</p>
                  <a href="mailto:info@nltyhidofoundation.org" className="font-bold text-sm sm:text-base text-slate-800 hover:text-orange-600 transition-colors block truncate">
                    info@nltyhidofoundation.org
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center group p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="p-3 bg-orange-50 text-orange-600 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Our Location</p>
                  <p className="font-bold text-sm sm:text-base text-slate-800">Khayelitsha Hub, Cape Town</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card Interactive Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/80 w-full">
            <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase text-slate-400 pl-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-50/60 border border-slate-200/70 p-3.5 md:p-4 rounded-xl font-semibold text-slate-800 text-sm outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white"
                  />
                </div>
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase text-slate-400 pl-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-50/60 border border-slate-200/70 p-3.5 md:p-4 rounded-xl font-semibold text-slate-800 text-sm outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-bold uppercase text-slate-400 pl-1">Subject Matter</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50/60 border border-slate-200/70 p-3.5 md:p-4 rounded-xl font-semibold text-slate-800 text-sm outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-bold uppercase text-slate-400 pl-1">Message Body</label>
                <textarea
                  name="message"
                  placeholder="Type your content details here..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50/60 border border-slate-200/70 p-3.5 md:p-4 rounded-xl font-semibold text-slate-800 text-sm outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 resize-none transition-all bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 text-white py-4 md:py-5 rounded-xl font-black text-sm md:text-base uppercase tracking-wider hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending Message...' : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- SYSTEM FOOTER --- */}
      <footer className="bg-slate-950 text-white pt-16 md:pt-24 pb-8 px-4 sm:px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Informative Layout Sections Wrapper */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-20">
            
            {/* Founder Branding Column Container Block */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mb-6 group w-full justify-center lg:justify-start">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-white/10 group-hover:border-orange-500/50 transition-all duration-500 rotate-2 group-hover:rotate-0 shadow-2xl">
                    <img
                      src="/images/ndibs-profile.png"
                      alt="Ndithini L Tyhido"
                      className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='32' fill='%23f97316'/%3E%3Ctext x='32' y='38' font-family='Arial, sans-serif' font-size='24' font-weight='bold' text-anchor='middle' fill='white'%3ENT%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-600 rounded-lg flex items-center justify-center border-2 border-slate-950">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="flex flex-col text-center sm:text-left">
                  <h4 className="text-xl md:text-2xl font-black tracking-tight leading-none text-white uppercase">
                    NDITHINI <span className="text-orange-500">L TYHIDO</span>
                  </h4>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mt-2 block">
                    Founder & Visionary
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 font-medium max-w-sm">
                Dedicated to molding ethical leaders and self-sufficient youth within the heart of South African communities.
              </p>

              {/* Social Anchors Layer Grid */}
              <div className="flex items-center gap-3">
                <a href="https://facebook.com/NDITHINI" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-0.5 transition-all duration-300" aria-label="Facebook"><FaFacebook size={16} /></a>
                <a href="https://twitter.com/NLTF_SA" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-900 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300" aria-label="Twitter"><FaTwitter size={16} /></a>
                <a href="https://instagram.com/ndithinityhido" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr from-yellow-600 via-pink-600 to-purple-600 hover:border-transparent hover:-translate-y-0.5 transition-all duration-300" aria-label="Instagram"><FaInstagram size={16} /></a>
                <a href="https://linkedin.com/in/ndithini-tyhido-90092b89/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-700 hover:border-blue-700 hover:-translate-y-0.5 transition-all duration-300" aria-label="LinkedIn"><FaLinkedin size={16} /></a>
              </div>
            </div>

            {/* Navigation Navigation Menu Columns */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left border-y border-white/5 lg:border-none py-8 lg:py-0">
              <div className="w-full">
                <h6 className="text-[10px] font-black uppercase text-orange-500 tracking-widest mb-5">
                  Links Exploration
                </h6>
                <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-3 text-slate-400 font-bold text-sm">
                  <li><a href="#about" className="hover:text-orange-400 transition-colors">About Us</a></li>
                  <li><a href="#objectives" className="hover:text-orange-400 transition-colors">Objectives</a></li>
                  <li><a href="#gallery" className="hover:text-orange-400 transition-colors">Impact Gallery</a></li>
                  <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact Hub</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter Container Card Widget Block */}
            <div className="lg:col-span-4 bg-white/[0.02] p-6 sm:p-8 rounded-3xl border border-white/5 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
              <h6 className="text-[10px] font-black uppercase text-orange-500 tracking-widest mb-3">
                Newsletter
              </h6>
              
              <p className="text-xs text-slate-400 mb-5 font-medium max-w-xs">
                Join our community updates loop for quarterly programmatic impact updates.
              </p>
              
              <form className="flex gap-2 w-full max-w-sm" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  required
                  placeholder="Your email address" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 px-4 py-3 rounded-xl font-semibold text-xs outline-none focus:ring-1 focus:ring-orange-500 focus:bg-white/10 text-white min-w-0 placeholder:text-slate-500" 
                />
                <button type="submit" className="bg-orange-600 p-3 rounded-xl hover:bg-orange-500 text-white transition-all flex-shrink-0 active:scale-95" aria-label="Subscribe">
                  <ArrowRight size={16} />
                </button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-white/5 w-full text-center lg:text-left">
                <p className="text-[9px] font-black uppercase text-slate-500 mb-1 tracking-wider">NPC Registration Identity</p>
                <p className="font-mono text-sm font-bold text-slate-300 tracking-wider">2023 / 564482 / 08</p>
              </div>
            </div>
          </div>

          {/* Core System Bottom Credits Bar Layer */}
          <div className="pt-8 border-t border-white/5 flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="text-[9px] font-black text-slate-500 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 uppercase tracking-[0.2em]">
              <span>© 2026 Ndithini L Tyhido Foundation</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Statement</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>

            <button onClick={scrollToTop} className="flex items-center gap-2.5 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-orange-500 transition-all group shrink-0">
              Scroll to Top
              <div className="p-2.5 rounded-full bg-white/5 border border-white/5 group-hover:bg-orange-600 group-hover:text-white group-hover:border-transparent transition-all shadow-lg">
                <ArrowUp size={12} />
              </div>
            </button>
          </div>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;