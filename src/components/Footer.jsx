import React from 'react';
import { Dumbbell, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function Footer({ onOpenModal }) {
  return (
    <footer id="contact" className="bg-[#0D0D0D] text-white pt-20 pb-10 border-t border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-800">
          
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="inline-block">
              <img 
                src="/logo.jpg" 
                alt="IronTurf Gym & Fitness Logo" 
                className="h-16 w-auto object-contain rounded-lg" 
              />
            </a>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              {GYM_INFO.tagline} Building stronger bodies, healthier minds, and empowering elite fitness transformations in Patna since 2014.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href={GYM_INFO.socials.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#FF8A00] hover:border-[#FF8A00] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              <a href={GYM_INFO.socials.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#FF8A00] hover:border-[#FF8A00] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={GYM_INFO.socials.youtube} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#FF8A00] hover:border-[#FF8A00] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href={GYM_INFO.socials.twitter} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#FF8A00] hover:border-[#FF8A00] transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links (Col 5-7) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bebas text-xl text-white tracking-wider border-b border-[#FF8A00]/40 pb-2 inline-block">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li><a href="#home" className="hover:text-[#FF8A00] transition-colors">Home</a></li>
              <li><a href="#why-us" className="hover:text-[#FF8A00] transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-[#FF8A00] transition-colors">Programs</a></li>
              <li><a href="#membership" className="hover:text-[#FF8A00] transition-colors">Membership Plans</a></li>
              <li><a href="#trainers" className="hover:text-[#FF8A00] transition-colors">Trainers</a></li>
              <li><a href="#transformations" className="hover:text-[#FF8A00] transition-colors">Transformations</a></li>
              <li><a href="#testimonials" className="hover:text-[#FF8A00] transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact & Hours (Col 8-10) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bebas text-xl text-white tracking-wider border-b border-[#FF8A00]/40 pb-2 inline-block">
              CONTACT & HOURS
            </h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF8A00] shrink-0 mt-1" />
                <span>{GYM_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <span>{GYM_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <span>{GYM_INFO.email}</span>
              </div>
              
              <div className="pt-3 border-t border-zinc-800 space-y-1.5 text-xs">
                <div className="flex items-center gap-2 text-[#FF8A00] font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>WORKING HOURS</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Mon - Fri:</span>
                  <span className="text-white font-medium">{GYM_INFO.hours.weekdays}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Saturday:</span>
                  <span className="text-white font-medium">{GYM_INFO.hours.saturday}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Sunday:</span>
                  <span className="text-white font-medium">{GYM_INFO.hours.sunday}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Preview (Col 11-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bebas text-xl text-white tracking-wider border-b border-[#FF8A00]/40 pb-2 inline-block">
              OUR LOCATION
            </h4>
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 relative h-44 group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=600&auto=format&fit=crop"
                alt="Gym Location Map"
                className="w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-[#FF8A00] text-black flex items-center justify-center mb-2 shadow-lg animate-bounce">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-bebas text-lg text-white tracking-wide">IRON TURF GYM PATNA</span>
                <button
                  onClick={onOpenModal}
                  className="mt-2 text-[11px] bg-white text-black font-bold px-3 py-1 rounded-full hover:bg-[#FF8A00] hover:text-white transition-colors"
                >
                  Get Directions / Visit Us
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} IronTurf Gym & Fitness. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#refund" className="hover:text-zinc-300 transition-colors">Membership Agreement</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
