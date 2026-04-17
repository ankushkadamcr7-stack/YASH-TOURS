/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CarFleet from './components/CarFleet';
import PopularRoutes from './components/PopularRoutes';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="font-sans text-gray-900 antialiased selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BookingForm />
        <Services />
        <WhyChooseUs />
        <CarFleet />
        <PopularRoutes />
        <Destinations />
        <Testimonials />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
