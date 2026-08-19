import React, { useState } from 'react';
import { ArrowRight, Compass, Sparkles, MapPin } from 'lucide-react';

export default function FinalCTA({ onStartPlanning }) {
  const [destinationInput, setDestinationInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onStartPlanning(destinationInput || 'Jaipur, Rajasthan');
  };

  return (
    <section className="relative py-28 md:py-40 bg-charcoal text-canvas overflow-hidden">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=85"
          alt="Atmospheric India landscape"
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Small Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-semibold tracking-widest uppercase shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-sunset" />
          <span>START YOUR INDIA WORKSPACE</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-medium leading-[1.05] tracking-tight text-white">
          Your next Indian story is <br />
          <span className="italic font-normal text-sunset">waiting out there.</span>
        </h2>

        {/* Supporting text */}
        <p className="text-lg sm:text-xl text-white/80 font-light max-w-xl mx-auto leading-relaxed">
          Give it an Indian destination, a few days, and a little intention.
        </p>

        {/* Interactive Quick Input Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-4 space-y-3">
          <div className="relative flex items-center">
            <MapPin className="w-5 h-5 text-sunset absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={destinationInput}
              onChange={(e) => setDestinationInput(e.target.value)}
              placeholder="Where do you want to go in India? (e.g. Jaipur, Manali, Goa...)"
              className="w-full pl-12 pr-36 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-sunset focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 px-5 py-2.5 rounded-full bg-sunset text-canvas text-xs sm:text-sm font-semibold hover:bg-sunset-hover transition-colors flex items-center gap-1.5 shadow-md active:scale-95"
            >
              <span>Plan trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="text-[11px] text-white/50 font-mono">
            Free forever for personal trip planning across India • No credit card needed
          </div>
        </form>

      </div>
    </section>
  );
}
