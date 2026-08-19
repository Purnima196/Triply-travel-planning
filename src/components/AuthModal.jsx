import React, { useState } from 'react';
import { X, Mail, Lock, User, Sparkles, ArrowRight, CheckCircle, Shield } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, initialMode = 'login', onAuthSuccess }) {
  const [mode, setMode] = useState(initialMode); // 'login' or 'signup'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    travelStyle: 'Curated & Relaxed'
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate brief network authentication
    setTimeout(() => {
      setLoading(false);
      const user = {
        name: formData.name || (mode === 'login' ? (formData.email.split('@')[0] || 'Aarav Sharma') : 'Priya Verma'),
        email: formData.email || 'traveler@triply.in',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        travelStyle: formData.travelStyle
      };
      
      setSuccessMsg(mode === 'login' ? `Welcome back, ${user.name}!` : `Account created! Welcome to Triply, ${user.name}!`);
      
      setTimeout(() => {
        setSuccessMsg('');
        onAuthSuccess(user);
        onClose();
      }, 1000);
    }, 600);
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

        {/* Header Badge & Title */}
        <div className="text-left space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sunset/10 text-sunset text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{mode === 'login' ? 'WELCOME BACK' : 'JOIN TRIPLY INDIA'}</span>
          </div>
          <h3 className="font-editorial text-3xl font-semibold text-charcoal">
            {mode === 'login' ? 'Log in to your workspace' : 'Create your traveler account'}
          </h3>
          <p className="text-xs text-charcoal-muted">
            {mode === 'login'
              ? 'Access all your saved Indian itineraries, bookmarks & custom budgets.'
              : 'Start planning unforgettable escapes across India with zero spreadsheet chaos.'}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex bg-canvas-muted p-1 rounded-2xl border border-charcoal/5">
          <button
            type="button"
            onClick={() => { setMode('login'); setSuccessMsg(''); }}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all ${
              mode === 'login'
                ? 'bg-canvas-pure text-charcoal shadow-2xs'
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => { setMode('signup'); setSuccessMsg(''); }}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all ${
              mode === 'signup'
                ? 'bg-canvas-pure text-charcoal shadow-2xs'
                : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            Sign up
          </button>
        </div>

        {/* Feedback Alert */}
        {successMsg && (
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-in zoom-in-95">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-medium">{successMsg}</span>
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {mode === 'signup' && (
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-charcoal block">Full Name</label>
              <div className="relative flex items-center">
                <User className="w-4 h-4 text-charcoal-muted absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-canvas-muted/40 border border-charcoal/10 text-charcoal text-sm placeholder-charcoal-muted/50 focus:outline-none focus:ring-2 focus:ring-sunset/40 focus:border-sunset"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-charcoal block">Email Address</label>
            <div className="relative flex items-center">
              <Mail className="w-4 h-4 text-charcoal-muted absolute left-3.5 pointer-events-none" />
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-canvas-muted/40 border border-charcoal/10 text-charcoal text-sm placeholder-charcoal-muted/50 focus:outline-none focus:ring-2 focus:ring-sunset/40 focus:border-sunset"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-charcoal block">Password</label>
              {mode === 'login' && (
                <button
                  type="button"
                  onClick={() => alert('Demo Reset Link: In demo mode, simply click Log in.')}
                  className="text-[11px] text-sunset hover:underline font-medium"
                >
                  Forgot password?
                </button>
              )}
            </div>
            <div className="relative flex items-center">
              <Lock className="w-4 h-4 text-charcoal-muted absolute left-3.5 pointer-events-none" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-canvas-muted/40 border border-charcoal/10 text-charcoal text-sm placeholder-charcoal-muted/50 focus:outline-none focus:ring-2 focus:ring-sunset/40 focus:border-sunset"
              />
            </div>
          </div>

          {mode === 'signup' && (
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-charcoal block">Preferred Travel Style</label>
              <select
                value={formData.travelStyle}
                onChange={(e) => setFormData({ ...formData, travelStyle: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-muted/40 border border-charcoal/10 text-charcoal text-xs focus:outline-none focus:ring-2 focus:ring-sunset/40 focus:border-sunset"
              >
                <option>Curated & Relaxed</option>
                <option>High Adventure & Trekking</option>
                <option>Heritage & Royal Culture</option>
                <option>Spiritual & Yoga Retreat</option>
                <option>Coastal & Beach Exploration</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full bg-charcoal text-canvas hover:bg-sunset transition-colors text-sm font-semibold flex items-center justify-center gap-2 shadow-sm active:scale-95 disabled:opacity-70 mt-2"
          >
            {loading ? (
              <span className="animate-pulse">Authenticating...</span>
            ) : (
              <>
                <span>{mode === 'login' ? 'Sign in to Workspace' : 'Create Free Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Demo Quick Logins for fast evaluation */}
        <div className="pt-2 border-t border-charcoal/10 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-charcoal-muted">
            <span>Quick Demo Access:</span>
            <button
              type="button"
              onClick={() => {
                setFormData({
                  name: 'Aarav Sharma',
                  email: 'aarav@triply.in',
                  password: 'password123',
                  travelStyle: 'Curated & Relaxed'
                });
              }}
              className="text-sunset hover:underline font-medium"
            >
              Fill Demo Credentials
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-charcoal-faint justify-center">
            <Shield className="w-3.5 h-3.5 text-sage" />
            <span>Secure 256-bit encrypted trip sync</span>
          </div>
        </div>

      </div>
    </div>
  );
}
