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

  // Disable background scrolling when mobile sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#1B1B1B]/95 backdrop-blur-md border-b border-[#2C2C2C] py-3.5 shadow-2xl'
            : 'bg-white/95 backdrop-blur-md border-b border-zinc-200/80 py-3.5 sm:py-4 shadow-sm'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group py-0.5 shrink-0">
              <img 
                src="/logo.jpg" 
                alt="IronTurf Gym & Fitness Logo" 
                className="h-10 sm:h-12 w-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300" 
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

            {/* Right Action Controls */}
            <div className="flex items-center gap-3">
              {/* "Book Free Trial" Button - Always on Navbar */}
              <button
                onClick={onOpenModal}
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-[#FF8A00] to-[#FFB347] text-white text-xs sm:text-sm font-semibold rounded-full hover:shadow-[0_0_20px_rgba(255,138,0,0.5)] transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5 sm:gap-2 shrink-0"
              >
                <span>Book Free Trial</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* Mobile Hamburger Button */}
              <div className="lg:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Open mobile menu"
                  className={`p-2 rounded-lg transition-colors ${
                    scrolled 
                      ? 'text-zinc-300 hover:text-white hover:bg-zinc-800' 
                      : 'text-[#111111] hover:text-[#FF8A00] hover:bg-zinc-100'
                  }`}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Right-Side Sliding Drawer (White Background) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Dark Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Right Sliding Panel - Clean White Background */}
          <div className="fixed top-0 right-0 h-full w-[80vw] max-w-[320px] bg-white border-l border-zinc-200 text-[#111111] p-6 flex flex-col justify-between shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto">
            
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-zinc-100">
                <img 
                  src="/logo.jpg" 
                  alt="IronTurf Gym Logo" 
                  className="h-10 w-auto object-contain rounded" 
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-zinc-500 hover:text-black hover:bg-zinc-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-col space-y-1.5 pt-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-zinc-800 hover:text-[#FF8A00] py-3 px-3 rounded-xl hover:bg-zinc-50 border-b border-zinc-100/60 transition-all flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-[#FF8A00] group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Drawer Footer info */}
            <div className="pt-6 border-t border-zinc-100 text-center">
              <p className="text-xs text-zinc-500 font-medium">IronTurf Gym & Fitness</p>
              <p className="text-[11px] text-zinc-400 mt-0.5">Transform Your Body. Transform Your Life.</p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
