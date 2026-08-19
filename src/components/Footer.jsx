import React from 'react';
import { Compass, Sparkles, Heart } from 'lucide-react';

export default function Footer({ onOpenEasterEgg, onOpenPlanner }) {
  return (
    <footer className="bg-canvas border-t border-charcoal/10 py-16 text-charcoal text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-charcoal/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-charcoal text-canvas flex items-center justify-center font-bold text-xs">
                ✦
              </div>
              <span className="font-bold tracking-tight text-xl font-sans text-charcoal flex items-center gap-1.5">
                TRIPLY
                <span className="text-[10px] bg-sunset/10 text-sunset px-1.5 py-0.5 rounded font-mono font-bold">
                  INDIA
                </span>
              </span>
            </div>
            <p className="text-sm text-charcoal-muted font-medium max-w-sm">
              The modern travel planning workspace designed for exploring the rich heritage, mountains, beaches, and spiritual wonders of India.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenPlanner}
                className="px-4 py-2 rounded-full bg-charcoal text-canvas text-xs font-semibold hover:bg-sunset transition-colors shadow-2xs"
              >
                Start Planning a Trip
              </button>
            </div>
          </div>

          {/* Popular India Regions */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-charcoal uppercase tracking-wider font-bold">
              Popular Regions
            </div>
            <ul className="space-y-2 text-xs text-charcoal-muted">
              <li><a href="#discover" className="hover:text-sunset transition-colors">Royal Rajasthan (Jaipur & Udaipur)</a></li>
              <li><a href="#discover" className="hover:text-sunset transition-colors">Himalayan Escapes (Manali & Ladakh)</a></li>
              <li><a href="#discover" className="hover:text-sunset transition-colors">Coastal Goa & Andaman Islands</a></li>
              <li><a href="#discover" className="hover:text-sunset transition-colors">Spiritual Varanasi & Rishikesh</a></li>
              <li><a href="#discover" className="hover:text-sunset transition-colors">Kerala Backwaters & Munnar Hills</a></li>
            </ul>
          </div>

          {/* Product & Company Links */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono text-charcoal uppercase tracking-wider font-bold">
              Product
            </div>
            <ul className="space-y-2 text-xs text-charcoal-muted">
              <li><a href="#product-preview" className="hover:text-sunset transition-colors">Workspace Planner</a></li>
              <li><a href="#product-preview" className="hover:text-sunset transition-colors">Places Saved Wishlist</a></li>
              <li><a href="#product-preview" className="hover:text-sunset transition-colors">INR Budget Engine</a></li>
              <li><a href="#how-it-works" className="hover:text-sunset transition-colors">How It Works</a></li>
              <li><a href="#discover" className="hover:text-sunset transition-colors">Explore Inspiration</a></li>
            </ul>
          </div>

          {/* Legal / Policies */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono text-charcoal uppercase tracking-wider font-bold">
              Legal & Privacy
            </div>
            <ul className="space-y-2 text-xs text-charcoal-muted">
              <li><a href="#privacy" className="hover:text-sunset transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-sunset transition-colors">Terms of Service</a></li>
              <li><a href="#cookies" className="hover:text-sunset transition-colors">Cookie Settings</a></li>
              <li><a href="#security" className="hover:text-sunset transition-colors">Security Overview</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-faint">
          <div>
            © {new Date().getFullYear()} TRIPLY Technologies India Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Crafted with intention for Indian travel</span>
            <span>•</span>
            <button
              onClick={onOpenEasterEgg}
              className="text-sunset hover:underline font-mono flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>Secret Discovery Mode</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
