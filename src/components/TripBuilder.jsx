import React, { useState } from 'react';
import { Sparkles, MapPin, Calendar, Smartphone, CheckCircle, ArrowRight, Layers, MoveRight } from 'lucide-react';

export default function TripBuilder() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Pick an Indian place',
      subtitle: 'Drop a pin, palace, or wishlisted ghat.',
      description: 'Search any hill station, royal fort, coastal beach, or spiritual city. Triply automatically extracts opening hours, darshan times, ticket prices, and map coordinates into your workspace.',
      icon: MapPin,
      preview: {
        tag: 'Instant Import',
        headline: 'Importing: Amber Fort & Sheesh Mahal',
        details: 'Jaipur, Rajasthan • Entry: ₹550 • Timings: 08:30 AM – 05:30 PM • Heritage Category',
        status: 'Added to Rajasthan Wishlist',
      }
    },
    {
      number: '02',
      title: 'Shape your days',
      subtitle: 'Drag places onto balanced daily timelines.',
      description: 'Organize your days visually. Balance transit time between forts and bazaars, avoid afternoon heat, and adjust your pace with zero spreadsheet friction.',
      icon: Calendar,
      preview: {
        tag: 'Pace Optimizer',
        headline: 'Day 02 Travel Time: 22 mins',
        details: 'Optimized route: Hawa Mahal → Amber Fort → Nahargarh Sunset Ridge',
        status: 'Optimal Auto & Cab Pace',
      }
    },
    {
      number: '03',
      title: 'Go live the plan',
      subtitle: 'Shared offline maps & live INR budget sync.',
      description: 'Access your trip offline on your phone during mountain trails or fort walks, invite co-travelers to split costs, and manage your accommodation payments seamlessly.',
      icon: Smartphone,
      preview: {
        tag: 'Mobile & Offline',
        headline: 'Offline Map Ready for Jaipur',
        details: '2 Travel Partners Synced • Vande Bharat Express departure alerts enabled',
        status: 'Ready for Travel Mode',
      }
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-canvas-muted/40 relative border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/10 text-sage-dark text-xs font-semibold tracking-widest uppercase">
            <span>HOW TRIPLY WORKS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-medium text-charcoal leading-[1.08]">
            From a blank page to an India plan <br className="hidden sm:inline" />
            <span className="italic text-sunset">you’ll actually use.</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl mx-auto">
            Three simple, deliberate steps designed to transform vague ideas into memorable days across India.
          </p>
        </div>

        {/* Desktop Step Nav / Horizontal Timeline */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-12 relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-charcoal/10 -translate-y-1/2 -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`relative z-10 text-left p-6 rounded-3xl transition-all duration-300 ${
                  isActive
                    ? 'bg-canvas-pure border-2 border-sunset shadow-editorial scale-102'
                    : 'bg-canvas/80 border border-charcoal/10 hover:bg-canvas-pure hover:border-charcoal/20'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-mono font-bold ${isActive ? 'text-sunset' : 'text-charcoal-faint'}`}>
                    {step.number}
                  </span>
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                    isActive ? 'bg-sunset text-canvas' : 'bg-canvas-muted text-charcoal-muted'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-editorial text-2xl font-semibold text-charcoal mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-sunset font-medium mb-2">{step.subtitle}</p>
                <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-2">
                  {step.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-4 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  isActive ? 'bg-canvas-pure border-sunset shadow-md' : 'bg-canvas border-charcoal/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg font-mono font-bold text-sunset">{step.number}</span>
                  <div className="w-9 h-9 rounded-xl bg-sunset/10 text-sunset flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-charcoal">{step.title}</h3>
                    <p className="text-xs text-charcoal-muted">{step.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Step Preview Window */}
        <div className="bg-canvas-pure border border-charcoal/10 rounded-3xl p-6 sm:p-10 shadow-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Step Description */}
            <div className="md:col-span-6 space-y-4 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sunset/10 text-sunset font-mono text-xs font-semibold">
                STEP {steps[activeStep].number} PREVIEW
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-charcoal font-semibold">
                {steps[activeStep].title} — <span className="italic font-normal text-sunset">{steps[activeStep].subtitle}</span>
              </h3>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                {steps[activeStep].description}
              </p>
              
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-sage-dark">
                <CheckCircle className="w-4 h-4 text-sage" />
                <span>Designed for zero friction Indian travel planning</span>
              </div>
            </div>

            {/* Right: Live Interactive Card Illustration */}
            <div className="md:col-span-6">
              <div className="p-6 rounded-2xl bg-charcoal text-canvas space-y-4 shadow-floating relative overflow-hidden border border-white/10">
                <div className="flex items-center justify-between text-xs text-white/70 border-b border-white/10 pb-3">
                  <span className="font-mono text-sunset font-semibold uppercase tracking-wider">
                    {steps[activeStep].preview.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {steps[activeStep].preview.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-editorial text-2xl font-medium text-white">
                    {steps[activeStep].preview.headline}
                  </h4>
                  <p className="text-xs text-white/70">
                    {steps[activeStep].preview.details}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <span>Triply India Sync Engine</span>
                  <ArrowRight className="w-4 h-4 text-sunset" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
