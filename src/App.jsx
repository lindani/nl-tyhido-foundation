import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Heart, X, CheckCircle2, Copy } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Objectives from './components/Objectives';
import About from './components/About';
import Footer from './components/Footer';
import Testimonial from './components/Testimonials';
import AnimatedGallery from './components/AnimatedGallery';

const App = () => {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyBanking = () => {
    const text = 'Account: 10192837465, Bank: Standard Bank, Branch: 051001';
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-slate-900 selection:bg-orange-100 overflow-x-hidden">
      <Toaster position="top-center" />

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

      <Navbar />
      <Hero />
      <About />
      <AnimatedGallery />
      <Objectives />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
