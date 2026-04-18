import { Phone, MessageCircle, Star, MapPin, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { WhatsappIcon } from './WhatsappIcon';

export default function Hero() {
  const scrollToDestinations = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const destSection = document.getElementById('destinations');
    if (destSection) {
      destSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Atmospheric Blur Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 lg:mt-0">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 w-full text-center lg:text-left pt-6 lg:pt-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/80 border border-blue-400/30 text-blue-100 mb-6 mx-auto lg:mx-0 shadow-sm backdrop-blur-sm">
              <ShieldCheck size={16} className="text-orange-400" />
              <span className="text-sm font-semibold tracking-wide uppercase">100% Safe & Reliable Rides</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
              Your Journey, <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Perfectly Planned
              </span>
            </h1>
            
            <p className="text-lg text-blue-100/90 mb-8 mx-auto lg:mx-0 max-w-xl leading-relaxed">
              Premium car rentals and unforgettable guided tours at affordable prices. Enjoy 24/7 service with professional drivers across Maharashtra.
            </p>
            
            {/* Features List */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-10 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-orange-400" />
                <span className="font-medium">No Hidden Costs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-orange-400" />
                <span className="font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-orange-400" />
                <span className="font-medium">Expert Drivers</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://wa.me/919892676143"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(37,211,102,0.4)]"
              >
                <WhatsappIcon size={22} />
                <span>WhatsApp Booking</span>
              </a>
              <a
                href="#destinations"
                onClick={scrollToDestinations}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-700/50 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600/60 transition-all border border-blue-500/50 hover:-translate-y-1 shadow-[0_8px_20px_rgba(29,78,216,0.2)] hover:shadow-[0_12px_25px_rgba(29,78,216,0.3)]"
              >
                <span>Explore Tours</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Image Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            {/* Main Rounded Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/5] sm:aspect-square lg:aspect-[4/5] xl:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
                alt="Beautiful highly-rated road trip" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"></div>
            </div>

            {/* Overlapping Floating Cards */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 sm:bottom-10 sm:-left-12 bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center text-orange-400">
                <Star className="w-6 h-6 fill-orange-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-white leading-none">4.9/5</p>
                <p className="text-sm font-medium text-blue-100 mt-1">From 500+ Reviews</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-6 sm:top-20 sm:-right-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 flex flex-col items-center gap-2 z-20 hidden sm:flex"
            >
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-blue-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-blue-900 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop" alt="User" />
                <div className="w-10 h-10 rounded-full border-2 border-blue-900 bg-orange-500 flex items-center justify-center text-xs font-bold text-white">+1k</div>
              </div>
              <p className="text-xs font-semibold text-blue-100 uppercase tracking-widest mt-1">Happy Clients</p>
            </motion.div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
