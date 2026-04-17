import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
          alt="Road trip"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30 md:hidden"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
              <ShieldCheck size={18} className="text-orange-400" />
              <span className="text-sm font-medium tracking-wide uppercase">Affordable | Safe | Reliable</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Best Car Rental <br />
              <span className="text-orange-500">& Tour Services</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed">
              24/7 Affordable Taxi Service Across Maharashtra. Book your ride now and travel stress-free with our professional drivers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919892676143"
                className="flex items-center justify-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-1"
              >
                <Phone size={22} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919892676143"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/30 hover:-translate-y-1"
              >
                <MessageCircle size={22} />
                <span>WhatsApp Booking</span>
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-white/80">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">1000+</span>
                <span className="text-sm">Happy Customers</span>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">24/7</span>
                <span className="text-sm">Support Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
