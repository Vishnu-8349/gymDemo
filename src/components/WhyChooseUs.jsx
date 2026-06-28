import React from 'react';
import { UserCheck, Dumbbell, ClipboardCheck, Clock } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/gymData';

export default function WhyChooseUs() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-8 h-8 text-[#FF8A00]" />;
      case 'Dumbbell': return <Dumbbell className="w-8 h-8 text-[#FF8A00]" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-8 h-8 text-[#FF8A00]" />;
      case 'Clock': return <Clock className="w-8 h-8 text-[#FF8A00]" />;
      default: return <Dumbbell className="w-8 h-8 text-[#FF8A00]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#111111] text-white relative border-b border-zinc-900">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[#FF8A00] text-xs font-bold uppercase tracking-widest block">
              WHY CHOOSE US
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white leading-tight">
              EVERYTHING YOU NEED TO ACHIEVE YOUR BEST
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md">
            We provide the perfect high-motivation environment, expert coaching guidance, and proven physical protocols to help you surpass every fitness milestone.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((card) => (
            <div
              key={card.id}
              className="bg-[#1B1B1B] border border-[#2C2C2C] rounded-[20px] p-8 hover:border-[#FF8A00]/50 hover:bg-[#222222] transition-all duration-300 transform hover:-translate-y-2 group flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-[#FF8A00]/10 border border-[#FF8A00]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FF8A00] group-hover:text-black transition-all">
                  {React.cloneElement(getIcon(card.icon), {
                    className: "w-8 h-8 text-[#FF8A00] group-hover:text-black transition-colors"
                  })}
                </div>
                <h3 className="font-bebas text-2xl tracking-wide text-white group-hover:text-[#FF8A00] transition-colors">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
