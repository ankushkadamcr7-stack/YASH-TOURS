import { Users, Clock, ShieldCheck, ThumbsUp } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { icon: <Users size={32} />, value: '1000+', label: 'Happy Customers' },
  { icon: <Clock size={32} />, value: '24/7', label: 'Support Available' },
  { icon: <ShieldCheck size={32} />, value: '100%', label: 'Safe & Secure' },
  { icon: <ThumbsUp size={32} />, value: '4.9/5', label: 'Average Rating' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, translateY: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-orange-100 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
