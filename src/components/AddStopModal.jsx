import React, { useState } from 'react';
import { X, Plus, MapPin, Clock, DollarSign, Image as ImageIcon, Sparkles } from 'lucide-react';

export default function AddStopModal({ isOpen, onClose, onAddStop, dayNumber = 1 }) {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    time: '10:30 AM',
    duration: '2.0 hrs',
    note: '',
    cost: '₹350',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
  });

  const SAMPLE_IMAGES = [
    { label: 'Heritage Fort', url: 'https://images.unsplash.com/photo-1603288940300-4b95383561a0?auto=format&fit=crop&w=800&q=80' },
    { label: 'Palace View', url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80' },
    { label: 'Mountain Trail', url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80' },
    { label: 'Beach & Palms', url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80' },
    { label: 'River & Ghats', url: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=80' },
    { label: 'Local Food Cafe', url: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80' },
  ];

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    onAddStop(dayNumber, {
      ...formData,
      time: formData.time || '11:00 AM',
      cost: formData.cost || 'Free',
      duration: formData.duration || '1.5 hrs',
      image: formData.image || SAMPLE_IMAGES[0].url
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-canvas-pure rounded-3xl border border-charcoal/15 shadow-floating overflow-hidden p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal-muted hover:bg-canvas-muted transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-left space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sunset/10 text-sunset text-xs font-semibold uppercase tracking-wider">
            <Plus className="w-3.5 h-3.5" />
            <span>DAY {dayNumber} CUSTOM STOP</span>
          </div>
          <h3 className="font-editorial text-3xl font-semibold text-charcoal">
            Add Custom Stop to Itinerary
          </h3>
          <p className="text-xs text-charcoal-muted">
            Add any temple, cafe, viewpoint, trek, or bazaar stop to Day 0{dayNumber}.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-charcoal block">Stop / Attraction Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Nahargarh Fort Sunset Viewpoint"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-charcoal text-sm placeholder-charcoal-muted/50 focus:outline-none focus:ring-2 focus:ring-sunset/40"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-charcoal flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sunset" />
                <span>Location / Neighborhood</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Aravalli Hills, Amer"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-charcoal text-xs focus:outline-none focus:ring-2 focus:ring-sunset/40"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-charcoal flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sage" />
                <span>Scheduled Time</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 05:00 PM"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-charcoal text-xs focus:outline-none focus:ring-2 focus:ring-sunset/40"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-charcoal flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-amber-600" />
                <span>Estimated Cost</span>
              </label>
              <input
                type="text"
                placeholder="e.g. ₹200 or Free"
                value={formData.cost}
                onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-charcoal text-xs focus:outline-none focus:ring-2 focus:ring-sunset/40"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-charcoal block">Duration</label>
              <input
                type="text"
                placeholder="e.g. 2.0 hrs"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-charcoal text-xs focus:outline-none focus:ring-2 focus:ring-sunset/40"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-charcoal block">Note / Suggested Activity</label>
            <textarea
              rows={2}
              placeholder="e.g. Sunset tea overlooking city lights, bring wide angle lens..."
              value={formData.note}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl bg-canvas-muted/50 border border-charcoal/10 text-charcoal text-xs focus:outline-none focus:ring-2 focus:ring-sunset/40"
            />
          </div>

          {/* Quick Select Image */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-charcoal block">Choose Attraction Photo</label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {SAMPLE_IMAGES.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setFormData({ ...formData, image: img.url })}
                  className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                    formData.image === img.url
                      ? 'border-sunset ring-2 ring-sunset/30 scale-105'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  title={img.label}
                >
                  <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-charcoal/15 text-charcoal text-xs font-semibold hover:bg-canvas-muted"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-charcoal text-canvas hover:bg-sunset transition-colors text-xs font-semibold flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Day 0{dayNumber}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
