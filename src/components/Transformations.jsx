import React from 'react';
import { Star, ChevronLeft, ChevronRight, TrendingDown } from 'lucide-react';
import { TRANSFORMATIONS } from '../data/gymData';

export default function Transformations() {
  return (
    <section id="transformations" className="py-24 bg-[#111111] text-white relative border-b border-zinc-900">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-[#FF8A00] text-xs font-bold uppercase tracking-widest block">
              MEMBER TRANSFORMATIONS
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white leading-tight">
              REAL PEOPLE. REAL RESULTS.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-11 h-11 rounded-full bg-[#1B1B1B] border border-[#2C2C2C] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF8A00] transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-11 h-11 rounded-full bg-[#1B1B1B] border border-[#2C2C2C] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF8A00] transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Transformation Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TRANSFORMATIONS.map((item) => (
            <div
              key={item.id}
              className="bg-[#1B1B1B] border border-[#2C2C2C] rounded-[24px] p-6 sm:p-8 hover:border-[#FF8A00]/50 transition-all duration-300 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
            >
              {/* Before & After Images */}
              <div className="sm:col-span-6 grid grid-cols-2 gap-3 relative">
                <div className="relative rounded-xl overflow-hidden group">
                  <img
                    src={item.beforeImg}
                    alt="Before transformation"
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    Before
                  </span>
                </div>
                <div className="relative rounded-xl overflow-hidden border-2 border-[#FF8A00]">
                  <img
                    src={item.afterImg}
                    alt="After transformation"
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-[#FF8A00] text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    After
                  </span>
                </div>
              </div>

              {/* Story & Stats */}
              <div className="sm:col-span-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-bebas text-3xl text-white tracking-wide">{item.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#FF8A00]/20 text-[#FF8A00] font-bold text-xs px-2.5 py-1 rounded-md flex items-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5" />
                      {item.stat}
                    </span>
                    <span className="text-zinc-400 text-xs font-medium">{item.time}</span>
                  </div>
                </div>

                <p className="text-zinc-300 text-sm italic leading-relaxed">
                  "{item.story}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 text-[#FF8A00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
