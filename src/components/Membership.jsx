import React, { useState } from 'react';
import { Check, Sparkles, Zap } from 'lucide-react';
import { MEMBERSHIPS } from '../data/gymData';

export default function Membership({ onOpenModal }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'quarterly' | 'yearly'

  const getPrice = (plan) => {
    if (billingCycle === 'quarterly') return plan.quarterlyPrice;
    if (billingCycle === 'yearly') return plan.yearlyPrice;
    return plan.monthlyPrice;
  };

  const getBillingLabel = () => {
    if (billingCycle === 'quarterly') return '/ quarter';
    if (billingCycle === 'yearly') return '/ year';
    return '/ month';
  };

  return (
    <section id="membership" className="py-24 bg-[#111111] text-white relative border-b border-zinc-900">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#FF8A00] text-xs font-bold uppercase tracking-widest block">
            MEMBERSHIP PLANS
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white leading-tight">
            CHOOSE THE PLAN THAT FITS YOU
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Transparent pricing with no hidden fees. Select your membership tier and lock in your transformation journey today.
          </p>

          {/* Billing Cycle Switcher Pills */}
          <div className="pt-6 flex justify-center">
            <div className="bg-[#1B1B1B] p-1.5 rounded-full border border-[#2C2C2C] inline-flex items-center gap-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-xs font-semibold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-[#FF8A00] text-white shadow-lg'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('quarterly')}
                className={`px-6 py-2 rounded-full text-xs font-semibold transition-all ${
                  billingCycle === 'quarterly'
                    ? 'bg-[#FF8A00] text-white shadow-lg'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Quarterly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full text-xs font-semibold transition-all relative ${
                  billingCycle === 'yearly'
                    ? 'bg-[#FF8A00] text-white shadow-lg'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Yearly
                <span className="ml-1.5 bg-green-500 text-black font-extrabold text-[9px] px-1.5 py-0.5 rounded-full uppercase">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {MEMBERSHIPS.map((plan) => {
            const isHighlighted = plan.highlighted;
            return (
              <div
                key={plan.id}
                className={`relative rounded-[24px] p-8 flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-2 ${
                  isHighlighted
                    ? 'bg-[#1B1B1B] border-2 border-[#FF8A00] shadow-[0_0_40px_rgba(255,138,0,0.25)] scale-105 z-10'
                    : 'bg-[#1B1B1B] border border-[#2C2C2C] hover:border-zinc-700'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#FF8A00] to-[#FFB347] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div>
                  <div className="text-center pb-6 border-b border-zinc-800">
                    <h3 className="font-bebas text-3xl tracking-wider text-white mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-zinc-400 text-xs font-medium mb-4">
                      {plan.subtitle}
                    </p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-bold text-[#FF8A00]">₹</span>
                      <span className="font-bebas text-5xl tracking-tight text-white">
                        {getPrice(plan)}
                      </span>
                      <span className="text-zinc-400 text-xs font-medium">
                        {getBillingLabel()}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="py-8 space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                        <div className="w-5 h-5 rounded-full bg-[#FF8A00]/10 border border-[#FF8A00]/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#FF8A00]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <button
                    onClick={onOpenModal}
                    className={`w-full py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      isHighlighted
                        ? 'bg-gradient-to-r from-[#FF8A00] to-[#FFB347] text-white shadow-[0_0_20px_rgba(255,138,0,0.4)] hover:shadow-[0_0_30px_rgba(255,138,0,0.6)]'
                        : 'bg-zinc-900 border border-zinc-700 hover:border-[#FF8A00] text-white hover:text-[#FF8A00]'
                    }`}
                  >
                    Choose {plan.name} Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
