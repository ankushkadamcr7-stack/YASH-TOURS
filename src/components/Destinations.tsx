import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  {
    name: 'Ganpatipule',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Swayambhu_Ganpati_Temple%2C_Ganpatipule.jpg/800px-Swayambhu_Ganpati_Temple%2C_Ganpatipule.jpg',
    description: 'Famous for its pristine beach and Swayambhu Ganpati Temple.',
  },
  {
    name: 'Jaigad Fort',
    image: 'https://images.unsplash.com/photo-1564507592208-0270e9402511?q=80&w=2070&auto=format&fit=crop',
    description: 'A 16th-century fort offering panoramic views of the Arabian Sea.',
  },
  {
    name: 'Marleshwar Temple',
    image: 'https://images.unsplash.com/photo-1621886292650-520f76c747d6?q=80&w=2071&auto=format&fit=crop',
    description: 'A cave temple dedicated to Lord Shiva, surrounded by waterfalls.',
  },
  {
    name: 'Aare Ware Beach',
    image: 'https://images.unsplash.com/photo-1615887023516-9bfa6da8861c?q=80&w=1974&auto=format&fit=crop',
    description: 'One of the most beautiful and untouched beaches in Konkan.',
  },
  {
    name: 'Ratnadurg Fort',
    image: 'https://images.unsplash.com/photo-1590050720455-83e954546c1a?q=80&w=2070&auto=format&fit=crop',
    description: 'A magnificent historical fort surrounded by the Arabian Sea on three sides.',
  },
  {
    name: 'Bhatye Beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
    description: 'A long, flat, and peaceful beach perfect for evening strolls and sunset views.',
  }
];

export default function Destinations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Scroll by 1 item width approx depending on screen
      const scrollAmount = container.clientWidth > 768 ? container.clientWidth * 0.5 : container.clientWidth;
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        // Check if we reached the right end (within a 10px threshold)
        const isAtEnd = Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth - 10;
        
        if (isAtEnd) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const scrollAmount = container.clientWidth > 768 ? container.clientWidth * 0.5 : container.clientWidth;
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 4000); // 4 seconds between auto-scrolls
    
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section id="destinations" className="py-20 bg-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-2">Tour Packages</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Explore Top Destinations</h3>
            <p className="text-blue-100 text-lg">
              Discover the hidden gems of Konkan with our specially curated tour packages. Slide to see more!
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
                aria-label="Previous destination"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
                aria-label="Next destination"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center bg-white text-blue-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shrink-0"
            >
              Book a Tour
            </a>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative -mx-4 sm:mx-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 px-4 sm:px-0 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
          >
            {destinations.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 100px 0px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{dest.name}</h4>
                  <p className="text-gray-300 text-sm opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {dest.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
