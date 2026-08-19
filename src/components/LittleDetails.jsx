import React from 'react';
import { Calendar, Gauge, MapPin, Heart, Sparkles, Sun, Coffee } from 'lucide-react';

export default function LittleDetails() {
  const details = [
    {
      label: 'Best time to visit',
      value: 'Oct – Mar',
      subtext: 'Crisp pleasant skies & 22°C golden afternoon light',
      icon: Sun,
      color: 'bg-amber-500/10 text-amber-700',
      badge: 'Peak Season',
    },
    {
      label: 'Trip pace',
      value: 'Unhurried',
      subtext: '2–3 curated stops per day, zero rush through forts',
      icon: Gauge,
      color: 'bg-sage/10 text-sage-dark',
      badge: 'Balanced',
    },
    {
      label: 'Days planned',
      value: '4 Days',
      subtext: '3 structured days + 1 flex exploration bazaar day',
      icon: Calendar,
      color: 'bg-sunset/10 text-sunset',
      badge: 'Optimal',
    },
    {
      label: 'Places saved',
      value: '14 Spots',
      subtext: '6 royal havelis, 4 forts & 4 culinary gems',
      icon: Heart,
      color: 'bg-rose-500/10 text-rose-700',
      badge: 'Curated',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-canvas-muted/40 relative border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-pure border border-charcoal/10 text-charcoal-muted text-xs font-semibold tracking-widest uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sunset" />
            <span>EDITORIAL WORKSPACE INSIGHTS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-editorial font-medium text-charcoal">
            The little details that make the India trip.
          </h2>
          <p className="text-base text-charcoal-muted">
            Intelligent context synthesized right inside your workspace.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-3xl bg-canvas-pure border border-charcoal/10 shadow-card hover:shadow-editorial hover:border-sunset/30 transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-canvas-muted border border-charcoal/5 text-charcoal-muted">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-charcoal-faint uppercase tracking-wider block">
                      {item.label}
                    </span>
                    <div className="font-editorial text-3xl sm:text-4xl font-bold text-charcoal mt-1 group-hover:text-sunset transition-colors">
                      {item.value}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-charcoal/5 text-xs text-charcoal-muted leading-relaxed">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
