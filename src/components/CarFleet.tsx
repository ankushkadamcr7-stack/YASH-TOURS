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
    image: 'https://htcms-prod-images.s3.ap-south-1.amazonaws.com/ht/auto/cms-images/marutisuzuki_ertiga/multi-images/colour_marutisuzuki-ertiga_pearl-metallic-arctic-white_600x400_1600x900.jpg',
    seats: 7,
    bags: 3,
    selfDrive: true,
  },
  {
    name: 'Swift Dzire',
    type: 'Sedan',
    image: 'https://s3.ap-south-1.amazonaws.com/cb360static/uploads/93915ea9-f81f-41bb-9972-b286be448b48-small-New%20Project%20-%202025-01-16T161103.598.webp',
    seats: 4,
    bags: 2,
    selfDrive: true,
  },
  {
    name: 'Hyundai Creta',
    type: 'Compact SUV',
    image: 'https://trident-group.s3.ap-south-1.amazonaws.com/hyundai/models/colors/1705923461.png',
    seats: 5,
    bags: 3,
    selfDrive: true,
  },
  {
    name: 'Hyundai Xcent',
    type: 'Sedan',
    image: 'https://imgd-ct.aeplcdn.com/664x415/n/2fhd7sa_1471629.jpg?q=80',
    seats: 4,
    bags: 2,
    selfDrive: true,
  },
  {
    name: 'Hyundai i20',
    type: 'Hatchback',
    image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/i20-N-Line/10285/1770883106140/front-left-side-47.jpg?imwidth=320&impolicy=resize',
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
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-blue-900 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  {car.type}
                </div>
                {car.selfDrive && (
                  <div className="absolute top-4 left-4 bg-green-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <CheckCircle size={14} strokeWidth={2.5} />
                    <span>Self-Drive Available</span>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-1">
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
                
                <div className="flex gap-3 mt-auto">
                  <a
                    href="tel:+919892676143"
                    className="flex-1 text-center bg-blue-50 text-blue-900 py-3 rounded-xl font-semibold hover:bg-blue-100 transition-colors border border-blue-100"
                  >
                    Call
                  </a>
                  <a
                    href={`https://wa.me/919892676143?text=*Car Booking Inquiry*%0A%0AHi, I am interested in booking the *${car.name}* (${car.type}). Please provide me with more details.`}
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
