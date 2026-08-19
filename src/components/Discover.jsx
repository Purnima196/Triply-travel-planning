import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Compass, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { INDIA_DESTINATIONS, INSPIRATION_CATEGORIES } from '../data/indiaTravelData';

export default function Discover({ onSelectDestination, onStartPlanningWithCategory }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedInspiration, setSelectedInspiration] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Inspirations' },
    { id: 'royal-rajasthan', label: 'Royal Rajasthan' },
    { id: 'himalayan-escapes', label: 'Himalayan Escapes' },
    { id: 'beach-holidays', label: 'Beach Holidays' },
    { id: 'spiritual-journeys', label: 'Spiritual Journeys' },
    { id: 'south-india', label: 'South India' },
    { id: 'northeast-india', label: 'Northeast India' },
    { id: 'wildlife-adventures', label: 'Wildlife' },
    { id: 'weekend-getaways', label: 'Weekend Trips' }
  ];

  const filteredCategories = activeFilter === 'all'
    ? INSPIRATION_CATEGORIES
    : INSPIRATION_CATEGORIES.filter(c => c.id === activeFilter);

  // Quick select destination
  const handleCategoryClick = (category) => {
    // Find matching destination from our dataset
    const matchedDest = INDIA_DESTINATIONS.find(d => category.destinations.includes(d.id)) || INDIA_DESTINATIONS[0];
    onSelectDestination(matchedDest);
  };

  return (
    <section id="discover" className="py-20 md:py-32 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sunset/10 text-sunset text-xs font-semibold tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>EXPLORE INSPIRATION • INDIA</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-medium text-charcoal leading-[1.08]">
              Discover journeys across India. <br />
              <span className="italic text-sunset">From royal palaces to misty heights.</span>
            </h2>
          </div>
          
          <p className="text-base text-charcoal-muted max-w-md text-left">
            Curated Indian travel blueprints designed with authentic local experiences, seasonal timings, and frictionless routes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-medium no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all border ${
                activeFilter === tab.id
                  ? 'bg-charcoal text-canvas border-charcoal shadow-2xs font-semibold'
                  : 'bg-canvas-pure text-charcoal-muted border-charcoal/10 hover:border-charcoal/25 hover:text-charcoal'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Visual Inspiration Cards Grid with High Quality Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat)}
              className="group relative rounded-3xl overflow-hidden bg-charcoal cursor-pointer shadow-card hover:shadow-floating transition-all duration-500 flex flex-col justify-between aspect-[3/4] border border-charcoal/10"
            >
              {/* Background Image with Hover Scale */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/15 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Top Badge */}
              <div className="relative z-10 p-5 flex justify-between items-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium tracking-wide">
                  <MapPin className="w-3 h-3 text-sunset" />
                  <span>India</span>
                </span>

                <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-sunset group-hover:border-sunset transition-all duration-300 shadow-sm">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Card Bottom Content */}
              <div className="relative z-10 p-5 space-y-2 text-left text-white">
                <div>
                  <div className="text-[11px] font-mono text-sunset uppercase tracking-wider font-bold">
                    {cat.subtitle}
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-white mt-0.5">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-white/80 font-light leading-relaxed line-clamp-2">
                  {cat.description}
                </p>

                {/* View Blueprint link */}
                <div className="pt-2 flex items-center gap-1 text-xs text-sunset font-medium group-hover:underline">
                  <span>View blueprint destinations</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Extra Bottom Featured Destinations Grid */}
        <div className="mt-16 pt-12 border-t border-charcoal/10 text-left">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-editorial text-3xl font-semibold text-charcoal">
                Popular Indian Destination Blueprints
              </h3>
              <p className="text-xs text-charcoal-muted">
                Click any destination card to open the interactive itinerary & start building.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {INDIA_DESTINATIONS.slice(0, 6).map((dest) => (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-charcoal/10 aspect-[4/5] flex flex-col justify-end p-3 shadow-2xs hover:shadow-md transition-all"
              >
                <img
                  src={dest.thumbnail}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                
                <div className="relative z-10 text-white space-y-0.5">
                  <span className="text-[9px] font-mono text-sunset font-bold uppercase">{dest.state}</span>
                  <h4 className="font-editorial text-lg font-semibold leading-tight">{dest.name}</h4>
                  <div className="text-[10px] text-white/70">{dest.idealDays}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
