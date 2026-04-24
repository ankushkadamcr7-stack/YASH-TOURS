import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, phone, email, message } = formData;
    
    if (!name || !phone || !message) {
      alert("Please fill in your name, phone, and message.");
      return;
    }

    const whatsappMessage = `*New Contact Inquiry*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Email:* ${email || 'Not provided'}%0A` +
      `*Message:* ${message}`;

    const whatsappUrl = `https://wa.me/919892676143?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h3>
          <p className="text-gray-600 text-lg">
            Have a question or need to book a ride? Contact us today and we'll be happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Call Us</h4>
                <p className="text-gray-600 mb-1">+91 98926 76143</p>
                <p className="text-gray-600">+91 98926 76143</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Mail size={24} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Email Us</h4>
                <p className="text-gray-600 mb-1">info@yourtours.com</p>
                <p className="text-gray-600">booking@yourtours.com</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Our Location</h4>
                <p className="text-gray-600">
                  Ratnagiri, Maharashtra
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
              <iframe 
                src="https://maps.google.com/maps?q=Ratnagiri,%20Maharashtra%20415612&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50 transition-colors"
                    placeholder="+91 98926 76143"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-gray-50 transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
              >
                <span>Send via WhatsApp</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
