import React, { useState } from 'react';
import { DollarSign, ShieldCheck, ChevronRight, Info, Sparkles, PieChart } from 'lucide-react';

export default function BudgetCard() {
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [activeCategory, setActiveCategory] = useState('stay');

  // Conversion rates based on INR base
  const rates = {
    INR: { symbol: '₹', multiplier: 1, code: 'INR' },
    USD: { symbol: '$', multiplier: 0.012, code: 'USD' },
    EUR: { symbol: '€', multiplier: 0.011, code: 'EUR' },
    GBP: { symbol: '£', multiplier: 0.0095, code: 'GBP' },
  };

  const currentRate = rates[selectedCurrency];

  const formatAmount = (inrVal) => {
    if (selectedCurrency === 'INR') {
      return `₹${inrVal.toLocaleString('en-IN')}`;
    }
    const val = Math.round(inrVal * currentRate.multiplier);
    return `${currentRate.symbol}${val.toLocaleString()}`;
  };

  const categories = [
    {
      id: 'stay',
      name: 'Stay',
      inr: 23700,
      percentage: 52,
      color: 'bg-sunset',
      textColor: 'text-sunset',
      borderColor: 'border-sunset',
      items: [
        { title: 'Alsisar Haveli Heritage Courtyard (3 nights)', cost: 16500 },
        { title: 'Samode Haveli Boutique Suite (1 night)', cost: 7200 },
      ]
    },
    {
      id: 'food',
      name: 'Food',
      inr: 5800,
      percentage: 13,
      color: 'bg-sage',
      textColor: 'text-sage-dark',
      borderColor: 'border-sage',
      items: [
        { title: 'Chokhi Dhani Royal Thali & Folk Performance', cost: 1900 },
        { title: 'Wind View Cafe & Laxmi Mishthan Bhandar', cost: 1400 },
        { title: 'Nahargarh Fort Padao Sunset Dinner & Chai', cost: 2500 },
      ]
    },
    {
      id: 'activities',
      name: 'Activities',
      inr: 3900,
      percentage: 9,
      color: 'bg-amber-500',
      textColor: 'text-amber-700',
      borderColor: 'border-amber-500',
      items: [
        { title: 'Amber Fort & Sheesh Mahal composite pass', cost: 1100 },
        { title: 'City Palace & Jantar Mantar museum entry', cost: 1800 },
        { title: 'Albert Hall Museum & Sound and Light Show', cost: 1000 },
      ]
    },
    {
      id: 'transport',
      name: 'Transport',
      inr: 8600,
      percentage: 19,
      color: 'bg-slateTone',
      textColor: 'text-slateTone',
      borderColor: 'border-slateTone',
      items: [
        { title: 'Vande Bharat Express Train Tickets for 2', cost: 4200 },
        { title: 'Private AC Sightseeing Cab (2 Full Days)', cost: 3500 },
        { title: 'Local E-Rickshaws in Old Walled City', cost: 900 },
      ]
    },
    {
      id: 'shopping',
      name: 'Shopping',
      inr: 4000,
      percentage: 7,
      color: 'bg-rose-500',
      textColor: 'text-rose-700',
      borderColor: 'border-rose-500',
      items: [
        { title: 'Johari Bazaar Lac Bangles & Silver earrings', cost: 2000 },
        { title: 'Hand-block print cottons & Jaipuri Razai', cost: 2000 },
      ]
    }
  ];

  const totalInr = 46000;

  return (
    <section className="py-20 md:py-28 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-semibold tracking-widest uppercase">
              <PieChart className="w-3.5 h-3.5" />
              <span>TRANSPARENT EXPENSE CONTROL</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-editorial font-medium text-charcoal leading-[1.08]">
              Never guess <br />
              <span className="italic text-sunset">where the rupees go.</span>
            </h2>

            <p className="text-base text-charcoal-muted leading-relaxed">
              Set target budgets per destination, categorize royal stays, authentic thalis, monument passes, and transport, and convert currencies instantly on the fly.
            </p>

            {/* Currency Selector Buttons */}
            <div className="pt-2 space-y-2">
              <span className="text-xs font-mono text-charcoal-faint uppercase tracking-wider block">
                Select Display Currency:
              </span>
              <div className="inline-flex bg-canvas-muted p-1 rounded-xl border border-charcoal/10 gap-1">
                {Object.keys(rates).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setSelectedCurrency(curr)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedCurrency === curr
                        ? 'bg-charcoal text-canvas shadow-2xs'
                        : 'text-charcoal-muted hover:text-charcoal'
                    }`}
                  >
                    {rates[curr].symbol} {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Honesty note */}
            <div className="p-3.5 rounded-2xl bg-canvas-muted/60 border border-charcoal/10 text-xs text-charcoal-muted flex items-start gap-2.5">
              <Info className="w-4 h-4 text-sunset shrink-0 mt-0.5" />
              <p>
                <strong>Interactive Budget Engine:</strong> Real-time categorization, progress bars, and overbudget warnings tailored to Indian travel costs.
              </p>
            </div>
          </div>

          {/* Right Product Budget Card Column */}
          <div className="lg:col-span-7">
            <div className="bg-canvas-pure rounded-3xl border border-charcoal/10 shadow-editorial p-6 sm:p-8 space-y-6">
              
              {/* Budget Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-charcoal/10 pb-5 text-left">
                <div>
                  <span className="text-xs font-mono text-charcoal-faint uppercase tracking-wider">
                    Jaipur 4-Day Plan
                  </span>
                  <h3 className="font-editorial text-3xl font-semibold text-charcoal">
                    Trip budget
                  </h3>
                </div>

                <div className="text-right">
                  <div className="text-3xl font-bold font-mono text-charcoal">
                    {formatAmount(totalInr)}
                  </div>
                  <div className="text-xs text-sage font-medium">
                    planned budget
                  </div>
                </div>
              </div>

              {/* Stacked Category Progress Bar */}
              <div className="space-y-2 text-left">
                <div className="flex justify-between text-xs text-charcoal-muted font-medium">
                  <span>Category allocation</span>
                  <span>100% accounted for</span>
                </div>
                <div className="w-full h-3.5 bg-canvas-muted rounded-full overflow-hidden flex gap-0.5 p-0.5 border border-charcoal/5">
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      className={`h-full ${cat.color} rounded-sm transition-all duration-300 cursor-pointer`}
                      style={{ width: `${cat.percentage}%` }}
                      onClick={() => setActiveCategory(cat.id)}
                      title={`${cat.name}: ${formatAmount(cat.inr)} (${cat.percentage}%)`}
                    />
                  ))}
                </div>
              </div>

              {/* Category Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        isActive
                          ? `bg-canvas-pure ${cat.borderColor} border-2 shadow-2xs`
                          : 'bg-canvas-muted/40 border-charcoal/10 hover:bg-canvas-muted'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-charcoal-muted font-medium truncate">{cat.name}</span>
                        <span className="text-[10px] font-mono text-charcoal-faint">{cat.percentage}%</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold font-mono text-charcoal mt-1 truncate">
                        {formatAmount(cat.inr)}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Itemized Line Items Drill-down */}
              <div className="p-4 rounded-2xl bg-canvas-muted/50 border border-charcoal/10 space-y-3 text-left">
                <div className="flex items-center justify-between text-xs font-semibold text-charcoal">
                  <span>Itemized Details ({categories.find(c => c.id === activeCategory)?.name})</span>
                  <span className="text-sunset font-mono">
                    {formatAmount(categories.find(c => c.id === activeCategory)?.inr)}
                  </span>
                </div>

                <div className="space-y-2">
                  {categories.find(c => c.id === activeCategory)?.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-canvas-pure text-xs border border-charcoal/5">
                      <span className="text-charcoal font-medium">{item.title}</span>
                      <span className="font-mono text-charcoal-muted font-semibold">{formatAmount(item.cost)}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
