import React, { useState, useMemo } from 'react';
import { 
  X, Search, MapPin, Calendar, Users, DollarSign, Sparkles, 
  ArrowRight, Check, Compass, Sliders, ChevronRight
} from 'lucide-react';
import { INDIA_DESTINATIONS } from '../data/indiaTravelData';

export default function StartPlanningModal({ 
  isOpen, 
  onClose, 
  onGenerateTrip,
  initialDestinationId = 'jaipur'
}) {
  const [selectedDestId, setSelectedDestId] = useState(initialDestinationId || 'jaipur');
  const [searchQuery, setSearchQuery] = useState('');
  const [durationDays, setDurationDays] = useState(4);
  const [startDate, setStartDate] = useState('2026-10-15');
  const [travelers, setTravelers] = useState(2);
  const [travelerType, setTravelerType] = useState('Couple');
  const [selectedPreferences, setSelectedPreferences] = useState(['Heritage', 'Photography', 'Food']);
  const [customBudget, setCustomBudget] = useState(45000);
  const [step, setStep] = useState(1); // 1: Destination & Dates, 2: Preferences & Budget

  const PREFERENCES_LIST = [
    { id: 'Mountains', label: 'Mountains', icon: '🏔️' },
    { id: 'Beaches', label: 'Beaches', icon: '🏖️' },
    { id: 'Heritage', label: 'Heritage & Forts', icon: '🏰' },
    { id: 'Food', label: 'Food & Culinary', icon: '🍛' },
    { id: 'Spiritual', label: 'Spiritual & Ghats', icon: '🪔' },
    { id: 'Adventure', label: 'Adventure & Rafting', icon: '🚣' },
    { id: 'Nature', label: 'Nature & Lakes', icon: '🌿' },
    { id: 'Shopping', label: 'Shopping & Crafts', icon: '🛍️' },
    { id: 'Wildlife', label: 'Wildlife Safaris', icon: '🐅' },
    { id: 'Relaxation', label: 'Relaxation & Spa', icon: '🧘' },
    { id: 'Photography', label: 'Photography', icon: '📸' },
  ];

  const filteredDestinations = useMemo(() => {
    if (!searchQuery.trim()) return INDIA_DESTINATIONS;
    const q = searchQuery.toLowerCase();
    return INDIA_DESTINATIONS.filter(
      d => d.name.toLowerCase().includes(q) || 
           d.state.toLowerCase().includes(q) ||
           d.category.toLowerCase().includes(q) ||
           d.tags.some(t => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const selectedDestination = useMemo(() => {
    return INDIA_DESTINATIONS.find(d => d.id === selectedDestId) || INDIA_DESTINATIONS[0];
  }, [selectedDestId]);

  if (!isOpen) return null;

  const togglePreference = (prefId) => {
    if (selectedPreferences.includes(prefId)) {
      if (selectedPreferences.length > 1) {
        setSelectedPreferences(selectedPreferences.filter(p => p !== prefId));
      }
    } else {
      setSelectedPreferences([...selectedPreferences, prefId]);
    }
  };

  const handleGenerate = () => {
    const formattedDates = `${new Date(startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} – ${new Date(new Date(startDate).setDate(new Date(startDate).getDate() + durationDays)).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
    
    const tripConfig = {
      destination: selectedDestination,
      durationDays,
      dates: formattedDates,
      travelers,
      travelerType,
      preferences: selectedPreferences,
      totalBudget: Number(customBudget),
    };

    onGenerateTrip(tripConfig);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-canvas-pure rounded-3xl border border-charcoal/15 shadow-floating overflow-hidden p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal-muted hover:bg-canvas-muted transition-colors focus:outline-none z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-left space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sunset/10 text-sunset text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>INDIA TRIP PLANNER</span>
          </div>
          <h3 className="font-editorial text-3xl sm:text-4xl font-semibold text-charcoal">
            Design your ideal India journey
          </h3>
          <p className="text-xs text-charcoal-muted">
            Select a destination, duration, pace, and budget. Triply dynamically generates your day-by-day plan.
          </p>
        </div>

        {/* Steps Progress Tabs */}
        <div className="flex border-b border-charcoal/10 pb-3 gap-6 text-xs font-medium">
          <button
            onClick={() => setStep(1)}
            className={`pb-2 -mb-3 transition-colors flex items-center gap-1.5 ${
              step === 1 ? 'border-b-2 border-sunset text-sunset font-semibold' : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-sunset/10 text-sunset text-[11px] font-mono flex items-center justify-center font-bold">1</span>
            <span>Destination & Dates</span>
          </button>
          <button
            onClick={() => setStep(2)}
            className={`pb-2 -mb-3 transition-colors flex items-center gap-1.5 ${
              step === 2 ? 'border-b-2 border-sunset text-sunset font-semibold' : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-sunset/10 text-sunset text-[11px] font-mono flex items-center justify-center font-bold">2</span>
            <span>Travelers & Budget</span>
          </button>
        </div>

        {/* STEP 1: DESTINATION & DATES */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Search Input */}
            <div className="space-y-2 text-left">
              <label className="text-xs font-medium text-charcoal block">
                1. Search or Select Indian Destination
              </label>
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-charcoal-muted absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by city, state or theme (e.g. Jaipur, Manali, Kerala, Goa, Varanasi...)"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-charcoal text-sm placeholder-charcoal-muted/60 focus:outline-none focus:ring-2 focus:ring-sunset/40"
                />
              </div>
            </div>

            {/* Destination Visual Selector Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-h-56 overflow-y-auto p-1">
              {filteredDestinations.map((dest) => {
                const isSelected = selectedDestId === dest.id;
                return (
                  <div
                    key={dest.id}
                    onClick={() => {
                      setSelectedDestId(dest.id);
                      if (dest.budgetEstimate) {
                        setCustomBudget(dest.budgetEstimate * 1.5);
                      }
                    }}
                    className={`group relative rounded-2xl overflow-hidden cursor-pointer border-2 transition-all aspect-[4/3] flex flex-col justify-end p-3 ${
                      isSelected
                        ? 'border-sunset ring-2 ring-sunset/30 shadow-md scale-102'
                        : 'border-transparent hover:border-charcoal/30'
                    }`}
                  >
                    <img
                      src={dest.thumbnail}
                      alt={dest.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                    
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-sunset text-canvas flex items-center justify-center shadow-sm">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    )}

                    <div className="relative z-10 text-left text-white">
                      <div className="text-[10px] font-mono text-sunset font-bold uppercase">{dest.state}</div>
                      <div className="font-editorial text-lg font-semibold leading-tight">{dest.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dates & Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-charcoal flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sunset" />
                  <span>Trip Start Date</span>
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-charcoal text-xs focus:outline-none focus:ring-2 focus:ring-sunset/40"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-charcoal block">
                  Trip Duration (Days)
                </label>
                <div className="flex gap-2">
                  {[3, 4, 5, 7, 10].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDurationDays(d)}
                      className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
                        durationDays === d
                          ? 'bg-charcoal text-canvas shadow-2xs'
                          : 'bg-canvas-muted text-charcoal-muted hover:text-charcoal'
                      }`}
                    >
                      {d} Days
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-full bg-charcoal text-canvas hover:bg-sunset transition-colors text-xs font-semibold flex items-center gap-2 shadow-sm"
              >
                <span>Continue to Preferences & Budget</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: TRAVELERS, PREFERENCES & BUDGET */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-200 text-left">
            {/* Travelers Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-charcoal flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-sage" />
                  <span>Number of Travelers</span>
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setTravelers(num)}
                      className={`w-10 h-10 rounded-xl text-xs font-semibold transition-all ${
                        travelers === num
                          ? 'bg-charcoal text-canvas'
                          : 'bg-canvas-muted text-charcoal-muted hover:text-charcoal'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-charcoal block">
                  Trip Dynamic
                </label>
                <select
                  value={travelerType}
                  onChange={(e) => setTravelerType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-charcoal text-xs focus:outline-none focus:ring-2 focus:ring-sunset/40"
                >
                  <option>Solo Explorer</option>
                  <option>Couple Getaway</option>
                  <option>Family with Kids</option>
                  <option>Group of Friends</option>
                </select>
              </div>
            </div>

            {/* Travel Preferences */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-charcoal block">
                Travel Style & Interests (Select 1 or more)
              </label>
              <div className="flex flex-wrap gap-2">
                {PREFERENCES_LIST.map((pref) => {
                  const isSelected = selectedPreferences.includes(pref.id);
                  return (
                    <button
                      key={pref.id}
                      type="button"
                      onClick={() => togglePreference(pref.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 border ${
                        isSelected
                          ? 'bg-sunset text-white border-sunset shadow-2xs'
                          : 'bg-canvas-muted/60 text-charcoal-muted border-charcoal/10 hover:border-charcoal/20'
                      }`}
                    >
                      <span>{pref.icon}</span>
                      <span>{pref.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Total Budget Setting */}
            <div className="p-4 rounded-2xl bg-canvas-muted/40 border border-charcoal/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-medium text-charcoal">
                  <DollarSign className="w-4 h-4 text-amber-600" />
                  <span>Set Your Total Target Budget (INR ₹)</span>
                </div>
                <div className="font-mono text-base font-bold text-sunset">
                  ₹{Number(customBudget).toLocaleString('en-IN')}
                </div>
              </div>

              {/* Slider & Direct Input */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="10000"
                  max="200000"
                  step="2500"
                  value={customBudget}
                  onChange={(e) => setCustomBudget(Number(e.target.value))}
                  className="w-full accent-sunset h-2 bg-charcoal/10 rounded-lg cursor-pointer"
                />
                
                <div className="flex gap-2 pt-1">
                  {[20000, 35000, 50000, 75000, 120000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setCustomBudget(preset)}
                      className={`flex-1 py-1 rounded-lg text-[11px] font-mono border transition-all ${
                        customBudget === preset
                          ? 'bg-charcoal text-canvas border-charcoal font-bold'
                          : 'bg-canvas-pure text-charcoal-muted border-charcoal/10 hover:border-charcoal/20'
                      }`}
                    >
                      ₹{(preset / 1000)}k
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-5 py-2.5 rounded-full border border-charcoal/15 text-charcoal text-xs font-semibold hover:bg-canvas-muted"
              >
                Back
              </button>

              <button
                type="button"
                onClick={handleGenerate}
                className="px-8 py-3.5 rounded-full bg-charcoal text-canvas hover:bg-sunset transition-all text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-sunset" />
                <span>Build {selectedDestination.name} Itinerary</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
