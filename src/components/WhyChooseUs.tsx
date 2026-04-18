import { Clock, DollarSign, Zap, UserCheck, Sparkles, ThumbsUp } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Clock size={24} />,
    title: '24/7 Service',
    description: 'We are available round the clock to serve your travel needs anytime.',
  },
  {
    icon: <DollarSign size={24} />,
    title: 'Affordable Pricing',
    description: 'Transparent pricing with no hidden charges. Best rates guaranteed.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Fast Pickup & Drop',
    description: 'Punctuality is our priority. We ensure on-time pickups and drops.',
  },
  {
    icon: <UserCheck size={24} />,
    title: 'Professional Drivers',
    description: 'Experienced, verified, and courteous drivers for a safe journey.',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Clean & Maintained Cars',
    description: 'Our fleet is regularly serviced and sanitized for your comfort.',
  },
  {
    icon: <ThumbsUp size={24} />,
    title: 'Customer Satisfaction',
    description: '1000+ happy customers who trust us for their travel needs.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                We Provide The Best <br />
                <span className="text-blue-900">Travel Experience</span>
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At Yash Tours & Travels, we go the extra mile to ensure your journey is safe, comfortable, and memorable. Our commitment to quality service sets us apart.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-900 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                alt="Woman travel concept"
                className="relative z-10 rounded-3xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  10+
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Years of</p>
                  <p className="text-xl font-bold text-gray-900">Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
