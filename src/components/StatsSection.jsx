import React from 'react';
import { Award, Users, Dumbbell, Flame } from 'lucide-react';
import { HERO_STATS } from '../data/gymData';

export default function StatsSection() {
  const icons = [
    <Award className="w-8 h-8 text-[#FF8A00]" />,
    <Users className="w-8 h-8 text-[#FF8A00]" />,
    <Dumbbell className="w-8 h-8 text-[#FF8A00]" />,
    <Flame className="w-8 h-8 text-[#FF8A00]" />
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#111111] via-[#1A1A1A] to-[#111111] text-white border-b border-zinc-900 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {HERO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#1B1B1B]/80 border border-zinc-800 rounded-[20px] p-8 text-center hover:border-[#FF8A00]/50 transition-all transform hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FF8A00]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {icons[idx]}
              </div>
              <div className="font-bebas text-5xl text-[#FF8A00] tracking-wider mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 font-semibold uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
