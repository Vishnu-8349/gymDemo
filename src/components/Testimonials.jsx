import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#111111] text-white relative border-b border-zinc-900">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#FF8A00] text-xs font-bold uppercase tracking-widest block">
            WHAT OUR MEMBERS SAY
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white leading-tight">
            TRUSTED BY HUNDREDS OF HAPPY MEMBERS
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#1B1B1B] border border-[#2C2C2C] rounded-[24px] p-8 flex flex-col justify-between hover:border-[#FF8A00]/50 transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="w-10 h-10 text-[#FF8A00]/30 absolute top-6 right-6" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-[#FF8A00]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FF8A00]"
                />
                <div>
                  <h4 className="font-bebas text-xl text-white tracking-wide leading-none">{item.name}</h4>
                  <p className="text-xs text-zinc-400 font-medium mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <span className="w-8 h-2 rounded-full bg-[#FF8A00]"></span>
          <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
          <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
        </div>

      </div>
    </section>
  );
}
