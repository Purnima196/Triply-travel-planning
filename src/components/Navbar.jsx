import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowRight, Sparkles, User, LogOut, Heart, Bookmark, Calendar } from 'lucide-react';

export default function Navbar({ 
  onOpenEasterEgg, 
  onOpenPlanner, 
  onOpenAuth,
  currentUser,
  onLogout,
  savedCount = 6,
  onOpenSavedPlaces
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Easter Egg trigger: 3 clicks on logo
  const handleLogoClick = () => {
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);
    if (newCount >= 3) {
      setLogoClickCount(0);
      onOpenEasterEgg();
    }
    setTimeout(() => setLogoClickCount(0), 2000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-charcoal/5 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="group flex items-center gap-2 text-left focus:outline-none focus:ring-2 focus:ring-sunset/40 rounded-lg p-1 transition-transform active:scale-95"
            title="Click 3 times for secret randomizer"
          >
            <div className="w-8 h-8 rounded-full bg-charcoal text-canvas flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-sunset transition-colors duration-300">
              ✦
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-xl text-charcoal font-sans flex items-center gap-1">
                TRIPLY
                <span className="text-[10px] bg-sunset/10 text-sunset px-1.5 py-0.5 rounded font-mono font-bold tracking-wider">
                  INDIA
                </span>
                {logoClickCount > 0 && (
                  <span className="text-[10px] bg-sunset/10 text-sunset px-1.5 py-0.5 rounded-full font-mono animate-pulse">
                    {logoClickCount}/3
                  </span>
                )}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal-muted">
            <a
              href="#discover"
              className="hover:text-charcoal transition-colors hover:underline underline-offset-4 decoration-sunset/60"
            >
              Explore Inspiration
            </a>
            <a
              href="#product-preview"
              className="hover:text-charcoal transition-colors hover:underline underline-offset-4 decoration-sunset/60 flex items-center gap-1.5"
            >
              <span>Workspace</span>
              <span className="text-[10px] bg-sage/10 text-sage-dark px-1.5 py-0.5 rounded-full font-mono font-semibold">
                Live
              </span>
            </a>
            <a
              href="#how-it-works"
              className="hover:text-charcoal transition-colors hover:underline underline-offset-4 decoration-sunset/60"
            >
              How it works
            </a>
          </nav>

          {/* Right Header Actions: Sign Up | Login | Start Planning */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* User Profile or Sign Up / Login */}
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-canvas-muted hover:bg-canvas-subtle border border-charcoal/10 text-xs font-semibold text-charcoal transition-colors"
                >
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-6 h-6 rounded-full object-cover border border-sunset/30"
                  />
                  <span>{currentUser.name.split(' ')[0]}</span>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-canvas-pure rounded-2xl border border-charcoal/10 shadow-editorial p-2 space-y-1 z-50 animate-in fade-in zoom-in-95">
                    <div className="px-3 py-2 border-b border-charcoal/5">
                      <div className="font-semibold text-xs text-charcoal">{currentUser.name}</div>
                      <div className="text-[11px] text-charcoal-muted truncate">{currentUser.email}</div>
                    </div>
                    <button
                      onClick={() => {
                        setUserDropdownOpen(false);
                        onOpenSavedPlaces();
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-xl text-xs text-charcoal hover:bg-canvas-muted flex items-center gap-2"
                    >
                      <Bookmark className="w-3.5 h-3.5 text-sunset" />
                      <span>Saved Places ({savedCount})</span>
                    </button>
                    <button
                      onClick={() => {
                        setUserDropdownOpen(false);
                        onLogout();
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-xl text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-charcoal hover:text-sunset transition-colors"
                >
                  Sign Up
                </button>
                <span className="text-charcoal/20 text-xs">|</span>
                <button
                  onClick={() => onOpenAuth('login')}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-charcoal hover:text-sunset transition-colors"
                >
                  Login
                </button>
              </div>
            )}

            {/* Start Planning Button */}
            <button
              onClick={onOpenPlanner}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-canvas text-xs font-semibold hover:bg-sunset transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 ml-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-sunset" />
              <span>Start Planning</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenPlanner}
              className="px-3.5 py-1.5 rounded-full bg-charcoal text-canvas text-xs font-semibold hover:bg-sunset transition-colors"
            >
              Plan
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-charcoal hover:bg-canvas-muted transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-canvas/95 backdrop-blur-xl border-b border-charcoal/10 px-6 pt-4 pb-8 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 font-medium text-base text-charcoal text-left">
            <a
              href="#discover"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-charcoal/5 hover:text-sunset transition-colors"
            >
              Explore Inspiration
            </a>
            <a
              href="#product-preview"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-charcoal/5 hover:text-sunset transition-colors flex items-center justify-between"
            >
              <span>Workspace Planner</span>
              <span className="text-xs bg-sage/10 text-sage-dark px-2 py-0.5 rounded-full font-mono">Live</span>
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-charcoal/5 hover:text-sunset transition-colors"
            >
              How it works
            </a>
          </nav>

          {/* Mobile Auth & CTA Buttons */}
          <div className="pt-2 space-y-2.5">
            {currentUser ? (
              <div className="p-3 rounded-2xl bg-canvas-muted flex items-center justify-between">
                <div className="flex items-center gap-2 text-left">
                  <img src={currentUser.avatar} alt={currentUser.name} className="w-7 h-7 rounded-full object-cover" />
                  <div>
                    <div className="text-xs font-semibold text-charcoal">{currentUser.name}</div>
                    <div className="text-[10px] text-charcoal-muted">{currentUser.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs text-rose-600 font-medium hover:underline"
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('login');
                  }}
                  className="py-2.5 rounded-full border border-charcoal/20 text-charcoal font-semibold text-xs hover:bg-canvas-muted"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('signup');
                  }}
                  className="py-2.5 rounded-full bg-canvas-muted text-charcoal font-semibold text-xs hover:bg-canvas-subtle"
                >
                  Sign Up
                </button>
              </div>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanner();
              }}
              className="w-full py-3 rounded-full bg-charcoal text-canvas font-semibold text-xs flex items-center justify-center gap-2 hover:bg-sunset transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-sunset" />
              <span>Start Planning India Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
