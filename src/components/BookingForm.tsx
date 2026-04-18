import { MapPin, Calendar, Clock, Car, User, Phone, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    time: '',
    carType: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s\-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.pickup.trim()) {
      newErrors.pickup = 'Pickup location is required';
    }

    if (!formData.drop.trim()) {
      newErrors.drop = 'Drop location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    const { name, phone, pickup, drop, date, time, carType } = formData;
    
    const message = `*New Booking Request*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Pickup:* ${pickup}%0A` +
      `*Drop:* ${drop}%0A` +
      `*Date:* ${date || 'Not specified'}%0A` +
      `*Time:* ${time || 'Not specified'}%0A` +
      `*Car Type:* ${carType || 'Not specified'}`;

    const whatsappUrl = `https://wa.me/919892676143?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative z-20 -mt-16 md:-mt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100"
      >
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Quick Booking</h2>
          <p className="text-gray-500 text-sm mt-1">Fill the form below and we will contact you shortly via WhatsApp.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-x-6 md:gap-y-8">
          {/* Name */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className={errors.name ? "text-red-400" : "text-gray-400"} />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
                  errors.name 
                    ? 'border-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50/30' 
                    : 'border-gray-200 focus:ring-orange-500 focus:border-orange-500 bg-gray-50'
                } text-gray-900`}
                placeholder="John Doe"
              />
            </div>
            {errors.name && (
              <p className="absolute -bottom-5 left-0 text-[11px] text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle size={12} /> {errors.name}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone size={18} className={errors.phone ? "text-red-400" : "text-gray-400"} />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
                  errors.phone 
                    ? 'border-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50/30' 
                    : 'border-gray-200 focus:ring-orange-500 focus:border-orange-500 bg-gray-50'
                } text-gray-900`}
                placeholder="+91 98926 76143"
              />
            </div>
            {errors.phone && (
              <p className="absolute -bottom-5 left-0 text-[11px] text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle size={12} /> {errors.phone}
              </p>
            )}
          </div>

          {/* Pickup */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
              Pickup Location <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin size={18} className={errors.pickup ? "text-red-400" : "text-gray-400"} />
              </div>
              <input
                type="text"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
                  errors.pickup 
                    ? 'border-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50/30' 
                    : 'border-gray-200 focus:ring-orange-500 focus:border-orange-500 bg-gray-50'
                } text-gray-900`}
                placeholder="Ratnagiri"
              />
            </div>
            {errors.pickup && (
              <p className="absolute -bottom-5 left-0 text-[11px] text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle size={12} /> {errors.pickup}
              </p>
            )}
          </div>

          {/* Drop */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
              Drop Location <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin size={18} className={errors.drop ? "text-red-400" : "text-gray-400"} />
              </div>
              <input
                type="text"
                name="drop"
                value={formData.drop}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
                  errors.drop 
                    ? 'border-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50/30' 
                    : 'border-gray-200 focus:ring-orange-500 focus:border-orange-500 bg-gray-50'
                } text-gray-900`}
                placeholder="Pune Airport"
              />
            </div>
            {errors.drop && (
              <p className="absolute -bottom-5 left-0 text-[11px] text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle size={12} /> {errors.drop}
              </p>
            )}
          </div>

          {/* Date */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Date</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar size={18} className="text-gray-400" />
              </div>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none bg-gray-50 text-gray-900 transition-colors"
              />
            </div>
          </div>

          {/* Time */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Time</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Clock size={18} className="text-gray-400" />
              </div>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none bg-gray-50 text-gray-900 transition-colors"
              />
            </div>
          </div>

          {/* Car Type */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Car Type</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Car size={18} className="text-gray-400" />
              </div>
              <select 
                name="carType"
                value={formData.carType}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none bg-gray-50 text-gray-900 transition-colors appearance-none"
              >
                <option value="">Select Car</option>
                <option value="sedan">Sedan (Dzire, Xcent)</option>
                <option value="suv">SUV (Innova, Ertiga)</option>
                <option value="hatchback">Hatchback (i20)</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <div className="relative flex items-end">
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 px-4 rounded-xl font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
            >
              <span>Book Now</span>
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
