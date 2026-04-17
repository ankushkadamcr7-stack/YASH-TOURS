import { Users, Briefcase, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const cars = [
  {
    name: 'Innova Crysta',
    type: 'Premium SUV',
    image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-3.png?isig=0&q=80',
    seats: 7,
    bags: 4,
    selfDrive: true,
  },
  {
    name: 'Ertiga',
    type: 'MUV',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1936&auto=format&fit=crop',
    seats: 7,
    bags: 3,
    selfDrive: true,
  },
  {
    name: 'Swift Dzire',
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop',
    seats: 4,
    bags: 2,
    selfDrive: true,
  },
  {
    name: 'Hyundai Creta',
    type: 'Compact SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop',
    seats: 5,
    bags: 3,
    selfDrive: true,
  },
  {
    name: 'Hyundai Xcent',
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop',
    seats: 4,
    bags: 2,
    selfDrive: false,
  },
  {
    name: 'Hyundai i20',
    type: 'Hatchback',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop',
    seats: 4,
    bags: 1,
    selfDrive: true,
  },
];

export default function CarFleet() {
  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">Our Fleet</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Ride</h3>
          <p className="text-gray-600 text-lg">
            We offer a diverse range of well-maintained vehicles to suit your specific travel needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {car.type}
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{car.name}</h4>
                
                <div className="flex items-center gap-6 mb-6 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-orange-500" />
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} className="text-orange-500" />
                    <span>{car.bags} Bags</span>
                  </div>
                </div>
                
                {car.selfDrive && (
                  <div className="flex items-center gap-2 mb-6 text-green-600 text-sm font-medium bg-green-50 px-3 py-1.5 rounded-lg inline-flex">
                    <CheckCircle size={16} />
                    <span>Self Drive Available</span>
                  </div>
                )}
                
                <div className="flex gap-3 mt-auto">
                  <a
                    href="tel:+919876543210"
                    className="flex-1 text-center bg-blue-50 text-blue-900 py-3 rounded-xl font-semibold hover:bg-blue-100 transition-colors border border-blue-100"
                  >
                    Call
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
