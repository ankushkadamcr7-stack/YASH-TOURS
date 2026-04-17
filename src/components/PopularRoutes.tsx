import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const routes = [
  { from: 'Ratnagiri', to: 'Pune', price: '₹4000', type: 'One Way' },
  { from: 'Ratnagiri', to: 'Mumbai', price: '₹5500', type: 'One Way' },
  { from: 'Ratnagiri', to: 'Goa', price: '₹6000', type: 'One Way' },
  { from: 'Ratnagiri', to: 'Kolhapur', price: '₹2500', type: 'One Way' },
  { from: 'Ratnagiri', to: 'Pune Airport', price: '₹4500', type: 'Drop' },
  { from: 'Ratnagiri', to: 'Mumbai Airport', price: '₹6000', type: 'Drop' },
];

export default function PopularRoutes() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">Top Routes</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Taxi Routes</h3>
          <p className="text-gray-600 text-lg">
            Frequently traveled routes with our best-in-class taxi service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex items-center justify-between p-6 rounded-2xl border border-gray-100 bg-white hover:border-orange-200 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2 font-bold text-gray-900 text-lg">
                    <span>{route.from}</span>
                    <ArrowRight size={16} className="text-gray-400" />
                    <span>{route.to}</span>
                  </div>
                  <span className="text-sm text-gray-500">{route.type}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-sm text-gray-500 mb-1">Starting from</span>
                <span className="font-bold text-orange-500 text-xl">{route.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20"
            >
              Get Custom Quote
            </a>
        </div>
      </div>
    </section>
  );
}
