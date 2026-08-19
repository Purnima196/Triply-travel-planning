import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductPreview from './components/ProductPreview';
import Discover from './components/Discover';
import TripBuilder from './components/TripBuilder';
import BudgetCard from './components/BudgetCard';
import LittleDetails from './components/LittleDetails';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import EasterEggModal from './components/EasterEggModal';
import ItineraryModal from './components/ItineraryModal';
import AuthModal from './components/AuthModal';
import StartPlanningModal from './components/StartPlanningModal';
import ShareTripModal from './components/ShareTripModal';
import AddStopModal from './components/AddStopModal';
import Toast from './components/Toast';

import { 
  INDIA_DESTINATIONS, 
  DEFAULT_TRIP, 
  INITIAL_SAVED_PLACES 
} from './data/indiaTravelData';

export default function App() {
  // Navigation & Modal States
  const [easterEggOpen, setEasterEggOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const [startPlanningOpen, setStartPlanningOpen] = useState(false);
  const [shareTripOpen, setShareTripOpen] = useState(false);
  const [addStopModalOpen, setAddStopModalOpen] = useState(false);
  const [addStopDay, setAddStopDay] = useState(1);

  // User Authentication State
  const [currentUser, setCurrentUser] = useState(null);

  // Active Trip State
  const [currentTrip, setCurrentTrip] = useState(DEFAULT_TRIP);
  const [itineraryDays, setItineraryDays] = useState(
    INDIA_DESTINATIONS.find(d => d.id === 'jaipur')?.itineraryDays || []
  );

  // Saved Places Wishlist State
  const [savedPlaces, setSavedPlaces] = useState(INITIAL_SAVED_PLACES);

  // Global Toast Notification State
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast((prev) => (prev?.message === message ? null : prev));
    }, 3500);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Open Start Planning with destination
  const handleOpenPlanner = (destId = null) => {
    setStartPlanningOpen(true);
  };

  // Open Auth Modal
  const handleOpenAuth = (mode = 'login') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  // Auth Success Handler
  const handleAuthSuccess = (user) => {
    setCurrentUser(user);
    showToast(`Logged in as ${user.name}`, 'success');
  };

  // Logout Handler
  const handleLogout = () => {
    setCurrentUser(null);
    showToast('Logged out successfully', 'info');
  };

  // Generate Trip Handler from Planner Modal
  const handleGenerateTrip = (tripConfig) => {
    const dest = tripConfig.destination;
    const days = dest.itineraryDays && dest.itineraryDays.length > 0
      ? dest.itineraryDays.slice(0, tripConfig.durationDays || 4)
      : [
          {
            dayNumber: 1,
            title: `Arrival in ${dest.name} & Landmark Exploration`,
            dateLabel: `Day 01 • ${dest.state}`,
            stops: (dest.attractions || []).slice(0, 3).map((att, i) => ({
              time: i === 0 ? '10:00 AM' : i === 1 ? '02:00 PM' : '05:30 PM',
              title: att.name,
              location: att.location,
              note: att.description,
              cost: att.cost,
              duration: '2.0 hrs',
              image: att.image
            }))
          }
        ];

    setCurrentTrip({
      destinationId: dest.id,
      destinationName: `${dest.name}, ${dest.state}`,
      tagline: dest.tagline,
      durationDays: tripConfig.durationDays,
      dates: tripConfig.dates,
      travelers: tripConfig.travelers,
      travelerType: tripConfig.travelerType,
      preferences: tripConfig.preferences,
      totalBudget: tripConfig.totalBudget,
      currency: 'INR',
      heroImage: dest.heroImage || dest.thumbnail,
      destination: dest
    });

    setItineraryDays(days);
    showToast(`Trip generated for ${dest.name}, ${dest.state}!`, 'success');
    scrollToSection('product-preview');
  };

  // Save / Bookmark Place toggle
  const handleToggleSavePlace = (place) => {
    const existingIndex = savedPlaces.findIndex(p => p.name === place.name || p.id === place.id);
    if (existingIndex >= 0) {
      setSavedPlaces(savedPlaces.filter((_, idx) => idx !== existingIndex));
      showToast(`Removed "${place.name}" from saved places`, 'info');
    } else {
      setSavedPlaces([
        {
          id: `save-${Date.now()}`,
          name: place.name || place.title,
          location: place.location || currentTrip.destinationName,
          category: place.category || 'Sights',
          note: place.note || place.description || 'Saved Indian travel attraction',
          cost: place.cost || 'Estimated: ₹250',
          image: place.image || currentTrip.heroImage,
          rating: 'Wishlist'
        },
        ...savedPlaces
      ]);
      showToast(`Saved "${place.name || place.title}" to wishlist!`, 'saved');
    }
  };

  // Remove Saved Place
  const handleRemoveSavedPlace = (placeId) => {
    setSavedPlaces(savedPlaces.filter(p => p.id !== placeId));
    showToast('Place removed from wishlist', 'info');
  };

  // Add custom stop to Itinerary
  const handleAddStopToItinerary = (dayNumber, newStop) => {
    const dayExists = itineraryDays.some(d => d.dayNumber === dayNumber);
    let updated;
    if (dayExists) {
      updated = itineraryDays.map(day => {
        if (day.dayNumber === dayNumber) {
          return {
            ...day,
            stops: [...(day.stops || []), newStop]
          };
        }
        return day;
      });
    } else {
      updated = [
        ...itineraryDays,
        {
          dayNumber,
          title: `Day 0${dayNumber} — Custom Schedule`,
          dateLabel: `Day 0${dayNumber}`,
          stops: [newStop]
        }
      ];
    }
    setItineraryDays(updated);
    showToast(`Added "${newStop.title}" to Day 0${dayNumber}`, 'success');
  };

  return (
    <div className="min-h-screen bg-canvas text-charcoal font-sans selection:bg-sunset/20 selection:text-sunset">
      
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* 1. Header Navigation */}
      <Navbar
        onOpenEasterEgg={() => setEasterEggOpen(true)}
        onOpenPlanner={() => handleOpenPlanner()}
        onOpenAuth={(mode) => handleOpenAuth(mode)}
        currentUser={currentUser}
        onLogout={handleLogout}
        savedCount={savedPlaces.length}
        onOpenSavedPlaces={() => {
          scrollToSection('product-preview');
        }}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onPlanClick={() => handleOpenPlanner()}
          onExploreClick={() => scrollToSection('discover')}
        />

        {/* 2. Live Product Workspace Section */}
        <ProductPreview
          trip={currentTrip}
          savedPlaces={savedPlaces}
          onToggleSavePlace={handleToggleSavePlace}
          onRemoveSavedPlace={handleRemoveSavedPlace}
          onOpenShare={() => setShareTripOpen(true)}
          onOpenPlanner={() => setStartPlanningOpen(true)}
          onOpenAddStop={(dayNum) => {
            setAddStopDay(dayNum || 1);
            setAddStopModalOpen(true);
          }}
          itineraryDays={itineraryDays}
          onUpdateItineraryDays={(newDays) => setItineraryDays(newDays)}
          showToast={showToast}
        />

        {/* 3. Discover / Explore Inspiration Section */}
        <Discover
          onSelectDestination={(dest) => setSelectedDestination(dest)}
          onStartPlanningWithCategory={(dest) => {
            handleGenerateTrip({
              destination: dest,
              durationDays: 4,
              dates: 'Oct 15 – Oct 19',
              travelers: 2,
              travelerType: 'Couple',
              preferences: dest.tags || ['Heritage', 'Food'],
              totalBudget: (dest.budgetEstimate || 25000) * 1.5
            });
          }}
        />

        {/* 4. Trip Building 3-Step Journey Section */}
        <TripBuilder />

        {/* 5. Budget Feature Section */}
        <BudgetCard />

        {/* 6. The Little Details Section */}
        <LittleDetails />

        {/* 7. Final Closing CTA Section */}
        <FinalCTA
          onStartPlanning={(input) => {
            const matched = INDIA_DESTINATIONS.find(
              d => d.name.toLowerCase().includes(input.toLowerCase()) || 
                   d.state.toLowerCase().includes(input.toLowerCase())
            ) || INDIA_DESTINATIONS[0];
            
            handleGenerateTrip({
              destination: matched,
              durationDays: 4,
              dates: 'Nov 10 – Nov 14',
              travelers: 2,
              travelerType: 'Couple',
              preferences: matched.tags || ['Heritage', 'Food'],
              totalBudget: 45000
            });
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenEasterEgg={() => setEasterEggOpen(true)}
        onOpenPlanner={() => handleOpenPlanner()}
      />

      {/* Interactive Modals */}
      
      {/* 1. Sign Up & Login Modal */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />

      {/* 2. Start Planning Modal */}
      <StartPlanningModal
        isOpen={startPlanningOpen}
        onClose={() => setStartPlanningOpen(false)}
        onGenerateTrip={handleGenerateTrip}
        initialDestinationId={currentTrip.destinationId || 'jaipur'}
      />

      {/* 3. Share Trip Modal */}
      <ShareTripModal
        isOpen={shareTripOpen}
        onClose={() => setShareTripOpen(false)}
        tripData={currentTrip}
      />

      {/* 4. Add Custom Stop Modal */}
      <AddStopModal
        isOpen={addStopModalOpen}
        dayNumber={addStopDay}
        onClose={() => setAddStopModalOpen(false)}
        onAddStop={handleAddStopToItinerary}
      />

      {/* 5. Easter Egg Secret Destination Randomizer */}
      <EasterEggModal
        isOpen={easterEggOpen}
        onClose={() => setEasterEggOpen(false)}
        onSelectDestination={(dest) => {
          const matched = INDIA_DESTINATIONS.find(d => d.id === dest.id) || dest;
          handleGenerateTrip({
            destination: matched,
            durationDays: 4,
            dates: 'Nov 12 – Nov 16',
            travelers: 2,
            travelerType: 'Couple',
            preferences: matched.tags || ['Heritage', 'Nature'],
            totalBudget: 45000
          });
        }}
      />

      {/* 6. Destination Blueprint Details Modal */}
      <ItineraryModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onStartBuilding={(dest) => {
          setSelectedDestination(null);
          handleGenerateTrip({
            destination: dest,
            durationDays: 4,
            dates: 'Nov 12 – Nov 16',
            travelers: 2,
            travelerType: 'Couple',
            preferences: dest.tags || ['Heritage', 'Nature'],
            totalBudget: 45000
          });
        }}
      />

    </div>
  );
}
