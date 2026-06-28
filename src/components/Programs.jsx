import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';

export default function Programs({ onOpenModal }) {
  return (
    <section id="programs" className="py-24 bg-[#111111] text-white relative border-b border-zinc-900">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-[#FF8A00] text-xs font-bold uppercase tracking-widest block">
              OUR PROGRAMS
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white leading-tight">
              FIND THE PERFECT PROGRAM FOR YOU
            </h2>
          </div>

          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 hover:border-[#FF8A00] text-zinc-300 hover:text-white text-sm font-semibold transition-all group w-fit"
          >
            <span>View All Programs</span>
            <ArrowRight className="w-4 h-4 text-[#FF8A00] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Programs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="bg-[#1B1B1B] border border-[#2C2C2C] rounded-[20px] overflow-hidden group hover:border-[#FF8A00]/50 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Card Image Banner */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-[#FF8A00]/90 text-black text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                    {program.subtitle}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-bebas text-2xl tracking-wide text-white group-hover:text-[#FF8A00] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={onOpenModal}
                  className="w-full py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FF8A00] text-zinc-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Program</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF8A00] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
