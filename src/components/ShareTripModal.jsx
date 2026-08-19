import React, { useState } from 'react';
import { X, Copy, Check, Share2, MessageCircle, Send, Mail, QrCode } from 'lucide-react';

export default function ShareTripModal({ isOpen, onClose, tripData }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !tripData) return null;

  const tripUrl = `https://triply.in/trip/${tripData.destinationId || 'india'}?days=${tripData.durationDays || 4}&code=TRIP${Math.floor(1000 + Math.random() * 9000)}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(tripUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareSocial = (platform) => {
    const text = encodeURIComponent(`Check out my customized India travel plan for ${tripData.destinationName} on TRIPLY!`);
    const url = encodeURIComponent(tripUrl);
    
    let shareLink = '';
    if (platform === 'whatsapp') {
      shareLink = `https://api.whatsapp.com/send?text=${text}%20${url}`;
    } else if (platform === 'telegram') {
      shareLink = `https://t.me/share/url?url=${url}&text=${text}`;
    } else if (platform === 'mail') {
      shareLink = `mailto:?subject=${encodeURIComponent(`Travel Itinerary: ${tripData.destinationName}`)}&body=${text}%0A%0A${url}`;
    }

    if (shareLink) window.open(shareLink, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-canvas-pure rounded-3xl border border-charcoal/15 shadow-floating overflow-hidden p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal-muted hover:bg-canvas-muted transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-left space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/10 text-sage-dark text-xs font-semibold uppercase tracking-wider">
            <Share2 className="w-3.5 h-3.5" />
            <span>SHARE ITINERARY</span>
          </div>
          <h3 className="font-editorial text-3xl font-semibold text-charcoal">
            Share your {tripData.destinationName.split(',')[0]} trip
          </h3>
          <p className="text-xs text-charcoal-muted">
            Invite travel partners to view stops, split accommodation costs, and sync live offline maps.
          </p>
        </div>

        {/* Copy Link Input Bar */}
        <div className="space-y-2 text-left">
          <label className="text-xs font-medium text-charcoal block">Trip Private Link</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={tripUrl}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-canvas-muted/60 border border-charcoal/10 text-xs font-mono text-charcoal-muted truncate select-all"
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                copied
                  ? 'bg-emerald-600 text-canvas'
                  : 'bg-charcoal text-canvas hover:bg-sunset'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Social Quick Share Buttons */}
        <div className="space-y-2 text-left">
          <span className="text-xs font-medium text-charcoal block">Share with Travelers</span>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleShareSocial('whatsapp')}
              className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200/60 text-emerald-800 hover:bg-emerald-100/80 transition-colors flex flex-col items-center gap-1 text-xs font-medium"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={() => handleShareSocial('telegram')}
              className="p-3 rounded-2xl bg-sky-50 border border-sky-200/60 text-sky-800 hover:bg-sky-100/80 transition-colors flex flex-col items-center gap-1 text-xs font-medium"
            >
              <Send className="w-5 h-5 text-sky-600" />
              <span>Telegram</span>
            </button>

            <button
              onClick={() => handleShareSocial('mail')}
              className="p-3 rounded-2xl bg-canvas-muted border border-charcoal/10 text-charcoal hover:bg-canvas-subtle transition-colors flex flex-col items-center gap-1 text-xs font-medium"
            >
              <Mail className="w-5 h-5 text-charcoal-muted" />
              <span>Email</span>
            </button>
          </div>
        </div>

        {/* QR Code Preview */}
        <div className="p-4 rounded-2xl bg-canvas-muted/40 border border-charcoal/10 flex items-center justify-between gap-4">
          <div className="text-left text-xs space-y-1">
            <div className="font-semibold text-charcoal">Mobile Offline Sync</div>
            <div className="text-charcoal-muted text-[11px]">Scan with your smartphone camera to open directly on your mobile browser.</div>
          </div>
          <div className="p-2 bg-canvas-pure rounded-xl border border-charcoal/10 shrink-0">
            <QrCode className="w-10 h-10 text-charcoal" />
          </div>
        </div>

      </div>
    </div>
  );
}
