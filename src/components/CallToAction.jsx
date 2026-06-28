import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';

export default function CallToAction({ onOpenModal }) {
  return (
    <section className="relative py-28 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop"
          alt="Gym CTA background"
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF8A00]/20 border border-[#FF8A00]/40 text-[#FF8A00] text-xs font-bold uppercase tracking-wider">
          <Flame className="w-4 h-4" />
          <span>START YOUR FITNESS JOURNEY</span>
        </div>

        <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl tracking-wide text-white max-w-4xl mx-auto leading-tight">
          READY TO START YOUR FITNESS JOURNEY?
        </h2>

        <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Book your free trial session today and take the first step towards a stronger, healthier, and more confident version of yourself.
        </p>

        <div className="pt-4">
          <button
            onClick={onOpenModal}
            className="px-10 py-5 bg-gradient-to-r from-[#FF8A00] to-[#FFB347] text-white font-semibold text-lg rounded-full shadow-[0_0_30px_rgba(255,138,0,0.5)] hover:shadow-[0_0_45px_rgba(255,138,0,0.8)] transition-all transform hover:-translate-y-1 inline-flex items-center gap-3 group"
          >
            <span>Book Free Trial Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
