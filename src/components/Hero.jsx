import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Calendar, CheckCircle2, Compass, Sparkles, ChevronRight, Bookmark } from 'lucide-react';

export default function Hero({ onPlanClick, onExploreClick }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax transform calculation based on scroll
  const imageScale = 1 + Math.min(scrollY * 0.0003, 0.08);
  const cardTranslateY = Math.min(scrollY * 0.12, 40);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-canvas">
      {/* Decorative ambient backdrop blur blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sunset/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-sage/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-column editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-muted border border-charcoal/10 text-charcoal-muted text-xs font-semibold tracking-widest uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-sunset animate-pulse" />
              <span>EXPLORE INCREDIBLE INDIA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-editorial font-medium text-charcoal leading-[1.06] tracking-tight">
              Turn “we should go” <br className="hidden sm:inline" />
              <span className="italic font-normal text-sunset">into an India trip.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-charcoal-muted font-normal max-w-xl leading-relaxed">
              Plan royal palaces, Himalayan trails, sacred ghats, and coastal sunsets — all in one beautiful workspace.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onPlanClick}
                className="group px-7 py-4 rounded-full bg-charcoal text-canvas text-base font-semibold hover:bg-sunset transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 active:scale-95"
              >
                <span>Plan a trip</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="group px-7 py-4 rounded-full bg-canvas-pure text-charcoal border border-charcoal/15 text-base font-medium hover:bg-canvas-muted hover:border-charcoal/30 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-2xs"
              >
                <span>Explore inspiration</span>
                <Compass className="w-4 h-4 text-charcoal-muted group-hover:rotate-45 transition-transform duration-300" />
              </button>
            </div>

            {/* Subtle Editorial Product Note */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-charcoal-faint">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sage" />
                <span>Zero bloated spreadsheets</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sage" />
                <span>Curated photo itineraries</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sage" />
                <span>INR ₹ budget engine</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Interactive India Itinerary Card */}
          <div className="lg:col-span-6 relative">
            
            {/* Outer Cinematic Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-floating border border-charcoal/10 bg-charcoal group">
              
              {/* Cinematic Destination Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=85"
                  alt="Jaipur Amber Fort & Hawa Mahal, Rajasthan"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ transform: `scale(${imageScale})` }}
                />
                
                {/* Gradient overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent" />

                {/* Top Location Tag */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 bg-charcoal/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-medium tracking-wide">
                  <MapPin className="w-3.5 h-3.5 text-sunset" />
                  <span>Jaipur, Rajasthan • India</span>
                </div>
              </div>

              {/* Overlaid Floating Itinerary Card */}
              <div
                className="relative -mt-24 sm:-mt-32 m-4 sm:m-6 p-5 sm:p-6 glass-card-dark rounded-2xl text-white shadow-2xl transition-transform duration-500 ease-out"
                style={{ transform: `translateY(${-cardTranslateY}px)` }}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <h3 className="font-editorial text-2xl font-semibold tracking-wide text-white">
                      ROYAL RAJASTHAN
                    </h3>
                    <p className="text-xs text-white/70 font-mono tracking-wider uppercase mt-0.5">
                      4 DAYS · 10 CURATED STOPS
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-sage/30 text-sage-light text-[11px] font-medium border border-sage/40">
                      Active Plan
                    </span>
                  </div>
                </div>

                {/* Day-by-Day Stops Preview with real Indian attractions */}
                <div className="space-y-2.5 mb-5 text-sm">
                  {/* Day 01 */}
                  <div className="group/stop flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-sunset font-bold w-9 px-1 py-0.5 bg-sunset/10 rounded text-center">
                        DAY 1
                      </span>
                      <div>
                        <div className="font-medium text-white text-xs sm:text-sm">Hawa Mahal & Old City Bazaars</div>
                        <div className="text-[11px] text-white/60">Morning Light · Chai · Lac Bangles</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/30 group-hover/stop:text-white transition-colors" />
                  </div>

                  {/* Day 02 */}
                  <div className="group/stop flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-sunset font-bold w-9 px-1 py-0.5 bg-sunset/10 rounded text-center">
                        DAY 2
                      </span>
                      <div>
                        <div className="font-medium text-white text-xs sm:text-sm">Amber Fort & Sheesh Mahal</div>
                        <div className="text-[11px] text-white/60">Mirror Palace · Maota Lake · Fort Walk</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/30 group-hover/stop:text-white transition-colors" />
                  </div>

                  {/* Day 03 */}
                  <div className="group/stop flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-sunset font-bold w-9 px-1 py-0.5 bg-sunset/10 rounded text-center">
                        DAY 3
                      </span>
                      <div>
                        <div className="font-medium text-white text-xs sm:text-sm">Nahargarh Ridge Sunset & Feast</div>
                        <div className="text-[11px] text-white/60">Aravalli Hills · Dal Baati Churma</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/30 group-hover/stop:text-white transition-colors" />
                  </div>
                </div>

                {/* Subtle Progress Indicator */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-sunset" />
                    <span className="font-medium">03 / 04 days planned</span>
                  </div>
                  
                  {/* Mini Progress Bar */}
                  <div className="w-28 h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-[75%] h-full bg-sunset rounded-full transition-all duration-1000" />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
