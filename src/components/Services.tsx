import { Car, Plane, Map, Clock, Shield, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: <Car size={32} />,
    title: 'Self Drive Cars',
    description: 'Enjoy the freedom of driving yourself with our well-maintained self-drive cars.',
  },
  {
    icon: <MapPin size={32} />,
    title: 'Taxi Rental',
    description: 'Reliable point-to-point taxi services with professional and courteous drivers.',
  },
  {
    icon: <Plane size={32} />,
    title: 'Airport Pickup & Drop',
    description: 'Punctual airport transfers to ensure you never miss a flight.',
  },
  {
    icon: <Map size={32} />,
    title: 'Outstation Trips',
    description: 'Comfortable outstation cabs for your weekend getaways and business trips.',
  },
  {
    icon: <Shield size={32} />,
    title: 'Tour Packages',
    description: 'Customized tour packages covering top destinations across Maharashtra.',
  },
  {
    icon: <Clock size={32} />,
    title: 'Hourly Rental',
    description: 'Hire a cab on an hourly basis for local sightseeing or multiple meetings.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h3>
          <p className="text-gray-600 text-lg">
            We provide a wide range of travel solutions to make your journey comfortable, safe, and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <a href="#contact" className="inline-flex items-center font-semibold text-orange-500 hover:text-orange-600 transition-colors">
                Book Now <span className="ml-2">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
