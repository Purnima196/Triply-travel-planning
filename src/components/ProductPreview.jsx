import React, { useState, useMemo } from 'react';
import { 
  Calendar, MapPin, DollarSign, Bookmark, Compass, CheckCircle, 
  Clock, Plus, Filter, Share2, MoreHorizontal, Sparkles, ChevronDown, 
  ChevronUp, Layers, Heart, Trash2, ArrowUp, ArrowDown, Edit3, Check, 
  AlertTriangle, BedDouble, Utensils, Ticket, Train, ShoppingBag, 
  CreditCard, ExternalLink, RefreshCw, X
} from 'lucide-react';

export default function ProductPreview({ 
  trip, 
  savedPlaces, 
  onToggleSavePlace, 
  onRemoveSavedPlace, 
  onAddSavedPlace,
  onOpenShare,
  onOpenPlanner,
  onOpenAddStop,
  itineraryDays,
  onUpdateItineraryDays,
  showToast
}) {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [expandedDays, setExpandedDays] = useState({ 1: true, 2: false, 3: false });
  const [placeFilter, setPlaceFilter] = useState('all');

  // Budget state
  const [totalBudgetInput, setTotalBudgetInput] = useState(trip?.totalBudget || 45000);
  const [isEditingTotalBudget, setIsEditingTotalBudget] = useState(false);
  const [currency, setCurrency] = useState('INR'); // INR, USD, EUR, GBP

  // Expense categories
  const [budgetItems, setBudgetItems] = useState({
    accommodation: [
      { id: 'b-acc-1', title: 'Heritage Haveli Stay (3 nights)', amount: 16500 },
      { id: 'b-acc-2', title: 'Boutique Courtyard Resort (1 night)', amount: 7200 }
    ],
    food: [
      { id: 'b-fd-1', title: 'Traditional Rajasthani Thali & Sweets for 2', amount: 1900 },
      { id: 'b-fd-2', title: 'Wind View Cafe & Old City Chai Stalls', amount: 1400 },
      { id: 'b-fd-3', title: 'Fort-view Rooftop Dinners', amount: 2500 }
    ],
    activities: [
      { id: 'b-act-1', title: 'Amber Fort + Sheesh Mahal passes for 2', amount: 1100 },
      { id: 'b-act-2', title: 'City Palace + Jantar Mantar tickets', amount: 1800 },
      { id: 'b-act-3', title: 'Nahargarh Ridge Sunset & Albert Hall entry', amount: 1000 }
    ],
    transport: [
      { id: 'b-tr-1', title: 'Express Train / Flight Tickets (Return)', amount: 4200 },
      { id: 'b-tr-2', title: 'Private AC Cab for Amer Fort & Sightseeing', amount: 3500 },
      { id: 'b-tr-3', title: 'Local E-Rickshaws in Old Walled City', amount: 900 }
    ],
    shopping: [
      { id: 'b-shp-1', title: 'Johari Bazaar Lac Bangles & Silver crafts', amount: 2000 },
      { id: 'b-shp-2', title: 'Hand-block print cottons & Jaipuri Razai', amount: 2000 }
    ],
    other: [
      { id: 'b-oth-1', title: 'Local Heritage Guide Fees & Tips', amount: 1500 }
    ]
  });

  // New budget item form state
  const [newExpenseCategory, setNewExpenseCategory] = useState('food');
  const [newExpenseTitle, setNewExpenseTitle] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);

  // Accommodations state
  const [accommodations, setAccommodations] = useState([
    {
      id: 'acc-1',
      hotelName: 'Alsisar Haveli Heritage Stay',
      location: 'Sansar Chandra Road, Jaipur',
      nights: 3,
      pricePerNight: 5500,
      totalCost: 16500,
      paymentAmount: 16500,
      paymentStatus: 'Paid in Full',
      notes: 'Courtyard view room with breakfast included. Traditional royal hospitality.',
      checkIn: 'Oct 15, 2:00 PM',
      checkOut: 'Oct 18, 11:00 AM'
    },
    {
      id: 'acc-2',
      hotelName: 'Samode Haveli Boutique Resort',
      location: 'Gangapole, Old City, Jaipur',
      nights: 1,
      pricePerNight: 7200,
      totalCost: 7200,
      paymentAmount: 2000,
      paymentStatus: 'Advance Paid',
      notes: 'Historic suite booking with outdoor pool and candlelit dinner.',
      checkIn: 'Oct 18, 2:00 PM',
      checkOut: 'Oct 19, 12:00 PM'
    }
  ]);

  const [editingAccId, setEditingAccId] = useState(null);
  const [accForm, setAccForm] = useState({
    hotelName: '',
    location: '',
    nights: 2,
    pricePerNight: 4500,
    paymentAmount: 0,
    paymentStatus: 'Pending',
    notes: '',
    checkIn: 'Oct 15, 2:00 PM',
    checkOut: 'Oct 17, 11:00 AM'
  });
  const [showAddAccModal, setShowAddAccModal] = useState(false);

  // Currency multipliers
  const currencyRates = {
    INR: { symbol: '₹', multiplier: 1 },
    USD: { symbol: '$', multiplier: 0.012 },
    EUR: { symbol: '€', multiplier: 0.011 },
    GBP: { symbol: '£', multiplier: 0.0095 }
  };

  const formatCost = (inrVal) => {
    const rate = currencyRates[currency] || currencyRates.INR;
    const converted = Math.round(inrVal * rate.multiplier);
    if (currency === 'INR') {
      return `₹${inrVal.toLocaleString('en-IN')}`;
    }
    return `${rate.symbol}${converted.toLocaleString()}`;
  };

  // Calculations for budget
  const categoryTotals = useMemo(() => {
    const totals = {};
    let grandTotal = 0;
    Object.keys(budgetItems).forEach((cat) => {
      const catSum = budgetItems[cat].reduce((acc, curr) => acc + Number(curr.amount || 0), 0);
      totals[cat] = catSum;
      grandTotal += catSum;
    });
    return { totals, grandTotal };
  }, [budgetItems]);

  const remainingBudget = totalBudgetInput - categoryTotals.grandTotal;
  const isOverBudget = remainingBudget < 0;
  const percentSpent = Math.min(Math.round((categoryTotals.grandTotal / (totalBudgetInput || 1)) * 100), 100);

  // Toggle Day expansion
  const toggleDay = (dayNum) => {
    setExpandedDays(prev => ({ ...prev, [dayNum]: !prev[dayNum] }));
  };

  // Remove stop from day
  const handleRemoveStop = (dayNumber, stopIndex) => {
    const updatedDays = itineraryDays.map((day) => {
      if (day.dayNumber === dayNumber) {
        const newStops = [...day.stops];
        newStops.splice(stopIndex, 1);
        return { ...day, stops: newStops };
      }
      return day;
    });
    onUpdateItineraryDays(updatedDays);
    showToast('Stop removed from itinerary', 'info');
  };

  // Reorder stop
  const handleMoveStop = (dayNumber, stopIndex, direction) => {
    const updatedDays = itineraryDays.map((day) => {
      if (day.dayNumber === dayNumber) {
        const newStops = [...day.stops];
        const targetIdx = direction === 'up' ? stopIndex - 1 : stopIndex + 1;
        if (targetIdx >= 0 && targetIdx < newStops.length) {
          const temp = newStops[stopIndex];
          newStops[stopIndex] = newStops[targetIdx];
          newStops[targetIdx] = temp;
        }
        return { ...day, stops: newStops };
      }
      return day;
    });
    onUpdateItineraryDays(updatedDays);
    showToast('Stop reordered', 'success');
  };

  // Add new expense
  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!newExpenseTitle.trim() || !newExpenseAmount) return;

    const newItem = {
      id: `b-exp-${Date.now()}`,
      title: newExpenseTitle,
      amount: Number(newExpenseAmount)
    };

    setBudgetItems(prev => ({
      ...prev,
      [newExpenseCategory]: [...(prev[newExpenseCategory] || []), newItem]
    }));

    setNewExpenseTitle('');
    setNewExpenseAmount('');
    setShowAddExpenseModal(false);
    showToast(`Added to ${newExpenseCategory} expenses`, 'success');
  };

  // Delete expense item
  const handleDeleteExpense = (category, itemId) => {
    setBudgetItems(prev => ({
      ...prev,
      [category]: prev[category].filter(item => item.id !== itemId)
    }));
    showToast('Expense item deleted', 'info');
  };

  // Accommodation CRUD
  const handleSaveAccommodation = (e) => {
    e.preventDefault();
    const calculatedTotal = Number(accForm.nights) * Number(accForm.pricePerNight);
    
    if (editingAccId) {
      setAccommodations(prev => prev.map(a => a.id === editingAccId ? {
        ...a,
        ...accForm,
        totalCost: calculatedTotal
      } : a));
      showToast('Accommodation updated', 'success');
    } else {
      const newAcc = {
        id: `acc-${Date.now()}`,
        ...accForm,
        totalCost: calculatedTotal
      };
      setAccommodations(prev => [...prev, newAcc]);

      // Also add/update accommodation line in budget
      setBudgetItems(prev => ({
        ...prev,
        accommodation: [
          ...prev.accommodation,
          { id: `b-acc-${Date.now()}`, title: `${accForm.hotelName} (${accForm.nights} nights)`, amount: calculatedTotal }
        ]
      }));
      showToast('Accommodation added & synced to budget', 'success');
    }

    setEditingAccId(null);
    setShowAddAccModal(false);
  };

  const handleDeleteAccommodation = (accId) => {
    setAccommodations(prev => prev.filter(a => a.id !== accId));
    showToast('Accommodation removed', 'info');
  };

  // Filtered saved places
  const filteredSavedPlaces = placeFilter === 'all'
    ? savedPlaces
    : savedPlaces.filter(p => p.category.toLowerCase() === placeFilter.toLowerCase());

  return (
    <section id="product-preview" className="py-20 md:py-32 bg-canvas-muted/60 relative border-y border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/10 text-sage-dark text-xs font-semibold tracking-widest uppercase">
            <span>THE TRIPLY INDIA WORKSPACE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-medium text-charcoal">
            Your whole India trip, in one place.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl mx-auto">
            Explore photo-rich day itineraries, bookmark places across India, and control real INR ₹ budgets without spreadsheet chaos.
          </p>
        </div>

        {/* Product Workspace Window Frame */}
        <div className="bg-canvas-pure rounded-3xl border border-charcoal/10 shadow-editorial overflow-hidden">
          
          {/* Top Window Bar */}
          <div className="bg-canvas-subtle/80 px-4 sm:px-6 py-4 border-b border-charcoal/10 flex flex-wrap items-center justify-between gap-4">
            
            {/* Window Controls & Active Trip Header */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              
              <div className="h-4 w-px bg-charcoal/15 hidden sm:block" />

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl overflow-hidden shadow-sm shrink-0 border border-charcoal/10">
                  <img
                    src={trip?.heroImage || 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=150&q=80'}
                    alt={trip?.destinationName || 'India'}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-charcoal text-base sm:text-lg leading-none">
                      {trip?.destinationName || 'Jaipur, Rajasthan'}
                    </h3>
                    <span className="text-[10px] bg-sunset/10 text-sunset font-mono font-bold px-2 py-0.5 rounded-full">
                      India
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-muted mt-1 font-medium flex items-center gap-2">
                    <span>{trip?.durationDays || 4} Days</span>
                    <span>•</span>
                    <span>{trip?.dates || 'Oct 15 – Oct 19'}</span>
                    <span>•</span>
                    <span>{trip?.travelers || 2} Travelers ({trip?.travelerType || 'Couple'})</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics & Actions */}
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <div className="hidden lg:flex items-center gap-4 px-3.5 py-1.5 rounded-full bg-canvas-muted border border-charcoal/5">
                <div className="flex items-center gap-1.5 text-charcoal-muted">
                  <DollarSign className="w-3.5 h-3.5 text-sage" />
                  <span>Est. Budget: <strong className="text-charcoal font-semibold">{formatCost(categoryTotals.grandTotal)}</strong></span>
                </div>
                <span className="text-charcoal/20">|</span>
                <div className="flex items-center gap-1.5 text-charcoal-muted">
                  <Bookmark className="w-3.5 h-3.5 text-sunset" />
                  <span>Saved: <strong className="text-charcoal font-semibold">{savedPlaces.length} places</strong></span>
                </div>
                <span className="text-charcoal/20">|</span>
                <div className="flex items-center gap-1.5 text-charcoal-muted">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Budget: <strong className={isOverBudget ? 'text-rose-600 font-semibold' : 'text-emerald-700 font-semibold'}>{percentSpent}%</strong></span>
                </div>
              </div>

              <button
                onClick={onOpenPlanner}
                className="px-3 py-1.5 rounded-lg border border-charcoal/15 text-charcoal hover:bg-canvas-muted text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Change destination or trip parameters"
              >
                <RefreshCw className="w-3.5 h-3.5 text-sunset" />
                <span>Switch Trip</span>
              </button>

              <button
                onClick={onOpenShare}
                className="px-3.5 py-1.5 rounded-lg bg-charcoal text-canvas text-xs font-medium hover:bg-sunset transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share trip</span>
              </button>
            </div>

          </div>

          {/* Workspace Body: Sidebar + Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[560px]">
            
            {/* Workspace Left Sidebar Tabs */}
            <div className="md:col-span-3 bg-canvas-muted/40 p-4 border-r border-b md:border-b-0 border-charcoal/10 flex md:flex-col justify-between gap-2 overflow-x-auto">
              <nav className="flex md:flex-col gap-1.5 w-full">
                
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`w-full text-left px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                    activeTab === 'itinerary'
                      ? 'bg-canvas-pure text-charcoal shadow-2xs border border-charcoal/10 font-bold'
                      : 'text-charcoal-muted hover:bg-canvas-muted hover:text-charcoal'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-sunset" />
                    <span>Itinerary</span>
                  </div>
                  <span className="text-[10px] bg-sunset/10 text-sunset px-2 py-0.5 rounded-full font-mono font-bold">
                    {itineraryDays.length} Days
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('places')}
                  className={`w-full text-left px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                    activeTab === 'places'
                      ? 'bg-canvas-pure text-charcoal shadow-2xs border border-charcoal/10 font-bold'
                      : 'text-charcoal-muted hover:bg-canvas-muted hover:text-charcoal'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Bookmark className="w-4 h-4 text-sage" />
                    <span>Places Saved</span>
                  </div>
                  <span className="text-[10px] bg-sage/10 text-sage-dark px-2 py-0.5 rounded-full font-mono font-bold">
                    {savedPlaces.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('budget')}
                  className={`w-full text-left px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                    activeTab === 'budget'
                      ? 'bg-canvas-pure text-charcoal shadow-2xs border border-charcoal/10 font-bold'
                      : 'text-charcoal-muted hover:bg-canvas-muted hover:text-charcoal'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <DollarSign className="w-4 h-4 text-amber-600" />
                    <span>Budget Plan</span>
                  </div>
                  <span className="text-[10px] bg-amber-500/10 text-amber-700 px-2 py-0.5 rounded-full font-mono font-bold">
                    {formatCost(categoryTotals.grandTotal)}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full text-left px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                    activeTab === 'overview'
                      ? 'bg-canvas-pure text-charcoal shadow-2xs border border-charcoal/10 font-bold'
                      : 'text-charcoal-muted hover:bg-canvas-muted hover:text-charcoal'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-slateTone" />
                    <span>Overview</span>
                  </div>
                  <span className="text-[10px] text-charcoal-faint">India</span>
                </button>
              </nav>

              {/* Sidebar Quick Tip Card */}
              <div className="hidden md:block p-3.5 rounded-2xl bg-canvas-pure border border-charcoal/10 text-xs space-y-2 text-left">
                <div className="font-semibold text-charcoal flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-sunset" />
                  <span>Triply India Insights</span>
                </div>
                <p className="text-charcoal-muted text-[11px] leading-relaxed">
                  Paced for {trip?.destinationName?.split(',')[0] || 'India'}. Max 3–4 landmark stops per day to account for relaxed sensory exploration.
                </p>
              </div>
            </div>

            {/* Workspace Main Display Content Panel */}
            <div className="md:col-span-9 p-6 sm:p-8 bg-canvas-pure text-left">
              
              {/* TAB 1: ITINERARY VIEW */}
              {activeTab === 'itinerary' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="font-editorial text-2xl sm:text-3xl text-charcoal font-semibold">
                        Day-by-Day Schedule: {trip?.destinationName || 'Jaipur'}
                      </h4>
                      <p className="text-xs text-charcoal-muted">
                        Interactive stops with photos, entry fees, recommended visiting times & activities.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenAddStop(1)}
                        className="px-3.5 py-2 rounded-full bg-sunset/10 text-sunset hover:bg-sunset hover:text-canvas transition-colors text-xs font-semibold flex items-center gap-1.5"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Custom Stop</span>
                      </button>
                    </div>
                  </div>

                  {/* Day Blocks List */}
                  <div className="space-y-4">
                    {itineraryDays.map((day) => {
                      const isExpanded = expandedDays[day.dayNumber] ?? true;
                      return (
                        <div
                          key={day.dayNumber}
                          className="border border-charcoal/10 rounded-2xl overflow-hidden bg-canvas-pure shadow-2xs transition-all duration-200"
                        >
                          {/* Day Header Button */}
                          <div
                            onClick={() => toggleDay(day.dayNumber)}
                            className="w-full p-4 bg-canvas-muted/40 hover:bg-canvas-muted/70 flex items-center justify-between cursor-pointer transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-8 h-8 rounded-xl bg-charcoal text-canvas text-xs font-bold font-mono flex items-center justify-center shadow-2xs">
                                0{day.dayNumber}
                              </span>
                              <div>
                                <h5 className="font-semibold text-charcoal text-sm sm:text-base">
                                  {day.title}
                                </h5>
                                <span className="text-xs text-charcoal-muted">
                                  {day.dateLabel} • {day.stops?.length || 0} Stops Planned
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onOpenAddStop(day.dayNumber);
                                }}
                                className="text-xs text-sunset hover:underline font-medium hidden sm:inline-flex items-center gap-1"
                              >
                                <Plus className="w-3 h-3" />
                                <span>Add stop</span>
                              </button>
                              {isExpanded ? (
                                <ChevronUp className="w-5 h-5 text-charcoal-muted" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-charcoal-muted" />
                              )}
                            </div>
                          </div>

                          {/* Day Stops Content */}
                          {isExpanded && (
                            <div className="p-5 space-y-4 bg-canvas-pure border-t border-charcoal/10">
                              {day.stops && day.stops.length > 0 ? (
                                <div className="space-y-3">
                                  {day.stops.map((stop, stopIdx) => {
                                    const isSaved = savedPlaces.some(p => p.name === stop.title || p.id === stop.id);
                                    return (
                                      <div
                                        key={stopIdx}
                                        className="group/item p-4 rounded-2xl bg-canvas-muted/30 border border-charcoal/10 hover:border-sunset/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                                      >
                                        <div className="flex items-start sm:items-center gap-4 w-full sm:w-auto">
                                          {/* Attraction Thumbnail Photo */}
                                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 bg-charcoal shadow-sm border border-charcoal/10 relative">
                                            <img
                                              src={stop.image || 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=300&q=80'}
                                              alt={stop.title}
                                              className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                                            />
                                          </div>

                                          {/* Stop Info */}
                                          <div className="space-y-1">
                                            <div className="flex flex-wrap items-center gap-2">
                                              <span className="text-[11px] font-mono font-bold text-sunset bg-sunset/10 px-2 py-0.5 rounded">
                                                {stop.time}
                                              </span>
                                              <span className="text-[11px] font-mono text-charcoal-faint">
                                                {stop.duration || '2.0 hrs'}
                                              </span>
                                              {stop.cost && (
                                                <span className="text-[11px] font-mono font-semibold text-sage-dark bg-sage/10 px-2 py-0.5 rounded">
                                                  {stop.cost}
                                                </span>
                                              )}
                                            </div>

                                            <h6 className="font-semibold text-charcoal text-sm sm:text-base group-hover/item:text-sunset transition-colors">
                                              {stop.title}
                                            </h6>
                                            <p className="text-xs text-charcoal-muted flex items-center gap-1 font-medium">
                                              <MapPin className="w-3 h-3 text-sunset shrink-0" />
                                              <span>{stop.location}</span>
                                            </p>
                                            <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-2">
                                              {stop.note}
                                            </p>
                                          </div>
                                        </div>

                                        {/* Stop Actions */}
                                        <div className="flex items-center gap-1 self-end sm:self-center shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-charcoal/5 w-full sm:w-auto justify-end">
                                          {/* Reorder Buttons */}
                                          <button
                                            disabled={stopIdx === 0}
                                            onClick={() => handleMoveStop(day.dayNumber, stopIdx, 'up')}
                                            className="p-1.5 rounded-lg text-charcoal-muted hover:bg-canvas-muted hover:text-charcoal disabled:opacity-30 transition-colors"
                                            title="Move stop up"
                                          >
                                            <ArrowUp className="w-3.5 h-3.5" />
                                          </button>
                                          <button
                                            disabled={stopIdx === day.stops.length - 1}
                                            onClick={() => handleMoveStop(day.dayNumber, stopIdx, 'down')}
                                            className="p-1.5 rounded-lg text-charcoal-muted hover:bg-canvas-muted hover:text-charcoal disabled:opacity-30 transition-colors"
                                            title="Move stop down"
                                          >
                                            <ArrowDown className="w-3.5 h-3.5" />
                                          </button>

                                          {/* Save Button */}
                                          <button
                                            onClick={() => onToggleSavePlace({
                                              id: `save-${stop.title.toLowerCase().replace(/\s+/g, '-')}`,
                                              name: stop.title,
                                              location: stop.location,
                                              category: 'Sights',
                                              note: stop.note,
                                              cost: stop.cost || '₹200',
                                              image: stop.image,
                                              rating: 'Itinerary Stop'
                                            })}
                                            className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1 transition-colors ${
                                              isSaved
                                                ? 'bg-sunset/10 border-sunset/30 text-sunset'
                                                : 'border-charcoal/10 text-charcoal-muted hover:bg-canvas-muted hover:text-charcoal'
                                            }`}
                                            title={isSaved ? 'Saved in wishlist' : 'Save to wishlist'}
                                          >
                                            <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-sunset text-sunset' : ''}`} />
                                            <span className="hidden lg:inline">{isSaved ? 'Saved' : 'Save'}</span>
                                          </button>

                                          {/* Remove Stop */}
                                          <button
                                            onClick={() => handleRemoveStop(day.dayNumber, stopIdx)}
                                            className="p-2 rounded-xl text-charcoal-muted hover:text-rose-600 hover:bg-rose-50 transition-colors"
                                            title="Remove stop"
                                          >
                                            <Trash2 className="w-3.5 h-3.5" />
                                          </button>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              ) : (
                                <div className="text-center py-8 text-charcoal-muted text-xs space-y-2">
                                  <p>No stops added to this day yet.</p>
                                  <button
                                    onClick={() => onOpenAddStop(day.dayNumber)}
                                    className="px-4 py-2 rounded-full bg-charcoal text-canvas text-xs font-semibold hover:bg-sunset transition-colors"
                                  >
                                    + Add first stop
                                  </button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 2: PLACES SAVED VIEW */}
              {activeTab === 'places' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="font-editorial text-2xl sm:text-3xl text-charcoal font-semibold">
                        Places Saved ({savedPlaces.length})
                      </h4>
                      <p className="text-xs text-charcoal-muted">
                        All Indian attractions, restaurants, stays & hidden gems bookmarked for your trip.
                      </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 bg-canvas-muted p-1 rounded-2xl border border-charcoal/5 text-xs">
                      {['all', 'heritage', 'sights', 'food', 'stays', 'shopping'].map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setPlaceFilter(filter)}
                          className={`px-3 py-1.5 rounded-xl font-medium capitalize transition-all ${
                            placeFilter === filter
                              ? 'bg-canvas-pure text-charcoal shadow-2xs font-semibold'
                              : 'text-charcoal-muted hover:text-charcoal'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Saved Cards Grid with Photos */}
                  {filteredSavedPlaces.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {filteredSavedPlaces.map((place) => (
                        <div
                          key={place.id}
                          className="p-4 rounded-2xl border border-charcoal/10 bg-canvas-pure hover:border-sunset/40 transition-all flex flex-col justify-between space-y-3 group shadow-2xs"
                        >
                          <div className="flex items-start gap-3.5">
                            {/* Photo */}
                            <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-charcoal shadow-sm border border-charcoal/10">
                              <img
                                src={place.image || 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=300&q=80'}
                                alt={place.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>

                            {/* Details */}
                            <div className="space-y-1 flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-sunset bg-sunset/10 px-2 py-0.5 rounded">
                                  {place.category}
                                </span>
                                <button
                                  onClick={() => onRemoveSavedPlace(place.id)}
                                  className="text-charcoal-muted hover:text-rose-600 transition-colors p-1"
                                  title="Remove from saved"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <h5 className="font-semibold text-charcoal text-sm truncate group-hover:text-sunset transition-colors">
                                {place.name}
                              </h5>
                              <p className="text-[11px] text-charcoal-muted truncate flex items-center gap-1 font-medium">
                                <MapPin className="w-3 h-3 text-sunset shrink-0" />
                                <span>{place.location}</span>
                              </p>
                              <p className="text-xs text-charcoal-muted line-clamp-2">
                                {place.note}
                              </p>
                            </div>
                          </div>

                          <div className="pt-2 flex items-center justify-between text-xs text-charcoal-faint border-t border-charcoal/5">
                            <span className="font-mono font-semibold text-sage-dark">{place.cost || 'Estimated: ₹200'}</span>
                            <button
                              onClick={() => {
                                onOpenAddStop(1);
                                showToast(`Ready to add ${place.name} to Day 1`, 'info');
                              }}
                              className="text-xs font-semibold text-sunset hover:underline flex items-center gap-1"
                            >
                              <Plus className="w-3 h-3" />
                              <span>Add to Itinerary</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16 bg-canvas-muted/30 rounded-3xl border border-charcoal/10 space-y-3">
                      <Bookmark className="w-8 h-8 text-charcoal-muted mx-auto" />
                      <h5 className="font-editorial text-2xl font-semibold text-charcoal">No saved places in this category</h5>
                      <p className="text-xs text-charcoal-muted max-w-sm mx-auto">
                        Explore the itinerary or Indian destinations and click the heart icon on any attraction to bookmark it here.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: BUDGET VIEW (FULLY WORKING & INTERACTIVE) */}
              {activeTab === 'budget' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  
                  {/* Budget Top Controller */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-charcoal/10 pb-6">
                    <div>
                      <h4 className="font-editorial text-2xl sm:text-3xl text-charcoal font-semibold">
                        Trip Budget Breakdown
                      </h4>
                      <p className="text-xs text-charcoal-muted">
                        Live expense tracking with INR ₹ totals, categories & accommodation manager.
                      </p>
                    </div>

                    {/* Currency and Total Budget Controller */}
                    <div className="flex items-center gap-3">
                      {/* Currency switch */}
                      <div className="flex items-center bg-canvas-muted p-1 rounded-xl border border-charcoal/10 text-xs">
                        {['INR', 'USD', 'EUR', 'GBP'].map((curr) => (
                          <button
                            key={curr}
                            onClick={() => setCurrency(curr)}
                            className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                              currency === curr
                                ? 'bg-charcoal text-canvas shadow-2xs'
                                : 'text-charcoal-muted hover:text-charcoal'
                            }`}
                          >
                            {curr === 'INR' ? '₹ INR' : curr}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setShowAddExpenseModal(true)}
                        className="px-4 py-2 rounded-full bg-charcoal text-canvas hover:bg-sunset transition-colors text-xs font-semibold flex items-center gap-1.5 shadow-2xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Expense</span>
                      </button>
                    </div>
                  </div>

                  {/* Overbudget Warning Alert */}
                  {isOverBudget && (
                    <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center justify-between gap-3 animate-in zoom-in-95">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>
                          <strong>Budget Limit Exceeded:</strong> You are over by <strong>{formatCost(Math.abs(remainingBudget))}</strong>. Consider adjusting stays or transport.
                        </span>
                      </div>
                      <button
                        onClick={() => setTotalBudgetInput(categoryTotals.grandTotal + 5000)}
                        className="px-3 py-1 bg-rose-600 text-white rounded-lg font-medium hover:bg-rose-700 transition-colors shrink-0"
                      >
                        Adjust Limit to {formatCost(categoryTotals.grandTotal + 5000)}
                      </button>
                    </div>
                  )}

                  {/* Top 4 Metric KPI Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-4 rounded-2xl bg-canvas-muted/40 border border-charcoal/10 text-left space-y-1">
                      <div className="text-xs text-charcoal-muted font-medium flex items-center justify-between">
                        <span>Total Target</span>
                        <button
                          onClick={() => setIsEditingTotalBudget(!isEditingTotalBudget)}
                          className="text-[10px] text-sunset hover:underline font-mono"
                        >
                          {isEditingTotalBudget ? 'Done' : 'Edit'}
                        </button>
                      </div>
                      {isEditingTotalBudget ? (
                        <input
                          type="number"
                          value={totalBudgetInput}
                          onChange={(e) => setTotalBudgetInput(Number(e.target.value))}
                          className="w-full px-2 py-1 rounded bg-canvas-pure border border-sunset text-sm font-mono font-bold"
                        />
                      ) : (
                        <div className="text-xl font-bold text-charcoal font-mono">
                          {formatCost(totalBudgetInput)}
                        </div>
                      )}
                      <div className="text-[11px] text-charcoal-faint">Allocated budget limit</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-canvas-muted/40 border border-charcoal/10 text-left space-y-1">
                      <div className="text-xs text-charcoal-muted font-medium">Total Spent</div>
                      <div className="text-xl font-bold text-charcoal font-mono">
                        {formatCost(categoryTotals.grandTotal)}
                      </div>
                      <div className="text-[11px] text-sage font-medium">{percentSpent}% of target</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-canvas-muted/40 border border-charcoal/10 text-left space-y-1">
                      <div className="text-xs text-charcoal-muted font-medium">Remaining</div>
                      <div className={`text-xl font-bold font-mono ${isOverBudget ? 'text-rose-600' : 'text-emerald-700'}`}>
                        {formatCost(remainingBudget)}
                      </div>
                      <div className="text-[11px] text-charcoal-faint">{isOverBudget ? 'Over limit' : 'Available balance'}</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-canvas-muted/40 border border-charcoal/10 text-left space-y-1">
                      <div className="text-xs text-charcoal-muted font-medium">Cost / Person</div>
                      <div className="text-xl font-bold text-charcoal font-mono">
                        {formatCost(Math.round(categoryTotals.grandTotal / (trip?.travelers || 2)))}
                      </div>
                      <div className="text-[11px] text-charcoal-faint">For {trip?.travelers || 2} travelers</div>
                    </div>
                  </div>

                  {/* Progress visual bar */}
                  <div className="p-5 rounded-2xl border border-charcoal/10 bg-canvas-pure space-y-3">
                    <div className="flex justify-between text-xs font-semibold text-charcoal">
                      <span>Category Distribution</span>
                      <span className="font-mono">{formatCost(categoryTotals.grandTotal)} / {formatCost(totalBudgetInput)} limit</span>
                    </div>
                    <div className="w-full h-3.5 bg-canvas-muted rounded-full overflow-hidden flex p-0.5 border border-charcoal/5">
                      <div className="h-full bg-sunset rounded-sm transition-all duration-300" style={{ width: `${(categoryTotals.totals.accommodation / (categoryTotals.grandTotal || 1)) * 100}%` }} title="Accommodation" />
                      <div className="h-full bg-sage rounded-sm transition-all duration-300" style={{ width: `${(categoryTotals.totals.food / (categoryTotals.grandTotal || 1)) * 100}%` }} title="Food" />
                      <div className="h-full bg-amber-500 rounded-sm transition-all duration-300" style={{ width: `${(categoryTotals.totals.activities / (categoryTotals.grandTotal || 1)) * 100}%` }} title="Activities" />
                      <div className="h-full bg-slateTone rounded-sm transition-all duration-300" style={{ width: `${(categoryTotals.totals.transport / (categoryTotals.grandTotal || 1)) * 100}%` }} title="Transport" />
                      <div className="h-full bg-rose-500 rounded-sm transition-all duration-300" style={{ width: `${(categoryTotals.totals.shopping / (categoryTotals.grandTotal || 1)) * 100}%` }} title="Shopping" />
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs text-charcoal-muted pt-1">
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-sunset" /> Stays ({formatCost(categoryTotals.totals.accommodation)})</span>
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-sage" /> Food ({formatCost(categoryTotals.totals.food)})</span>
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Activities ({formatCost(categoryTotals.totals.activities)})</span>
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slateTone" /> Transport ({formatCost(categoryTotals.totals.transport)})</span>
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Shopping ({formatCost(categoryTotals.totals.shopping)})</span>
                    </div>
                  </div>

                  {/* ACCOMMODATION SUBSECTION */}
                  <div className="p-6 rounded-3xl bg-canvas-muted/40 border border-charcoal/10 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <BedDouble className="w-4 h-4 text-sunset" />
                          <h5 className="font-editorial text-2xl font-semibold text-charcoal">
                            Accommodations & Hotel Stays
                          </h5>
                        </div>
                        <p className="text-xs text-charcoal-muted">
                          Manage bookings, night counts, payment status & sync direct to budget.
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setEditingAccId(null);
                          setAccForm({
                            hotelName: '',
                            location: `${trip?.destinationName || 'Jaipur'}`,
                            nights: 2,
                            pricePerNight: 4500,
                            paymentAmount: 0,
                            paymentStatus: 'Pending',
                            notes: '',
                            checkIn: 'Oct 15, 2:00 PM',
                            checkOut: 'Oct 17, 11:00 AM'
                          });
                          setShowAddAccModal(true);
                        }}
                        className="px-3.5 py-1.5 rounded-full bg-charcoal text-canvas hover:bg-sunset transition-colors text-xs font-semibold flex items-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Hotel Stay</span>
                      </button>
                    </div>

                    {/* Accommodation List Table / Cards */}
                    <div className="space-y-3">
                      {accommodations.map((acc) => (
                        <div
                          key={acc.id}
                          className="p-4 rounded-2xl bg-canvas-pure border border-charcoal/10 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h6 className="font-semibold text-charcoal text-sm">{acc.hotelName}</h6>
                              <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                                acc.paymentStatus === 'Paid in Full'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : acc.paymentStatus === 'Advance Paid'
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-charcoal/10 text-charcoal-muted'
                              }`}>
                                {acc.paymentStatus}
                              </span>
                            </div>
                            <p className="text-xs text-charcoal-muted">{acc.location} • {acc.nights} Nights @ {formatCost(acc.pricePerNight)}/night</p>
                            <p className="text-[11px] text-charcoal-faint">{acc.notes}</p>
                          </div>

                          <div className="flex items-center gap-4 self-end md:self-center">
                            <div className="text-right">
                              <div className="text-base font-bold font-mono text-charcoal">{formatCost(acc.totalCost)}</div>
                              <div className="text-[10px] text-charcoal-muted font-mono">Paid: {formatCost(acc.paymentAmount)}</div>
                            </div>

                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => {
                                  setEditingAccId(acc.id);
                                  setAccForm(acc);
                                  setShowAddAccModal(true);
                                }}
                                className="p-1.5 rounded-lg text-charcoal-muted hover:text-charcoal hover:bg-canvas-muted"
                                title="Edit Stay"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteAccommodation(acc.id)}
                                className="p-1.5 rounded-lg text-charcoal-muted hover:text-rose-600 hover:bg-rose-50"
                                title="Delete Stay"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* EXPENSE CATEGORY LINE ITEMS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.keys(budgetItems).map((cat) => {
                      const items = budgetItems[cat] || [];
                      const catTotal = categoryTotals.totals[cat] || 0;
                      
                      const iconMap = {
                        accommodation: <BedDouble className="w-4 h-4 text-sunset" />,
                        food: <Utensils className="w-4 h-4 text-sage" />,
                        activities: <Ticket className="w-4 h-4 text-amber-600" />,
                        transport: <Train className="w-4 h-4 text-slateTone" />,
                        shopping: <ShoppingBag className="w-4 h-4 text-rose-500" />,
                        other: <CreditCard className="w-4 h-4 text-charcoal-muted" />
                      };

                      return (
                        <div key={cat} className="p-4 rounded-2xl bg-canvas-pure border border-charcoal/10 shadow-2xs space-y-3">
                          <div className="flex items-center justify-between border-b border-charcoal/5 pb-2">
                            <div className="flex items-center gap-2">
                              {iconMap[cat]}
                              <span className="font-semibold text-charcoal text-sm capitalize">{cat}</span>
                            </div>
                            <span className="font-bold font-mono text-xs text-charcoal">
                              {formatCost(catTotal)}
                            </span>
                          </div>

                          <div className="space-y-1.5 max-h-40 overflow-y-auto">
                            {items.map((item) => (
                              <div key={item.id} className="flex items-center justify-between p-1.5 rounded-lg bg-canvas-muted/40 text-xs">
                                <span className="text-charcoal-muted truncate pr-2">{item.title}</span>
                                <div className="flex items-center gap-2 shrink-0">
                                  <span className="font-mono font-semibold text-charcoal">{formatCost(item.amount)}</span>
                                  <button
                                    onClick={() => handleDeleteExpense(cat, item.id)}
                                    className="text-charcoal-muted hover:text-rose-600 p-0.5"
                                  >
                                    <X className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              )}

              {/* TAB 4: OVERVIEW VIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <h4 className="font-editorial text-2xl sm:text-3xl text-charcoal font-semibold">
                      Trip Overview: {trip?.destinationName || 'Jaipur, Rajasthan'}
                    </h4>
                    <p className="text-xs text-charcoal-muted">
                      Essential travel context, weather advisories & curated Indian cultural tips.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl border border-charcoal/10 bg-canvas-muted/30 space-y-2">
                      <span className="text-xs font-semibold text-sunset uppercase tracking-wider">Best Season & Climate</span>
                      <h5 className="font-editorial text-xl font-bold text-charcoal">
                        {trip?.destination?.bestSeason || 'October – March (Crisp & Pleasant)'}
                      </h5>
                      <p className="text-xs text-charcoal-muted leading-relaxed">
                        Sunny days with average temperatures between 18°C – 26°C. Perfect for outdoor fort exploration, photography, and evening rooftop dining.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-charcoal/10 bg-canvas-muted/30 space-y-2">
                      <span className="text-xs font-semibold text-sage uppercase tracking-wider">Pace & Transit</span>
                      <h5 className="font-editorial text-xl font-bold text-charcoal">
                        {trip?.destination?.idealPace || 'Curated Heritage & Unhurried Walks'}
                      </h5>
                      <p className="text-xs text-charcoal-muted leading-relaxed">
                        Designed with 2–3 major morning and afternoon stops to give you room for spontaneous street shopping, tea breaks, and sunset golden hour.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-charcoal/10 bg-canvas-muted/30 space-y-2">
                      <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Local Flavors & Dining</span>
                      <h5 className="font-editorial text-xl font-bold text-charcoal">
                        Authentic Regional Gastronomy
                      </h5>
                      <p className="text-xs text-charcoal-muted leading-relaxed">
                        Must-tries include Dal Baati Churma, Ghevar, Pyaz Kachori, and authentic saffron Kullad Chai along the bazaar lanes.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-charcoal/10 bg-canvas-muted/30 space-y-2">
                      <span className="text-xs font-semibold text-slateTone uppercase tracking-wider">Smart Travel Checklist</span>
                      <h5 className="font-editorial text-xl font-bold text-charcoal">
                        Offline Ready & Verified
                      </h5>
                      <p className="text-xs text-charcoal-muted leading-relaxed">
                        Pre-download offline maps, keep loose UPI or cash handy for local rickshaws, and wear comfortable footwear for stone fortress climbs.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* ADD EXPENSE MODAL */}
      {showAddExpenseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-canvas-pure rounded-3xl border border-charcoal/15 shadow-floating p-6 space-y-5 text-left">
            <button
              onClick={() => setShowAddExpenseModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-charcoal-muted hover:bg-canvas-muted"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h4 className="font-editorial text-2xl font-semibold text-charcoal">Add Budget Expense</h4>
              <p className="text-xs text-charcoal-muted">Add a custom expense to your trip budget calculation.</p>
            </div>

            <form onSubmit={handleAddExpense} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-charcoal block">Category</label>
                <select
                  value={newExpenseCategory}
                  onChange={(e) => setNewExpenseCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-xs focus:outline-none focus:ring-2 focus:ring-sunset"
                >
                  <option value="accommodation">Accommodation</option>
                  <option value="food">Food & Dining</option>
                  <option value="activities">Activities & Entry Passes</option>
                  <option value="transport">Transport & Cab</option>
                  <option value="shopping">Shopping & Souvenirs</option>
                  <option value="other">Other / Miscellaneous</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-charcoal block">Expense Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Amber Fort audio guide + camera fee"
                  value={newExpenseTitle}
                  onChange={(e) => setNewExpenseTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-xs focus:outline-none focus:ring-2 focus:ring-sunset"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-charcoal block">Amount (₹ INR) *</label>
                <input
                  type="number"
                  required
                  min="0"
                  placeholder="e.g. 750"
                  value={newExpenseAmount}
                  onChange={(e) => setNewExpenseAmount(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-xs focus:outline-none focus:ring-2 focus:ring-sunset"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddExpenseModal(false)}
                  className="px-4 py-2 rounded-full border border-charcoal/15 text-xs font-semibold text-charcoal hover:bg-canvas-muted"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-charcoal text-canvas hover:bg-sunset text-xs font-semibold transition-colors"
                >
                  Add Expense
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD / EDIT ACCOMMODATION MODAL */}
      {showAddAccModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-canvas-pure rounded-3xl border border-charcoal/15 shadow-floating p-6 sm:p-8 space-y-5 text-left max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowAddAccModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-charcoal-muted hover:bg-canvas-muted"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h4 className="font-editorial text-2xl sm:text-3xl font-semibold text-charcoal">
                {editingAccId ? 'Edit Hotel Stay' : 'Add Hotel Accommodation'}
              </h4>
              <p className="text-xs text-charcoal-muted">Details automatically sync to your Accommodation budget category.</p>
            </div>

            <form onSubmit={handleSaveAccommodation} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-charcoal block">Hotel / Stay Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alsisar Haveli Heritage Stay"
                  value={accForm.hotelName}
                  onChange={(e) => setAccForm({ ...accForm, hotelName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-xs focus:outline-none focus:ring-2 focus:ring-sunset"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-charcoal block">Location</label>
                <input
                  type="text"
                  placeholder="e.g. Sansar Chandra Road, Jaipur"
                  value={accForm.location}
                  onChange={(e) => setAccForm({ ...accForm, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-xs focus:outline-none focus:ring-2 focus:ring-sunset"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-charcoal block">Number of Nights</label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={accForm.nights}
                    onChange={(e) => setAccForm({ ...accForm, nights: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-xs focus:outline-none focus:ring-2 focus:ring-sunset"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-charcoal block">Price per Night (₹)</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={accForm.pricePerNight}
                    onChange={(e) => setAccForm({ ...accForm, pricePerNight: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-xs focus:outline-none focus:ring-2 focus:ring-sunset"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-sunset/10 border border-sunset/20 flex items-center justify-between text-xs">
                <span className="font-medium text-charcoal">Calculated Total Cost:</span>
                <span className="font-mono font-bold text-sunset">
                  ₹{(Number(accForm.nights || 0) * Number(accForm.pricePerNight || 0)).toLocaleString('en-IN')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-charcoal block">Amount Paid (₹)</label>
                  <input
                    type="number"
                    min="0"
                    value={accForm.paymentAmount}
                    onChange={(e) => setAccForm({ ...accForm, paymentAmount: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-xs focus:outline-none focus:ring-2 focus:ring-sunset"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-charcoal block">Payment Status</label>
                  <select
                    value={accForm.paymentStatus}
                    onChange={(e) => setAccForm({ ...accForm, paymentStatus: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-xs focus:outline-none focus:ring-2 focus:ring-sunset"
                  >
                    <option value="Paid in Full">Paid in Full</option>
                    <option value="Advance Paid">Advance Paid</option>
                    <option value="Pending">Pending</option>
                    <option value="Pay on Arrival">Pay on Arrival</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-charcoal block">Notes / Booking Reference</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Courtyard view room, breakfast included..."
                  value={accForm.notes}
                  onChange={(e) => setAccForm({ ...accForm, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-xs focus:outline-none focus:ring-2 focus:ring-sunset"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddAccModal(false)}
                  className="px-4 py-2 rounded-full border border-charcoal/15 text-xs font-semibold text-charcoal hover:bg-canvas-muted"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-charcoal text-canvas hover:bg-sunset text-xs font-semibold transition-colors shadow-sm"
                >
                  {editingAccId ? 'Update Stay' : 'Save Accommodation'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}
