import React from 'react';
import { ArrowRight, Sparkles, Trophy, Users, Dumbbell, Target } from 'lucide-react';
import { HERO_STATS } from '../data/gymData';

export default function Hero({ onOpenModal }) {
  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-16 bg-[#F9F9F9] text-[#111111] overflow-hidden">
      
      {/* Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Top Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-[#FF8A00]/20 text-[#FF8A00] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE BEST FITNESS CLUB IN TOWN</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-bebas text-6xl sm:text-7xl lg:text-[82px] leading-[0.95] tracking-tight text-[#111111]">
              TRANSFORM <br />
              YOUR BODY. <br />
              <span className="text-[#FF8A00] inline-block mt-1">TRANSFORM YOUR LIFE.</span>
            </h1>

            {/* Paragraph Description */}
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Join the best fitness community in your city with certified trainers, modern state-of-the-art equipment, and personalized training programs engineered to deliver real results.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenModal}
                className="px-8 py-4 bg-gradient-to-r from-[#FF8A00] to-[#FFB347] text-white font-semibold text-base rounded-full shadow-[0_10px_25px_rgba(255,138,0,0.4)] hover:shadow-[0_15px_35px_rgba(255,138,0,0.6)] transition-all transform hover:-translate-y-1 flex items-center gap-2 group"
              >
                <span>Join Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#why-us"
                className="px-8 py-4 bg-white border-2 border-zinc-200 text-[#111111] font-semibold text-base rounded-full hover:border-[#FF8A00] hover:text-[#FF8A00] transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Media Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Rounded Image Container */}
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                  alt="IronTurf Gym & Fitness Workout"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              {/* Decorative Accent Badges */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 hidden sm:flex items-center gap-3.5 z-10 animate-float">
                <div className="w-12 h-12 rounded-xl bg-[#FF8A00]/10 flex items-center justify-center text-[#FF8A00]">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bebas text-2xl text-[#111111] leading-none">#1 RATED GYM</h4>
                  <p className="text-xs text-zinc-500 font-medium">In Patna Region</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Floating Statistics Banner */}
        <div className="mt-16 bg-[#111111] text-white rounded-[20px] p-6 sm:p-8 border border-zinc-800 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            {HERO_STATS.map((stat, idx) => (
              <div key={idx} className={`pt-4 md:pt-0 ${idx !== 0 ? 'md:pl-6' : ''} flex flex-col items-center justify-center`}>
                <span className="font-bebas text-4xl sm:text-5xl text-[#FF8A00] tracking-wider leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
