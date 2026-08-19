import React, { useState } from 'react';
import { X, Sparkles, RefreshCw, ArrowRight, MapPin, Compass } from 'lucide-react';

export default function EasterEggModal({ isOpen, onClose, onSelectDestination }) {
  const secretDestinations = [
    {
      id: 'jaipur',
      name: 'Jaipur, Rajasthan',
      tag: 'ROYAL HERITAGE',
      season: 'October – March',
      pace: 'Regal & Cultural',
      highlights: ['Morning Hawa Mahal golden light', 'Amber Fort Sheesh Mahal reflections', 'Sunset tea at Nahargarh Ridge'],
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'manali',
      name: 'Manali & Solang, Himachal',
      tag: 'HIMALAYAN ADVENTURE',
      season: 'March – June & Dec – Feb',
      pace: 'Mountain High',
      highlights: ['Solang valley tandem paragliding', 'Old Manali riverside cedar cafes', 'Drive through Atal Tunnel into Sissu'],
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'goa',
      name: 'Goa Coastal Shores',
      tag: 'TROPICAL COASTAL',
      season: 'November – April',
      pace: 'Unhurried Beach',
      highlights: ['Palolem crescent sea kayaking', 'Fontainhas Latin Quarter heritage stroll', 'Chapora Fort cliffside sunset'],
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'varanasi',
      name: 'Varanasi, Uttar Pradesh',
      tag: 'SPIRITUAL AWAKENING',
      season: 'October – March',
      pace: 'Timeless Devotion',
      highlights: ['Sunrise rowboat ride along 84 ghats', 'Dashashwamedh Ghat Maha Aarti', 'Fresh hot kachori & malaiyo breakfast'],
      image: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'kerala-munnar',
      name: 'Munnar & Alleppey, Kerala',
      tag: 'BACKWATERS & TEA MIST',
      season: 'September – March',
      pace: 'Nature Serenity',
      highlights: ['Sunrise over clouds at Kolukkumalai', 'Overnight luxury houseboat cruise', 'Spice garden walking trails'],
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ladakh-leh',
      name: 'Leh Ladakh',
      tag: 'HIGH ALTITUDE WONDER',
      season: 'May – September',
      pace: 'Alpine Adventure',
      highlights: ['Sapphire blue Pangong Lake tent camp', 'Bactrian camel ride in Nubra sand dunes', 'Thiksey Monastery morning chants'],
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const current = secretDestinations[currentIndex];

  const handleShuffle = () => {
    const nextIdx = (currentIndex + 1) % secretDestinations.length;
    setCurrentIndex(nextIdx);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-canvas-pure rounded-3xl border border-charcoal/15 shadow-floating overflow-hidden p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal-muted hover:bg-canvas-muted transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="space-y-1 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sunset/10 text-sunset text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SECRET DESTINATION RANDOMIZER</span>
          </div>
          <h3 className="font-editorial text-3xl sm:text-4xl font-semibold text-charcoal">
            Where to in India?
          </h3>
          <p className="text-xs text-charcoal-muted">
            You found Triply’s secret Indian destination randomizer!
          </p>
        </div>

        {/* Destination Card Preview */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-charcoal group shadow-md">
          <img
            src={current.image}
            alt={current.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 text-white text-left space-y-1">
            <span className="text-[10px] font-mono text-sunset font-bold uppercase tracking-widest bg-sunset/20 px-2 py-0.5 rounded">
              {current.tag}
            </span>
            <h4 className="font-editorial text-2xl font-semibold text-white">
              {current.name}
            </h4>
            <div className="flex items-center gap-3 text-xs text-white/80 font-medium">
              <span>Best: {current.season}</span>
              <span>•</span>
              <span>Pace: {current.pace}</span>
            </div>
          </div>
        </div>

        {/* Highlights List */}
        <div className="space-y-2 text-left">
          <span className="text-xs font-mono text-charcoal-faint uppercase tracking-wider block">
            Curated Indian Moments:
          </span>
          <div className="space-y-1.5">
            {current.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-charcoal font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-sunset" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={handleShuffle}
            className="flex-1 py-3 px-4 rounded-full bg-canvas-muted text-charcoal hover:bg-canvas-subtle transition-colors text-xs font-semibold flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4 text-sunset" />
            <span>Shuffle Destination</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onSelectDestination(current);
            }}
            className="flex-1 py-3 px-4 rounded-full bg-charcoal text-canvas hover:bg-sunset transition-colors text-xs font-semibold flex items-center justify-center gap-2"
          >
            <span>Plan This India Trip</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
