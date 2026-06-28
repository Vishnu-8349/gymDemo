import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#why-us' },
    { name: 'Programs', href: '#programs' },
    { name: 'Membership', href: '#membership' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1B1B1B]/95 backdrop-blur-md border-b border-[#2C2C2C] py-3.5 shadow-2xl'
          : 'bg-white/95 backdrop-blur-md border-b border-zinc-200/80 py-4 shadow-sm'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group py-0.5">
            <img 
              src="/logo.jpg" 
              alt="IronTurf Gym & Fitness Logo" 
              className="h-11 sm:h-12 w-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300" 
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-semibold transition-colors py-1 group ${
                  scrolled 
                    ? 'text-zinc-300 hover:text-white' 
                    : 'text-[#111111] hover:text-[#FF8A00]'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF8A00] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenModal}
              className="px-6 py-2.5 bg-gradient-to-r from-[#FF8A00] to-[#FFB347] text-white text-sm font-semibold rounded-full hover:shadow-[0_0_20px_rgba(255,138,0,0.5)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              <span>Book Free Trial</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled 
                  ? 'text-zinc-300 hover:text-white hover:bg-zinc-800' 
                  : 'text-[#111111] hover:text-[#FF8A00] hover:bg-zinc-100'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden backdrop-blur-xl border-b px-6 py-6 space-y-4 animate-fade-in ${
          scrolled ? 'bg-[#111111]/95 border-zinc-800 text-white' : 'bg-white/98 border-zinc-200 text-[#111111]'
        }`}>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold transition-colors py-2 border-b ${
                  scrolled 
                    ? 'text-zinc-300 hover:text-[#FF8A00] border-zinc-900' 
                    : 'text-[#111111] hover:text-[#FF8A00] border-zinc-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full py-3 bg-gradient-to-r from-[#FF8A00] to-[#FFB347] text-white text-sm font-semibold rounded-full text-center shadow-lg"
            >
              Book Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
