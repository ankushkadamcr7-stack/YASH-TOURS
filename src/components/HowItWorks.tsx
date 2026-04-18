import { CalendarCheck, CarFront, Smile, Route } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: <Route size={32} />,
    title: 'Choose Your Route',
    description: 'Select your pickup and drop locations or a predefined tour package.',
  },
  {
    icon: <CarFront size={32} />,
    title: 'Select a Vehicle',
    description: 'Pick the perfect ride from our diverse fleet based on your needs and group size.',
  },
  {
    icon: <CalendarCheck size={32} />,
    title: 'Confirm Booking',
    description: 'Enter your details and instantly confirm your booking via WhatsApp or Call.',
  },
  {
    icon: <Smile size={32} />,
    title: 'Enjoy Your Ride',
    description: 'Sit back, relax, and let our professional drivers assure a safe journey.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">Simple Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h3>
          <p className="text-gray-600 text-lg">
            Booking a ride with Yash Tours is incredibly fast, easy, and completely hassle-free in just 4 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[45px] left-[15%] right-[15%] h-0.5 bg-gray-200 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-50 shadow-xl flex items-center justify-center text-orange-500 mb-6 bg-gradient-to-br from-white to-orange-50">
                {step.icon}
              </div>
              <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold absolute top-16 -right-2 lg:right-10 border-4 border-white">
                {index + 1}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
