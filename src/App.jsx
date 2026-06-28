import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Programs from './components/Programs';
import Membership from './components/Membership';
import Trainers from './components/Trainers';
import Transformations from './components/Transformations';
import Testimonials from './components/Testimonials';
import StatsSection from './components/StatsSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import TrialModal from './components/TrialModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#FF8A00] selection:text-white font-['Inter',sans-serif]">
      {/* Sticky Top Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main>
        {/* 1. White Hero Section */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 2. Why Choose Us */}
        <WhyChooseUs />

        {/* 3. Our Programs */}
        <Programs onOpenModal={handleOpenModal} />

        {/* 4. Membership Plans */}
        <Membership onOpenModal={handleOpenModal} />

        {/* 5. Expert Trainers */}
        <Trainers />

        {/* 6. Member Transformations */}
        <Transformations />

        {/* 7. Testimonials */}
        <Testimonials />

        {/* 8. Stats Section Counter */}
        <StatsSection />

        {/* 9. High Impact Call To Action Banner */}
        <CallToAction onOpenModal={handleOpenModal} />
      </main>

      {/* 10. Comprehensive Dark Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Interactive Free Trial Booking Modal */}
      <TrialModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
