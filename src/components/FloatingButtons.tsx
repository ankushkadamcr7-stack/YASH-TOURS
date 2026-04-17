import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href="tel:+919876543210"
        className="w-14 h-14 bg-blue-900 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-900/30 hover:scale-110 transition-transform"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
