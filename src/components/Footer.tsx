import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
              YOUR <span className="text-orange-500">TOURS</span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for safe, comfortable, and affordable travel across Maharashtra. We make every journey memorable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#fleet" className="text-gray-400 hover:text-orange-500 transition-colors">Our Fleet</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Taxi Rental</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Self Drive Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Airport Transfers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Outstation Cabs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Tour Packages</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-500 shrink-0 mt-1" />
                <span className="text-gray-400">Ratnagiri, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-orange-500 shrink-0" />
                <span className="text-gray-400">+91 98926 76143</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-orange-500 shrink-0" />
                <span className="text-gray-400">info@yourtours.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Your Tours & Travel. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
