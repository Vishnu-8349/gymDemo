import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#1B1B1B] border-b border-[#2C2C2C] py-3.5 shadow-xl transition-all">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF8A00] to-[#FFB347] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,138,0,0.4)] group-hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6 transform -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-2xl tracking-wider text-white flex items-center gap-1.5 leading-none">
                IRON<span className="text-[#FF8A00]">TURF</span>
                <span className="bg-[#FF8A00] text-black text-[11px] px-1.5 py-0.5 rounded font-sans font-bold tracking-normal uppercase">GYM</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest leading-none mt-1">
                & FITNESS
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-zinc-300 hover:text-white transition-colors py-1 group"
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
              className="p-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111111]/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-6 space-y-4 animate-fade-in">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-[#FF8A00] transition-colors py-2 border-b border-zinc-900"
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
