import React from 'react';
import { X, Calendar, MapPin, CheckCircle, ArrowRight, Sparkles, DollarSign, Clock } from 'lucide-react';

export default function ItineraryModal({ destination, onClose, onStartBuilding }) {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-canvas-pure rounded-3xl border border-charcoal/15 shadow-floating overflow-hidden p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal-muted hover:bg-canvas-muted transition-colors focus:outline-none z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/10 text-sage-dark text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-sunset" />
            <span>{destination.state || 'India'} • Blueprint</span>
          </div>
          <h3 className="font-editorial text-3xl sm:text-4xl font-semibold text-charcoal">
            {destination.name}
          </h3>
          <p className="text-sm text-charcoal-muted">
            {destination.tagline || destination.descriptor}
          </p>
        </div>

        {/* Banner image */}
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-charcoal shadow-sm">
          <img
            src={destination.heroImage || destination.thumbnail || destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 text-white text-xs font-mono flex items-center gap-3">
            <span>{destination.idealDays || destination.duration || '4–5 Days'}</span>
            <span>•</span>
            <span>Best Season: {destination.bestSeason || destination.season || 'Oct – Mar'}</span>
          </div>
        </div>

        {/* Included Attractions in Blueprint */}
        <div className="space-y-3 text-left">
          <h4 className="font-semibold text-charcoal text-sm uppercase tracking-wider font-mono">
            Attractions & Highlights in {destination.name}:
          </h4>

          {destination.attractions && destination.attractions.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destination.attractions.map((att) => (
                <div
                  key={att.id}
                  className="p-3 rounded-2xl bg-canvas-muted/40 border border-charcoal/10 flex items-center gap-3"
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-charcoal">
                    <img src={att.image} alt={att.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="font-semibold text-xs text-charcoal truncate">{att.name}</h5>
                    <div className="text-[11px] text-charcoal-muted truncate">{att.location}</div>
                    <div className="text-[10px] font-mono text-sunset font-bold">{att.cost}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {destination.highlights ? (
                destination.highlights.map((h, i) => (
                  <div key={i} className="p-3 rounded-xl bg-canvas-muted/50 border border-charcoal/5 flex items-center gap-2 text-charcoal font-medium">
                    <CheckCircle className="w-4 h-4 text-sage shrink-0" />
                    <span>{h}</span>
                  </div>
                ))
              ) : (
                <>
                  <div className="p-3 rounded-xl bg-canvas-muted/50 border border-charcoal/5 flex items-center gap-2 text-charcoal font-medium">
                    <CheckCircle className="w-4 h-4 text-sage shrink-0" />
                    <span>Curated daily itinerary nodes</span>
                  </div>
                  <div className="p-3 rounded-xl bg-canvas-muted/50 border border-charcoal/5 flex items-center gap-2 text-charcoal font-medium">
                    <CheckCircle className="w-4 h-4 text-sage shrink-0" />
                    <span>Smart transit & pace timing</span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-2 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-charcoal/15 text-charcoal text-xs font-semibold hover:bg-canvas-muted transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onStartBuilding(destination);
            }}
            className="px-6 py-2.5 rounded-full bg-charcoal text-canvas hover:bg-sunset transition-colors text-xs font-semibold flex items-center gap-2 shadow-sm"
          >
            <span>Open in Triply Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
