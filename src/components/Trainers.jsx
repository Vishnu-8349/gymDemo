import React from 'react';
import { Award } from 'lucide-react';
import { TRAINERS } from '../data/gymData';

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-[#111111] text-white relative border-b border-zinc-900">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-[#FF8A00] text-xs font-bold uppercase tracking-widest block">
              EXPERT COACHES
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white leading-tight">
              EXPERT GUIDANCE. REAL RESULTS.
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md">
            Our elite certified fitness professionals bring decades of combined experience to craft personalized routines and keep you accountability-driven.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-[#1B1B1B] border border-[#2C2C2C] rounded-[20px] overflow-hidden group hover:border-[#FF8A00]/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Photo with Overlay */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-transparent to-transparent"></div>
                  
                  {/* Experience Tag */}
                  <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-[#FF8A00] text-[11px] font-bold px-3 py-1 rounded-full border border-[#FF8A00]/30 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {trainer.experience}
                  </span>
                </div>

                {/* Trainer Information */}
                <div className="p-6 space-y-2">
                  <h3 className="font-bebas text-2xl tracking-wider text-white group-hover:text-[#FF8A00] transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-[#FF8A00] text-xs font-semibold uppercase tracking-wider">
                    {trainer.specialization}
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed pt-2">
                    {trainer.bio}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                <a href="#instagram" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#FF8A00] hover:border-[#FF8A00] transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#facebook" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#FF8A00] hover:border-[#FF8A00] transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
                </a>
                <a href="#youtube" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#FF8A00] hover:border-[#FF8A00] transition-all">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

