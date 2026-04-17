import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Rahul Desai',
    role: 'Frequent Traveler',
    content: 'Excellent service! The driver was very polite and the Innova was perfectly clean. Reached Pune airport right on time. Highly recommended for outstation trips.',
    rating: 5,
  },
  {
    name: 'Sneha Patil',
    role: 'Tourist',
    content: 'We booked a 3-day Konkan tour package. The experience was amazing. The driver knew all the local spots and good restaurants. Very affordable pricing too.',
    rating: 5,
  },
  {
    name: 'Amit Kadam',
    role: 'Business Owner',
    content: 'I regularly use Yash Tours for my business trips to Mumbai. They are always punctual and their cars are well maintained. Best taxi service in Ratnagiri.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Read what our happy customers have to say about our service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <Quote size={40} className="text-blue-50 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-orange-400 text-orange-400" />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <span className="text-sm text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
