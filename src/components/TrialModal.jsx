import React, { useState } from 'react';
import { X, CheckCircle2, Dumbbell, Calendar, User, Phone, Mail } from 'lucide-react';

export default function TrialModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: 'Weight Loss',
    preferredTime: 'Morning (6 AM - 10 AM)'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#1B1B1B] border border-[#2C2C2C] rounded-[20px] p-6 sm:p-8 shadow-2xl text-white">
        
        {/* Close Button */}
        <button 
          onClick={handleReset} 
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#FF8A00]/20 text-[#FF8A00] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bebas text-white tracking-wide">YOU'RE ALL SET!</h3>
            <p className="text-zinc-400 text-sm max-w-sm mx-auto">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>! Our fitness counselor will call you shortly on <span className="text-[#FF8A00]">{formData.phone}</span> to confirm your Free Pass slot.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-[#FF8A00] to-[#FFB347] text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(255,138,0,0.5)] transition-all transform hover:-translate-y-0.5"
            >
              Back to Homepage
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-[#FF8A00] text-sm font-semibold mb-1">
              <Dumbbell className="w-4 h-4" />
              <span>START YOUR JOURNEY</span>
            </div>
            <h3 className="text-3xl font-bebas text-white tracking-wide mb-2">BOOK YOUR FREE DAY PASS</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Experience our luxury facilities, state-of-the-art equipment, and expert coaching with zero commitment.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-zinc-400 mb-1 font-medium">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-3.5 text-zinc-500" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#111111] border border-[#2C2C2C] rounded-xl text-white text-sm focus:outline-none focus:border-[#FF8A00] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-zinc-400 mb-1 font-medium">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-zinc-500" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-[#111111] border border-[#2C2C2C] rounded-xl text-white text-sm focus:outline-none focus:border-[#FF8A00] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-1 font-medium">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-zinc-500" />
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-[#111111] border border-[#2C2C2C] rounded-xl text-white text-sm focus:outline-none focus:border-[#FF8A00] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-zinc-400 mb-1 font-medium">Primary Fitness Goal</label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#111111] border border-[#2C2C2C] rounded-xl text-white text-sm focus:outline-none focus:border-[#FF8A00] transition-colors"
                  >
                    <option>Weight Loss</option>
                    <option>Muscle Building</option>
                    <option>Strength Training</option>
                    <option>General Fitness</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-1 font-medium">Preferred Time Slot</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#111111] border border-[#2C2C2C] rounded-xl text-white text-sm focus:outline-none focus:border-[#FF8A00] transition-colors"
                  >
                    <option>Morning (6 AM - 10 AM)</option>
                    <option>Afternoon (12 PM - 4 PM)</option>
                    <option>Evening (5 PM - 9 PM)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 bg-gradient-to-r from-[#FF8A00] to-[#FFB347] text-white font-semibold text-sm rounded-full hover:shadow-[0_0_25px_rgba(255,138,0,0.5)] transition-all transform hover:-translate-y-0.5"
              >
                Claim Free Trial Pass
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
