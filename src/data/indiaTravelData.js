// Comprehensive India Travel Dataset for TRIPLY
// Contains destinations, detailed attraction stops with photos, day-by-day itineraries, categories, and curated inspiration.

export const INDIA_DESTINATIONS = [
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    tagline: 'The Pink City of Palaces, Forts & Royal Splendor',
    descriptor: 'Grand Rajput fortresses, terracotta facades, vibrant bazaars, and opulent royal history.',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'October – March',
    idealDays: '4–5 Days',
    idealPace: 'Heritage & Culture',
    category: 'Royal Rajasthan',
    tags: ['Heritage', 'Photography', 'Food', 'Shopping', 'Palaces'],
    budgetEstimate: 24500,
    attractions: [
      {
        id: 'jpr-amber-fort',
        name: 'Amber Fort & Palace',
        location: 'Amer, Jaipur',
        category: 'Heritage',
        description: 'Majestic 16th-century hilltop fortress featuring the breathtaking Sheesh Mahal (Mirror Palace) and panoramic Maota Lake vistas.',
        suggestedActivity: 'Morning heritage walk & mirror hall photography',
        visitingTime: '08:30 AM – 11:30 AM (3 hrs)',
        cost: '₹550 per person',
        costValue: 550,
        image: 'https://images.unsplash.com/photo-1603288940300-4b95383561a0?auto=format&fit=crop&w=800&q=80',
        rating: 4.8
      },
      {
        id: 'jpr-hawa-mahal',
        name: 'Hawa Mahal (Palace of Winds)',
        location: 'Badi Choupad, Jaipur',
        category: 'Heritage',
        description: 'Iconic 5-story pink honeycomb facade with 953 ornate jharokhas built for royal women to observe street festivals in privacy.',
        suggestedActivity: 'Sunrise golden hour shoot from opposite cafe',
        visitingTime: '08:00 AM – 09:30 AM (1.5 hrs)',
        cost: '₹200 per person',
        costValue: 200,
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      },
      {
        id: 'jpr-city-palace',
        name: 'City Palace & Museum',
        location: 'Old City, Jaipur',
        category: 'Heritage',
        description: 'Splendid fusion of Rajput and Mughal architecture housing royal courtyards, the Peacock Gate, and ancient textiles.',
        suggestedActivity: 'Pritam Niwas Chowk gate tour & museum visit',
        visitingTime: '01:30 PM – 04:00 PM (2.5 hrs)',
        cost: '₹700 per person',
        costValue: 700,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        rating: 4.7
      },
      {
        id: 'jpr-jantar-mantar',
        name: 'Jantar Mantar Observatory',
        location: 'Near City Palace, Jaipur',
        category: 'Heritage',
        description: 'UNESCO World Heritage site with 19 astronomical instruments including the world’s largest stone sundial built in 1734.',
        suggestedActivity: 'Astronomical calculation guided walkthrough',
        visitingTime: '11:30 AM – 01:00 PM (1.5 hrs)',
        cost: '₹200 per person',
        costValue: 200,
        image: 'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?auto=format&fit=crop&w=800&q=80',
        rating: 4.6
      },
      {
        id: 'jpr-nahargarh',
        name: 'Nahargarh Fort Sunset Point',
        location: 'Aravalli Hills, Jaipur',
        category: 'Nature',
        description: 'Hilltop fortress perched on the edge of the Aravalli hills offering spectacular panoramic sunset views over the entire Pink City.',
        suggestedActivity: 'Sunset tea overlooking the illuminated cityscape',
        visitingTime: '05:00 PM – 07:00 PM (2 hrs)',
        cost: '₹200 per person',
        costValue: 200,
        image: 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&w=800&q=80',
        rating: 4.8
      },
      {
        id: 'jpr-johari-bazaar',
        name: 'Johari & Bapu Bazaars',
        location: 'Walled City, Jaipur',
        category: 'Shopping',
        description: 'Legendary shopping streets famous for authentic Kundan jewelry, handcrafted Jaipuri quilts, Bandhani textiles, and mojris.',
        suggestedActivity: 'Textile browsing, lac bangle craft & street snack trail',
        visitingTime: '06:00 PM – 08:30 PM (2.5 hrs)',
        cost: '₹1,500 shopping budget',
        costValue: 1500,
        image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80',
        rating: 4.7
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Arrival, Regal Old City & Palace of Winds',
        dateLabel: 'Day 01 • Pink City Gateway',
        stops: [
          {
            time: '10:00 AM',
            title: 'Hawa Mahal Morning Golden Light',
            location: 'Badi Choupad',
            note: 'Capture the famous honeycomb facade and sip Kullad Chai from Wind View Cafe.',
            cost: '₹200',
            duration: '1.5 hrs',
            image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '12:00 PM',
            title: 'City Palace & Royal Courtyards',
            location: 'Old City',
            note: 'Stroll through Mubarak Mahal, Peacock Gate courtyards and the Maharaja Sawai Man Singh II Museum.',
            cost: '₹700',
            duration: '2.5 hrs',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '03:30 PM',
            title: 'Jantar Mantar Sundial Wonder',
            location: 'Near City Palace',
            note: 'Discover ancient stone sundials aligning with planetary constellations.',
            cost: '₹200',
            duration: '1.5 hrs',
            image: 'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '07:30 PM',
            title: 'Authentic Rajasthani Thali at Chokhi Dhani',
            location: 'Tonk Road',
            note: 'Dal Baati Churma, Gatte ki Sabzi, puppet shows and traditional folk dance.',
            cost: '₹950',
            duration: '2.5 hrs',
            image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Fortresses in the Sky & Royal Fort Exploration',
        dateLabel: 'Day 02 • Hilltop Forts & Lake Views',
        stops: [
          {
            time: '08:30 AM',
            title: 'Amber Fort & Sheesh Mahal',
            location: 'Amer',
            note: 'Marvel at thousands of convex Belgian mirrors illuminating the royal Diwan-e-Khas.',
            cost: '₹550',
            duration: '3.0 hrs',
            image: 'https://images.unsplash.com/photo-1603288940300-4b95383561a0?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '01:00 PM',
            title: 'Jal Mahal Lake Viewpoint',
            location: 'Man Sagar Lake',
            note: 'Admire the floating 5-story palace submerged in the serene waters of Man Sagar Lake.',
            cost: 'Free View',
            duration: '1.0 hr',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '03:00 PM',
            title: 'Jaigarh Fort & Jaivana Cannon',
            location: 'Cheel ka Teela',
            note: 'Inspect the world’s largest wheeled cannon forged in 1720 and the defensive underground armory.',
            cost: '₹200',
            duration: '1.5 hrs',
            image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '05:30 PM',
            title: 'Sunset at Nahargarh Fort Padao Cafe',
            location: 'Nahargarh Ridge',
            note: 'Watch the entire Pink City glow golden from the high battlements at dusk.',
            cost: '₹350',
            duration: '2.0 hrs',
            image: 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Stepwells, Sacred Temples & Vibrant Bazaars',
        dateLabel: 'Day 03 • Hidden Gems & Craft Markets',
        stops: [
          {
            time: '09:00 AM',
            title: 'Panna Meena ka Kund Stepwell',
            location: 'Amer Village',
            note: 'Symmetrical geometric yellow-ochre steps built in the 16th century.',
            cost: 'Free',
            duration: '1.0 hr',
            image: 'https://images.unsplash.com/photo-1624806992066-5ffcf7ca186b?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '11:00 AM',
            title: 'Albert Hall Museum & Ram Niwas Garden',
            location: 'Adarsh Nagar',
            note: 'Indo-Saracenic masterpiece exhibiting royal pottery, metalware and Persian carpets.',
            cost: '₹300',
            duration: '2.0 hrs',
            image: 'https://images.unsplash.com/photo-1609137144820-21a473fa58a6?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '04:30 PM',
            title: 'Johari & Bapu Bazaar Shopping Trail',
            location: 'Pink City Bazaars',
            note: 'Shop authentic blue pottery, handmade jootis, block-print cottons and silver jewelry.',
            cost: '₹1,500',
            duration: '3.0 hrs',
            image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'manali',
    name: 'Manali',
    state: 'Himachal Pradesh',
    tagline: 'Snow-capped Peaks, Pine Forests & Himalayan Thrills',
    descriptor: 'Towering cedar woods, roaring Beas river streams, high alpine passes, and mountain cafe culture.',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'March – June & Dec – Feb',
    idealDays: '5–6 Days',
    idealPace: 'Mountains & Adventure',
    category: 'Himalayan Escapes',
    tags: ['Mountains', 'Adventure', 'Nature', 'Snow', 'Relaxation'],
    budgetEstimate: 28000,
    attractions: [
      {
        id: 'mnl-solang',
        name: 'Solang Valley',
        location: 'Solang, Manali',
        category: 'Adventure',
        description: 'Premier adventure hub offering paragliding over alpine meadows, zorbing, ATV rides, and winter ski slopes.',
        suggestedActivity: 'Tandem paragliding flight with Pir Panjal mountain backdrop',
        visitingTime: '09:00 AM – 01:00 PM (4 hrs)',
        cost: '₹2,500 adventure pass',
        costValue: 2500,
        image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=800&q=80',
        rating: 4.8
      },
      {
        id: 'mnl-rohtang',
        name: 'Rohtang Pass & Atal Tunnel',
        location: 'Pir Panjal Range (13,058 ft)',
        category: 'Adventure',
        description: 'High mountain pass connecting Kullu to Lahaul Spiti, featuring year-round glaciers and dramatic Himalayan horizons.',
        suggestedActivity: 'Snow activities, glacier photography & Sissu waterfall excursion',
        visitingTime: '07:00 AM – 02:00 PM (7 hrs)',
        cost: '₹1,200 permit + cab',
        costValue: 1200,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      },
      {
        id: 'mnl-hidimba',
        name: 'Hidimba Devi Temple',
        location: 'Dhungri Forest, Manali',
        category: 'Spiritual',
        description: '16th-century pagoda-style wooden temple nestled amidst towering giant deodar cedar forests.',
        suggestedActivity: 'Forest stroll, cedar woodland photography & temple blessings',
        visitingTime: '08:30 AM – 10:30 AM (2 hrs)',
        cost: 'Free entry',
        costValue: 0,
        image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
        rating: 4.7
      },
      {
        id: 'mnl-old-manali',
        name: 'Old Manali & River Cafes',
        location: 'Old Manali Village',
        category: 'Food',
        description: 'Charming stone-and-wood Himachali village with bohemian riverside cafes, live acoustic music, and Israeli bakeries.',
        suggestedActivity: 'Woodfired trout lunch, apple crumble, and artisan market browsing',
        visitingTime: '03:00 PM – 07:00 PM (4 hrs)',
        cost: '₹800 cafe dining',
        costValue: 800,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        rating: 4.7
      },
      {
        id: 'mnl-jogini-falls',
        name: 'Jogini Waterfall Trek',
        location: 'Vashisht Village',
        category: 'Nature',
        description: 'Scenic 4km pine trail passing apple orchards and culminating at a 150-foot cascading mountain waterfall.',
        suggestedActivity: 'Morning nature hike & natural pool dipping',
        visitingTime: '08:00 AM – 12:00 PM (4 hrs)',
        cost: 'Free trek',
        costValue: 0,
        image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      },
      {
        id: 'mnl-mall-road',
        name: 'Mall Road & Tibetan Monasteries',
        location: 'City Center, Manali',
        category: 'Shopping',
        description: 'Lively pedestrian promenade lined with Kullu shawl emporiums, handmade wooden artifacts, and peaceful Buddhist gompas.',
        suggestedActivity: 'Evening shopping, momos tasting & spinning prayer wheels',
        visitingTime: '06:00 PM – 09:00 PM (3 hrs)',
        cost: '₹1,000 shopping budget',
        costValue: 1000,
        image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
        rating: 4.5
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Arrival in Manali, Cedar Woods & Hidimba Temple',
        dateLabel: 'Day 01 • Valley Acclimatization',
        stops: [
          {
            time: '11:00 AM',
            title: 'Hidimba Devi Temple Walk',
            location: 'Dhungri Forest',
            note: 'Walk beneath centuries-old deodars and explore the intricately carved wooden sanctuary.',
            cost: 'Free',
            duration: '2.0 hrs',
            image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '02:00 PM',
            title: 'Old Manali Bohemian Cafe Trail',
            location: 'Old Manali',
            note: 'Enjoy wood-fired thin crust pizza, fresh mountain trout, and freshly squeezed local apple cider.',
            cost: '₹750',
            duration: '2.5 hrs',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '05:30 PM',
            title: 'Vashisht Hot Water Sulphur Springs',
            location: 'Vashisht Village',
            note: 'Soak in the rejuvenating natural thermal mineral springs with sacred temple views.',
            cost: 'Free',
            duration: '1.5 hrs',
            image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Solang Valley Thrills & Paragliding Flights',
        dateLabel: 'Day 02 • High Adventure & Sky Gliding',
        stops: [
          {
            time: '08:30 AM',
            title: 'Solang Valley Paragliding',
            location: 'Solang',
            note: 'Glide high over lush green alpine valleys with certified pilots and HD GoPro recording.',
            cost: '₹2,500',
            duration: '3.5 hrs',
            image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '01:30 PM',
            title: 'Anjani Mahadev Waterfall Walk',
            location: 'Near Solang',
            note: 'Short 2km pony or trek trail leading to the natural ice-lingam waterfall shrine.',
            cost: '₹150',
            duration: '2.0 hrs',
            image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '06:00 PM',
            title: 'Mall Road Tibetan Food & Shawl Shopping',
            location: 'Mall Road',
            note: 'Savor steaming thukpa and momos while shopping for authentic Kullu woolens.',
            cost: '₹600',
            duration: '2.5 hrs',
            image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Atal Tunnel, Lahaul Valley & Sissu Glacier Waterfalls',
        dateLabel: 'Day 03 • Across the Great Himalayan Divide',
        stops: [
          {
            time: '08:00 AM',
            title: 'Drive through Atal Tunnel (9.02 km)',
            location: 'Pir Panjal Underpass',
            note: 'Cross the world’s longest highway tunnel above 10,000 feet into trans-Himalayan Lahaul.',
            cost: '₹400 cab share',
            duration: '1.5 hrs',
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '10:30 AM',
            title: 'Sissu Waterfall & Chandra River Banks',
            location: 'Sissu, Lahaul',
            note: 'Behold the massive glacial waterfall plunging into the turquoise Chandra river.',
            cost: 'Free',
            duration: '3.0 hrs',
            image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '04:00 PM',
            title: 'Campfire & Stargazing in Naggar Heritage Village',
            location: 'Naggar',
            note: 'Visit the 500-year-old wooden Naggar Castle and enjoy hot Himachali Siddu bread.',
            cost: '₹500',
            duration: '3.0 hrs',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    tagline: 'Sun-drenched Shores, Portuguese Villas & Coastal Bliss',
    descriptor: 'Golden sands, swaying coconut palms, 17th-century baroque churches, seafood shacks, and vibrant beach sunsets.',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'November – April',
    idealDays: '4–7 Days',
    idealPace: 'Beach & Relaxation',
    category: 'Beach Holidays',
    tags: ['Beaches', 'Food', 'Relaxation', 'Heritage', 'Nightlife'],
    budgetEstimate: 32000,
    attractions: [
      {
        id: 'goa-baga',
        name: 'Baga & Calangute Beaches',
        location: 'North Goa',
        category: 'Beaches',
        description: 'Vibrant golden sand strip buzzing with parasailing, jet-ski water sports, beach shacks, and live seaside music.',
        suggestedActivity: 'Morning water sports & evening candlelit shack dining',
        visitingTime: '08:00 AM – 12:00 PM (4 hrs)',
        cost: '₹1,500 water sports',
        costValue: 1500,
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
        rating: 4.7
      },
      {
        id: 'goa-aguada',
        name: 'Fort Aguada & Lighthouse',
        location: 'Candolim, North Goa',
        category: 'Heritage',
        description: 'Well-preserved 17th-century Portuguese fortress overlooking the vast Arabian Sea with a historic 4-storey lighthouse.',
        suggestedActivity: 'Ocean panoramic photography and sunset rampart walk',
        visitingTime: '04:00 PM – 06:30 PM (2.5 hrs)',
        cost: '₹50 per person',
        costValue: 50,
        image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=800&q=80',
        rating: 4.8
      },
      {
        id: 'goa-palolem',
        name: 'Palolem & Butterfly Beach',
        location: 'Canacona, South Goa',
        category: 'Beaches',
        description: 'Picturesque crescent bay fringed with coconut palms, colorful eco-huts, calm turquoise swimming waters, and dolphin boat cruises.',
        suggestedActivity: 'Kayak into Butterfly Beach and relax at beach huts',
        visitingTime: '09:00 AM – 03:00 PM (6 hrs)',
        cost: '₹800 kayak & boat',
        costValue: 800,
        image: 'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      },
      {
        id: 'goa-chapora',
        name: 'Chapora Fort & Vagator Beach',
        location: 'Vagator, North Goa',
        category: 'Heritage',
        description: 'Famous hilltop fort overlooking the dramatic cliffs of Vagator Beach and the Ozran coastline, made famous by Dil Chahta Hai.',
        suggestedActivity: 'Dusk cliff sunset watch with chilled kokum feni',
        visitingTime: '05:00 PM – 07:00 PM (2 hrs)',
        cost: 'Free entry',
        costValue: 0,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        rating: 4.7
      },
      {
        id: 'goa-fontainhas',
        name: 'Fontainhas Latin Quarter',
        location: 'Panaji, Central Goa',
        category: 'Heritage',
        description: 'Asia’s largest Latin Quarter with brightly painted Portuguese heritage homes, wrought-iron balconies, and quaint bakeries.',
        suggestedActivity: 'Heritage architecture photo walk & Bebinca dessert tasting',
        visitingTime: '03:30 PM – 06:00 PM (2.5 hrs)',
        cost: 'Free walk',
        costValue: 0,
        image: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67270?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      },
      {
        id: 'goa-dudhsagar',
        name: 'Dudhsagar Waterfalls',
        location: 'Bhagwan Mahaveer Sanctuary',
        category: 'Nature',
        description: 'Spectacular four-tiered 310m waterfall resembling a sea of milk, surrounded by dense Western Ghats jungle and wildlife.',
        suggestedActivity: 'Jeep safari through forest rivers & natural pool swimming',
        visitingTime: '07:30 AM – 02:00 PM (6.5 hrs)',
        cost: '₹1,200 jeep safari',
        costValue: 1200,
        image: 'https://images.unsplash.com/photo-1582650625119-3a31f841807d?auto=format&fit=crop&w=800&q=80',
        rating: 4.8
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'North Goa Sunshine, Fort Aguada & Baga Shack Life',
        dateLabel: 'Day 01 • Coastal Ramparts & Waves',
        stops: [
          {
            time: '10:00 AM',
            title: 'Fort Aguada Ramparts & Lighthouse',
            location: 'Candolim',
            note: 'Explore 400-year-old Portuguese stone bastion jutting into the Arabian Sea.',
            cost: '₹50',
            duration: '2.0 hrs',
            image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '01:00 PM',
            title: 'Fresh Goan Prawn Curry Lunch at Calangute',
            location: 'Calangute Beach',
            note: 'Enjoy coconut-infused fish curry, prawn balchao, and poi bread right by the shore.',
            cost: '₹850',
            duration: '2.0 hrs',
            image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '04:30 PM',
            title: 'Baga Water Sports & Sunset Shack Music',
            location: 'Baga Beach',
            note: 'Jet skiing and parasailing followed by sunset cocktails with live acoustic musicians.',
            cost: '₹1,500',
            duration: '3.5 hrs',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Latin Quarter Heritage, Churches & Chapora Sunset',
        dateLabel: 'Day 02 • Portuguese Colors & Cliff Sunsets',
        stops: [
          {
            time: '09:30 AM',
            title: 'Basilica of Bom Jesus & Old Goa Churches',
            location: 'Old Goa',
            note: 'UNESCO World Heritage 16th-century baroque cathedral holding the sacred relics of St. Francis Xavier.',
            cost: 'Free',
            duration: '2.5 hrs',
            image: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67270?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '01:00 PM',
            title: 'Fontainhas Heritage Quarter Walking Tour',
            location: 'Panaji',
            note: 'Stroll cobblestone alleys flanked by pastel yellow, indigo, and terracotta Portuguese villas.',
            cost: 'Free',
            duration: '2.5 hrs',
            image: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67270?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '05:30 PM',
            title: 'Chapora Fort Cliff Sunset over Vagator',
            location: 'Vagator Cliff',
            note: 'Panoramic views over the red laterite cliffs of Vagator beach as the sun sinks into the sea.',
            cost: 'Free',
            duration: '2.0 hrs',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'South Goa Serenity: Palolem Crescent & Kayaking',
        dateLabel: 'Day 03 • Tropical Palms & Turquoise Waters',
        stops: [
          {
            time: '09:00 AM',
            title: 'Palolem Beach Sea Kayaking to Butterfly Island',
            location: 'Canacona',
            note: 'Paddle through gentle calm waters and spot playful dolphins in their natural coastal habitat.',
            cost: '₹800',
            duration: '3.5 hrs',
            image: 'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '02:00 PM',
            title: 'Cabo de Rama Fort Sea Cliffs',
            location: 'Cabo de Rama',
            note: 'Ancient secluded fortress perched dramatically on sheer coastal bluffs overlooking wild surf.',
            cost: 'Free',
            duration: '2.5 hrs',
            image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    tagline: 'The Eternal Spiritual City on the Sacred Ganges',
    descriptor: 'Ancient river ghats, mesmerizing evening Ganga Aarti ceremonies, labyrinthine alleys, and millennia of unbroken spiritual devotion.',
    heroImage: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'October – March',
    idealDays: '3–4 Days',
    idealPace: 'Spiritual & Culture',
    category: 'Spiritual Journeys',
    tags: ['Spiritual', 'Heritage', 'Culture', 'Photography', 'Food'],
    budgetEstimate: 16500,
    attractions: [
      {
        id: 'vns-aarti',
        name: 'Dashashwamedh Ghat & Evening Ganga Aarti',
        location: 'Dashashwamedh Ghat',
        category: 'Spiritual',
        description: 'Soul-stirring nightly spiritual ceremony with synchronised brass lamps, chanting, incense, and floating diya offerings.',
        suggestedActivity: 'Witness the Aarti from a traditional wooden boat on the river',
        visitingTime: '06:00 PM – 08:00 PM (2 hrs)',
        cost: '₹400 boat ticket',
        costValue: 400,
        image: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=80',
        rating: 5.0
      },
      {
        id: 'vns-boat',
        name: 'Sunrise Ganges Boat Ride (Assi to Manikarnika)',
        location: 'Assi Ghat',
        category: 'Spiritual',
        description: 'Magical dawn rowboat journey watching thousands of pilgrims, ancient sandstone palaces, and morning rituals illuminated in gold.',
        suggestedActivity: 'Dawn photography & releasing floating flower diyas',
        visitingTime: '05:30 AM – 07:30 AM (2 hrs)',
        cost: '₹500 boat rental',
        costValue: 500,
        image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      },
      {
        id: 'vns-kashi',
        name: 'Kashi Vishwanath Corridor & Temple',
        location: 'Lahori Tola, Varanasi',
        category: 'Spiritual',
        description: 'One of the twelve holiest Jyotirlinga shrines dedicated to Lord Shiva, newly rebuilt with a majestic riverfront pedestrian corridor.',
        suggestedActivity: 'Early morning darshan & heritage corridor walk',
        visitingTime: '08:00 AM – 10:30 AM (2.5 hrs)',
        cost: 'Free entry',
        costValue: 0,
        image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      },
      {
        id: 'vns-sarnath',
        name: 'Sarnath Deer Park & Dhamek Stupa',
        location: 'Sarnath (10 km from Varanasi)',
        category: 'Heritage',
        description: 'Sacred Buddhist pilgrimage site where Lord Buddha delivered his first sermon after enlightenment; features the Ashoka Pillar.',
        suggestedActivity: 'Meditation in the gardens & museum artifact tour',
        visitingTime: '01:00 PM – 04:00 PM (3 hrs)',
        cost: '₹300 entry + museum',
        costValue: 300,
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        rating: 4.8
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Dawn on the Ganges & the Grand Evening Aarti',
        dateLabel: 'Day 01 • River of Light',
        stops: [
          {
            time: '05:30 AM',
            title: 'Sunrise Rowboat Ride from Assi to Dashashwamedh',
            location: 'Assi Ghat',
            note: 'Watch the holy morning mist rise as temple bells ring along 84 historic stone ghats.',
            cost: '₹500',
            duration: '2.0 hrs',
            image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '08:30 AM',
            title: 'Banarasi Kachori Sabzi & Malaiyo Breakfast',
            location: 'Thatheri Bazaar',
            note: 'Taste steaming crisp kachoris and the famous seasonal saffron milk froth dessert.',
            cost: '₹150',
            duration: '1.0 hr',
            image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '06:00 PM',
            title: 'Dashashwamedh Ghat Evening Maha Aarti',
            location: 'Dashashwamedh Ghat',
            note: 'The iconic synchronized lamp ritual with conch shells and incense on the holy Ganges.',
            cost: '₹400',
            duration: '2.5 hrs',
            image: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'kerala-munnar',
    name: 'Munnar & Alleppey',
    state: 'Kerala',
    tagline: 'Emerald Tea Plantations, Misty Hills & Tranquil Backwaters',
    descriptor: 'Verdant rolling tea estates, cool mountain breezes, luxury kettuvallam houseboats, and Ayurvedic tranquility in God’s Own Country.',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'September – March',
    idealDays: '5–6 Days',
    idealPace: 'Nature & Backwaters',
    category: 'South India',
    tags: ['Nature', 'Mountains', 'Relaxation', 'Food', 'Waterways'],
    budgetEstimate: 36000,
    attractions: [
      {
        id: 'ker-tea',
        name: 'Kolukkumalai Tea Estate & Peak',
        location: 'Munnar (7,900 ft)',
        category: 'Nature',
        description: 'World’s highest organic tea plantation producing exquisite orthodox tea with breathtaking cloud-bed sunrise vistas.',
        suggestedActivity: '4x4 Jeep mountain safari and factory tea tasting session',
        visitingTime: '05:00 AM – 10:30 AM (5.5 hrs)',
        cost: '₹2,000 jeep safari',
        costValue: 2000,
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      },
      {
        id: 'ker-houseboat',
        name: 'Alleppey Backwaters Houseboat Cruise',
        location: 'Vembanad Lake, Alleppey',
        category: 'Relaxation',
        description: 'Traditional thatched luxury houseboat drifting past coconut groves, paddy fields, village life, and fresh Karimeen fish lunches.',
        suggestedActivity: 'Overnight luxury houseboat stay with private chef',
        visitingTime: '12:00 PM – Next Day (Overnight)',
        cost: '₹8,500 houseboat stay',
        costValue: 8500,
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
        rating: 5.0
      },
      {
        id: 'ker-eravikulam',
        name: 'Eravikulam National Park',
        location: 'Rajamalai, Munnar',
        category: 'Wildlife',
        description: 'Sanctuary for the endangered Nilgiri Tahr mountain goat and blooming home of the rare Neelakurinji flower.',
        suggestedActivity: 'Guided eco-bus wildlife spotting hike',
        visitingTime: '08:00 AM – 11:30 AM (3.5 hrs)',
        cost: '₹350 per person',
        costValue: 350,
        image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
        rating: 4.7
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Munnar Misty Tea Gardens & Mountain Peaks',
        dateLabel: 'Day 01 • Sea of Green',
        stops: [
          {
            time: '06:00 AM',
            title: 'Sunrise above the Clouds at Kolukkumalai',
            location: 'Kolukkumalai',
            note: 'Watch golden rays pierce through rolling ocean-like clouds above the tea carpets.',
            cost: '₹2,000',
            duration: '4.0 hrs',
            image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '02:00 PM',
            title: 'Mattupetty Dam & Echo Point',
            location: 'Munnar Hills',
            note: 'Speedboat cruise in the mountain reservoir surrounded by aromatic spice plantations.',
            cost: '₹500',
            duration: '2.5 hrs',
            image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'ladakh-leh',
    name: 'Leh Ladakh',
    state: 'Ladakh',
    tagline: 'Land of High Mountain Passes, Azure Lakes & Ancient Monasteries',
    descriptor: 'Dramatic moonscape valleys, crystal blue Pangong Tso, sand dunes of Nubra Valley, and spiritual gompas perched on granite spires.',
    heroImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'May – September',
    idealDays: '7–9 Days',
    idealPace: 'High Altitude Adventure',
    category: 'Himalayan Escapes',
    tags: ['Mountains', 'Adventure', 'Photography', 'Spiritual'],
    budgetEstimate: 42000,
    attractions: [
      {
        id: 'ldk-pangong',
        name: 'Pangong Tso High Altitude Lake',
        location: 'Changtang (14,270 ft)',
        category: 'Nature',
        description: 'Endorheic 134km-long sapphire blue lake that changes color from turquoise to deep indigo throughout the day.',
        suggestedActivity: 'Lakeside tent glamping & milky way astrophotography',
        visitingTime: 'Full day excursion',
        cost: '₹3,500 cab share',
        costValue: 3500,
        image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
        rating: 5.0
      },
      {
        id: 'ldk-nubra',
        name: 'Nubra Valley & Hunder Sand Dunes',
        location: 'Nubra Valley (via Khardung La)',
        category: 'Adventure',
        description: 'Cold desert valley surrounded by snow peaks, featuring double-humped Bactrian camel safaris in Hunder dunes.',
        suggestedActivity: 'Bactrian camel ride and Diskit Monastery giant Buddha visit',
        visitingTime: 'Full day excursion',
        cost: '₹1,500 safari & entry',
        costValue: 1500,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      },
      {
        id: 'ldk-thiksey',
        name: 'Thiksey Monastery',
        location: 'Leh-Manali Highway',
        category: 'Spiritual',
        description: 'Imposing 12-storey monastery complex resembling Lhasa’s Potala Palace, housing a 49-foot statue of Maitreya Buddha.',
        suggestedActivity: 'Morning prayer chants with Tibetan monks',
        visitingTime: '06:30 AM – 09:00 AM (2.5 hrs)',
        cost: '₹100 donation',
        costValue: 100,
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Leh Acclimatization, Shanti Stupa & Leh Palace',
        dateLabel: 'Day 01 • High Altitude Rest & Sunset Stupa',
        stops: [
          {
            time: '04:30 PM',
            title: 'Shanti Stupa Panoramic Sunset',
            location: 'Changsba, Leh',
            note: 'Climb 500 white steps to see the entire Indus Valley and Namgyal Tsemo fort bathed in pink dusk.',
            cost: 'Free',
            duration: '2.5 hrs',
            image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    state: 'Rajasthan',
    tagline: 'The City of Lakes, Marble Palaces & Timeless Romance',
    descriptor: 'Shimmering waters of Lake Pichola, white marble havelis, royal ghats, and sunset boat rides in the Venice of the East.',
    heroImage: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'October – March',
    idealDays: '3–4 Days',
    idealPace: 'Romance & Luxury',
    category: 'Royal Rajasthan',
    tags: ['Heritage', 'Lakes', 'Romantic', 'Photography', 'Food'],
    budgetEstimate: 26000,
    attractions: [
      {
        id: 'udp-pichola',
        name: 'Lake Pichola & Jag Mandir Island',
        location: 'Udaipur Center',
        category: 'Lakes',
        description: 'Picturesque artificial freshwater lake dating back to 1362, home to the floating Lake Palace and Jag Mandir island palace.',
        suggestedActivity: 'Sunset cruise with reflections of City Palace',
        visitingTime: '04:30 PM – 06:30 PM (2 hrs)',
        cost: '₹800 boat ticket',
        costValue: 800,
        image: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      },
      {
        id: 'udp-city-palace',
        name: 'Udaipur City Palace Complex',
        location: 'Lake Pichola East Bank',
        category: 'Heritage',
        description: 'Rajasthan’s largest palace complex featuring ornate stained glass balconies, mirror work courtyards, and royal Mewar armor.',
        suggestedActivity: 'Guided Mewar history tour & Zenana Mahal courtyards',
        visitingTime: '09:30 AM – 01:00 PM (3.5 hrs)',
        cost: '₹400 per person',
        costValue: 400,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        rating: 4.8
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'City Palace Splendor & Golden Hour on Lake Pichola',
        dateLabel: 'Day 01 • Royal Waters',
        stops: [
          {
            time: '10:00 AM',
            title: 'City Palace Exploration',
            location: 'Lake Pichola',
            note: 'Walk through the grand gates and mirror-inlaid royal chambers.',
            cost: '₹400',
            duration: '3.0 hrs',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '04:30 PM',
            title: 'Sunset Boat Cruise around Lake Palace',
            location: 'Rameshwar Ghat',
            note: 'Watch the sun sink behind the Aravalli hills, painting the marble palaces gold.',
            cost: '₹800',
            duration: '2.0 hrs',
            image: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'agra',
    name: 'Agra',
    state: 'Uttar Pradesh',
    tagline: 'Monument to Eternal Love & Mughal Grandeur',
    descriptor: 'The world-renowned ivory-white marble Taj Mahal, majestic Agra Fort, and historic Mughal gardens on the banks of Yamuna.',
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'October – March',
    idealDays: '2–3 Days',
    idealPace: 'Historic Heritage',
    category: 'Spiritual & Heritage',
    tags: ['Heritage', 'Photography', 'Mughal', 'Romantic'],
    budgetEstimate: 14500,
    attractions: [
      {
        id: 'agr-taj',
        name: 'The Taj Mahal at Sunrise',
        location: 'Dharmapuri, Forest Colony, Agra',
        category: 'Heritage',
        description: 'UNESCO World Heritage wonder built by Shah Jahan in memory of Mumtaz Mahal; peerless ivory marble symmetry.',
        suggestedActivity: 'Sunrise golden hour walk before crowds arrive',
        visitingTime: '06:00 AM – 09:00 AM (3 hrs)',
        cost: '₹50 (Indian) / ₹1,100 (Intl)',
        costValue: 250,
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        rating: 5.0
      },
      {
        id: 'agr-fort',
        name: 'Agra Fort (Red Fort)',
        location: 'Agra',
        category: 'Heritage',
        description: 'Vast red sandstone Mughal stronghold that served as the imperial residence of Mughal emperors until 1638.',
        suggestedActivity: 'Jahangir Palace & Diwan-i-Khas walkthrough',
        visitingTime: '10:30 AM – 01:00 PM (2.5 hrs)',
        cost: '₹50 entry',
        costValue: 50,
        image: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=800&q=80',
        rating: 4.8
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Dawn at Taj Mahal & Imperial Agra Fort',
        dateLabel: 'Day 01 • Mughal Marvels',
        stops: [
          {
            time: '06:00 AM',
            title: 'Taj Mahal Sunrise Glow',
            location: 'East Gate',
            note: 'Watch the white marble shift in color from pale pink to brilliant pearl white.',
            cost: '₹250',
            duration: '3.0 hrs',
            image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '11:00 AM',
            title: 'Agra Fort Exploration',
            location: 'Agra Fort',
            note: 'Inspect Emperor Shah Jahan’s private chambers framing views of the distant Taj Mahal.',
            cost: '₹50',
            duration: '2.5 hrs',
            image: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh & Haridwar',
    state: 'Uttarakhand',
    tagline: 'Yoga Capital of the World & Holy Himalayan Ganges',
    descriptor: 'Suspension bridges, sacred ghats, white-water river rafting, cliff jumps, and Beatles Ashram serenity in the foothills.',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010f4446e22?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1600100397608-f010f4446e22?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'September – April',
    idealDays: '3–4 Days',
    idealPace: 'Adventure & Wellness',
    category: 'Spiritual Journeys',
    tags: ['Spiritual', 'Adventure', 'Yoga', 'Nature', 'Mountains'],
    budgetEstimate: 18000,
    attractions: [
      {
        id: 'rsh-rafting',
        name: 'Ganges White Water Rafting (Shivpuri to NIM Beach)',
        location: 'Shivpuri, Rishikesh',
        category: 'Adventure',
        description: 'Exhilarating 16km grade III/IV river rapids including Roller Coaster, Golf Course, and cliff jumping point.',
        suggestedActivity: '16km rafting descent with certified river guides',
        visitingTime: '09:00 AM – 01:00 PM (4 hrs)',
        cost: '₹1,000 per person',
        costValue: 1000,
        image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      },
      {
        id: 'rsh-triveni',
        name: 'Triveni Ghat Evening Maha Aarti',
        location: 'Mayakund, Rishikesh',
        category: 'Spiritual',
        description: 'Sacred convergence of Ganga, Yamuna, and Saraswati rivers where Vedic priests perform twilight fire rituals.',
        suggestedActivity: 'Ganga river Aarti chanting and floating lamp offerings',
        visitingTime: '06:00 PM – 07:30 PM (1.5 hrs)',
        cost: 'Free',
        costValue: 0,
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4446e22?auto=format&fit=crop&w=800&q=80',
        rating: 4.8
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'River Rapids, Beatles Ashram & Evening Triveni Aarti',
        dateLabel: 'Day 01 • Adrenaline & Serenity',
        stops: [
          {
            time: '09:30 AM',
            title: 'Shivpuri River Rafting Expedition',
            location: 'Shivpuri',
            note: 'Tackle Grade III rapids along the emerald Himalayan waters of the holy Ganga.',
            cost: '₹1,000',
            duration: '3.5 hrs',
            image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=800&q=80'
          },
          {
            time: '06:00 PM',
            title: 'Triveni Ghat Sunset Aarti',
            location: 'Triveni Ghat',
            note: 'Participate in the soul-uplifting river prayer with Vedic drums and brass lanterns.',
            cost: 'Free',
            duration: '2.0 hrs',
            image: 'https://images.unsplash.com/photo-1600100397608-f010f4446e22?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'andaman',
    name: 'Andaman & Nicobar Islands',
    state: 'Andaman & Nicobar',
    tagline: 'Pristine Turquoise Lagoons, Coral Reefs & White Sands',
    descriptor: 'Radhanagar Beach sunsets, scuba diving in Havelock, bioluminescent night kayaking, and poignant colonial history at Cellular Jail.',
    heroImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'October – May',
    idealDays: '6–7 Days',
    idealPace: 'Island & Scuba',
    category: 'Beach Holidays',
    tags: ['Beaches', 'Adventure', 'Nature', 'Scuba', 'Romantic'],
    budgetEstimate: 48000,
    attractions: [
      {
        id: 'and-radhanagar',
        name: 'Radhanagar Beach (Beach No. 7)',
        location: 'Havelock Island (Swaraj Dweep)',
        category: 'Beaches',
        description: 'Voted Asia’s best beach by Time Magazine, boasting powder-white sands, gentle azure surf, and dense tropical rainforest fringes.',
        suggestedActivity: 'Swimming in crystal turquoise waters and sunset gazing',
        visitingTime: '02:00 PM – 06:30 PM (4.5 hrs)',
        cost: 'Free',
        costValue: 0,
        image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
        rating: 5.0
      },
      {
        id: 'and-scuba',
        name: 'Elephant Beach Coral Reef Scuba Diving',
        location: 'Havelock Island',
        category: 'Adventure',
        description: 'Vibrant living coral reefs teeming with clownfish, sea turtles, manta rays, and colorful anemones in clear tropical waters.',
        suggestedActivity: 'Beginner scuba dive with certified PADI dive instructor',
        visitingTime: '08:00 AM – 12:00 PM (4 hrs)',
        cost: '₹3,500 scuba dive',
        costValue: 3500,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Havelock Arrival & Asia’s Best Beach Sunset',
        dateLabel: 'Day 01 • Tropical Paradise',
        stops: [
          {
            time: '03:00 PM',
            title: 'Radhanagar Beach Sunset Walk',
            location: 'Havelock Island',
            note: 'Barefoot walk along pristine white sands as the sky turns fiery magenta over the Bay of Bengal.',
            cost: 'Free',
            duration: '3.5 hrs',
            image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'meghalaya-shillong',
    name: 'Meghalaya & Shillong',
    state: 'Meghalaya',
    tagline: 'Abode of Clouds, Living Root Bridges & Crystal Waterfalls',
    descriptor: 'Double Decker Living Root Bridges, crystal clear Dawki river boat rides, misty Cherrapunji plateaus, and pine-clad hills of Shillong.',
    heroImage: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'October – April',
    idealDays: '5–6 Days',
    idealPace: 'Nature & Offbeat',
    category: 'Northeast India',
    tags: ['Nature', 'Adventure', 'Offbeat', 'Waterfalls', 'Culture'],
    budgetEstimate: 29000,
    attractions: [
      {
        id: 'meg-dawki',
        name: 'Dawki Umngot Crystal River Boat Ride',
        location: 'Dawki, Meghalaya',
        category: 'Nature',
        description: 'World-famous river with water so glassy and crystal clear that wooden boats appear to float effortlessly on thin air.',
        suggestedActivity: 'Morning rowboat cruise along the Indo-Bangladesh border',
        visitingTime: '08:30 AM – 12:00 PM (3.5 hrs)',
        cost: '₹800 boat rental',
        costValue: 800,
        image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80',
        rating: 5.0
      },
      {
        id: 'meg-rootbridge',
        name: 'Nongriat Double Decker Living Root Bridge',
        location: 'Cherrapunji (Sohra)',
        category: 'Adventure',
        description: 'Bio-engineering wonder woven over generations by the Khasi tribe using living roots of ancient Ficus elastica rubber trees.',
        suggestedActivity: '3,000-step jungle hike and natural blue pool swim',
        visitingTime: '07:00 AM – 03:00 PM (8 hrs)',
        cost: '₹100 entry + guide',
        costValue: 100,
        image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Glassy Waters of Dawki & Mawlynnong Cleanest Village',
        dateLabel: 'Day 01 • Living Green Wonders',
        stops: [
          {
            time: '09:00 AM',
            title: 'Umngot River Glass Boat Ride',
            location: 'Dawki',
            note: 'Glide through crystal-clear turquoise waters revealing every underwater river stone.',
            cost: '₹800',
            duration: '3.0 hrs',
            image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    tagline: 'UNESCO World Heritage Kingdom of Boulders & Vijayanagara Temples',
    descriptor: 'Surreal boulder-strewn landscapes, magnificent Dravidian monolithic stone temples, royal elephant stables, and Tungabhadra sunsets.',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010f4446e22?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1600100397608-f010f4446e22?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'October – March',
    idealDays: '3–4 Days',
    idealPace: 'Heritage & Bouldering',
    category: 'South India',
    tags: ['Heritage', 'Spiritual', 'Photography', 'Architecture'],
    budgetEstimate: 19000,
    attractions: [
      {
        id: 'hmp-virupaksha',
        name: 'Virupaksha Temple & Hampi Bazaar',
        location: 'Hampi Village',
        category: 'Spiritual',
        description: '7th-century functioning temple dedicated to Lord Shiva with a 160-foot soaring gopuram and Lakshmi the temple elephant.',
        suggestedActivity: 'Morning temple darshan & chariot street stroll',
        visitingTime: '08:00 AM – 11:00 AM (3 hrs)',
        cost: '₹50 entry',
        costValue: 50,
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4446e22?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      },
      {
        id: 'hmp-stone-chariot',
        name: 'Vittala Temple & Iconic Stone Chariot',
        location: 'Vittala Complex, Hampi',
        category: 'Heritage',
        description: 'Masterpiece of Vijayanagara art featuring the world-famous Stone Chariot shrine and musical pillars that resonate notes.',
        suggestedActivity: 'Heritage photography & battery car complex tour',
        visitingTime: '02:30 PM – 05:30 PM (3 hrs)',
        cost: '₹40 entry',
        costValue: 40,
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80',
        rating: 5.0
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Stone Chariots & Matanga Hill Sunset',
        dateLabel: 'Day 01 • Kingdom of Stone',
        stops: [
          {
            time: '03:00 PM',
            title: 'Vittala Temple Stone Chariot',
            location: 'Vittala Complex',
            note: 'Marvel at the monolithic granite chariot shrine depicted on the ₹50 currency note.',
            cost: '₹40',
            duration: '2.5 hrs',
            image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'amritsar',
    name: 'Amritsar',
    state: 'Punjab',
    tagline: 'The Golden Sanctum of Peace, Seva & Punjabi Flavors',
    descriptor: 'The radiant Golden Temple surrounded by the Amrit Sarovar, world-famous Guru ka Langar serving 100,000 daily, and Wagah Border fervor.',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'October – March',
    idealDays: '2–3 Days',
    idealPace: 'Spiritual & Food',
    category: 'Spiritual Journeys',
    tags: ['Spiritual', 'Food', 'Heritage', 'Culture'],
    budgetEstimate: 13500,
    attractions: [
      {
        id: 'amr-golden',
        name: 'Harmandir Sahib (The Golden Temple)',
        location: 'Golden Temple Road, Amritsar',
        category: 'Spiritual',
        description: 'Holiest Gurdwara of Sikhism clad in real gold foil, illuminated over sacred waters with 24/7 Gurbani kirtan chanting.',
        suggestedActivity: 'Night Palki Sahib ceremony & volunteering at Guru ka Langar',
        visitingTime: 'Open 24 Hours (3.5 hrs)',
        cost: 'Free / Seva',
        costValue: 0,
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        rating: 5.0
      },
      {
        id: 'amr-wagah',
        name: 'Wagah Border Beating Retreat Ceremony',
        location: 'Grand Trunk Road, Attari',
        category: 'Culture',
        description: 'High-energy military drill ceremony conducted daily before sunset by the Indian Border Security Force and Pakistan Rangers.',
        suggestedActivity: 'Patriotic parade spectator experience',
        visitingTime: '03:30 PM – 06:30 PM (3 hrs)',
        cost: 'Free entry',
        costValue: 0,
        image: 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&w=800&q=80',
        rating: 4.8
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Golden Temple Illumination & Kulcha Feast',
        dateLabel: 'Day 01 • Spiritual Gold',
        stops: [
          {
            time: '06:00 PM',
            title: 'Golden Temple Night Illumination & Langar',
            location: 'Harmandir Sahib',
            note: 'Experience the divine atmosphere as night lights reflect across the holy nectar tank.',
            cost: 'Free',
            duration: '3.0 hrs',
            image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'srinagar-kashmir',
    name: 'Srinagar & Gulmarg',
    state: 'Jammu & Kashmir',
    tagline: 'Paradise on Earth: Dal Lake Shikaras & Snow Glades',
    descriptor: 'Carved wooden houseboats on Dal Lake, floating flower markets, Asia’s highest cable car in Gulmarg, and Mughal terraced gardens.',
    heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'Year Round (Snow: Dec-Feb, Blooms: Apr-Jun)',
    idealDays: '5–6 Days',
    idealPace: 'Romance & Alpine',
    category: 'Himalayan Escapes',
    tags: ['Mountains', 'Romantic', 'Lakes', 'Nature', 'Snow'],
    budgetEstimate: 34000,
    attractions: [
      {
        id: 'srn-shikara',
        name: 'Dal Lake Shikara Ride & Floating Market',
        location: 'Dal Lake, Srinagar',
        category: 'Lakes',
        description: 'Iconic cushioned boat glide past lotus blooms, Char Chinar island, and vibrant early morning floating vegetable markets.',
        suggestedActivity: 'Sunrise shikara ride with hot Kashmiri Kahwa',
        visitingTime: '06:00 AM – 08:30 AM (2.5 hrs)',
        cost: '₹800 shikara',
        costValue: 800,
        image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
        rating: 5.0
      },
      {
        id: 'srn-gulmarg',
        name: 'Gulmarg Gondola (Phase 1 & Phase 2)',
        location: 'Gulmarg (13,780 ft)',
        category: 'Adventure',
        description: 'World’s second-highest cable car taking riders up Apharwat Peak into powdery ski bowls and alpine snowscapes.',
        suggestedActivity: 'Cable car ride to Phase 2 snow peaks and skiing',
        visitingTime: '09:00 AM – 03:00 PM (6 hrs)',
        cost: '₹1,850 gondola ticket',
        costValue: 1850,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Dal Lake Sunset Shikara & Houseboat Stay',
        dateLabel: 'Day 01 • Water & Pine',
        stops: [
          {
            time: '04:30 PM',
            title: 'Sunset Shikara Cruise to Char Chinar',
            location: 'Dal Lake',
            note: 'Sip saffron kahwa as twilight blankets the Zabarwan mountain range.',
            cost: '₹800',
            duration: '2.5 hrs',
            image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'delhi',
    name: 'Delhi',
    state: 'Delhi NCR',
    tagline: 'The Historic Capital of Monuments, Power & Culinary Trails',
    descriptor: 'Mughal Red Fort, Humayun’s Tomb, vibrant Chandni Chowk street food, and modern cafe culture in Hauz Khas.',
    heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'October – March',
    idealDays: '3–4 Days',
    idealPace: 'Urban Heritage & Food',
    category: 'Weekend Getaways',
    tags: ['Heritage', 'Food', 'Shopping', 'Culture'],
    budgetEstimate: 18500,
    attractions: [
      {
        id: 'del-humayun',
        name: 'Humayun’s Tomb & Sunder Nursery',
        location: 'Nizamuddin East, New Delhi',
        category: 'Heritage',
        description: 'UNESCO World Heritage red sandstone garden tomb that inspired the Taj Mahal, surrounded by lush Persian Charbagh gardens.',
        suggestedActivity: 'Morning architectural stroll & garden picnic',
        visitingTime: '08:30 AM – 11:30 AM (3 hrs)',
        cost: '₹50 entry',
        costValue: 50,
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
        rating: 4.8
      },
      {
        id: 'del-chandni',
        name: 'Old Delhi Chandni Chowk Food Trail',
        location: 'Chandni Chowk, Old Delhi',
        category: 'Food',
        description: 'Legendary 350-year-old culinary street famous for Paranthe Wali Gali, Daulat ki Chaat, Natraj Dahi Bhalle, and Karim’s kebabs.',
        suggestedActivity: 'Cycle rickshaw food tour & spice market climb',
        visitingTime: '01:00 PM – 04:30 PM (3.5 hrs)',
        cost: '₹750 food budget',
        costValue: 750,
        image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Mughal Splendors & Old Delhi Flavors',
        dateLabel: 'Day 01 • Capital Chronicles',
        stops: [
          {
            time: '09:00 AM',
            title: 'Humayun’s Tomb Garden Walk',
            location: 'Nizamuddin',
            note: 'Explore symmetrical Mughal architecture and ancient water fountains.',
            cost: '₹50',
            duration: '2.5 hrs',
            image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    tagline: 'The Maximum City of Sea Breezes, Art Deco & Dreams',
    descriptor: 'The Gateway of India, Queen’s Necklace Marine Drive sunsets, Victorian Gothic heritage architecture, and coastal nightlife.',
    heroImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'November – February',
    idealDays: '3–4 Days',
    idealPace: 'Cosmopolitan & Coastal',
    category: 'Weekend Getaways',
    tags: ['Urban', 'Food', 'Culture', 'Nightlife', 'Heritage'],
    budgetEstimate: 28000,
    attractions: [
      {
        id: 'mum-marine',
        name: 'Marine Drive & Chowpatty Sunset',
        location: 'South Mumbai',
        category: 'Sights',
        description: 'Iconic 3.6km C-shaped boulevard along the Arabian Sea coast, lit up like a string of pearls after twilight.',
        suggestedActivity: 'Evening sea breeze walk & Mumbai street Pav Bhaji',
        visitingTime: '05:00 PM – 08:00 PM (3 hrs)',
        cost: 'Free / ₹200 snacks',
        costValue: 200,
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
        rating: 4.8
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Colaba Heritage & Marine Drive Queen’s Necklace',
        dateLabel: 'Day 01 • Maximum City',
        stops: [
          {
            time: '04:30 PM',
            title: 'Gateway of India & Marine Drive Promenade',
            location: 'Colaba to Marine Drive',
            note: 'Watch sea gulls fly past the Arabian Sea and enjoy Mumbai cutting chai.',
            cost: 'Free',
            duration: '3.0 hrs',
            image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'pondicherry',
    name: 'Pondicherry (Puducherry)',
    state: 'Puducherry',
    tagline: 'French Colonial Quarters, Cobblestone Alleys & Coastal Zen',
    descriptor: 'Mustard-yellow French villas, bougainvillea draped avenues, Promenade Beach, Auroville spiritual community, and French bakeries.',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'October – March',
    idealDays: '3–4 Days',
    idealPace: 'Relaxation & Heritage',
    category: 'South India',
    tags: ['Beaches', 'Heritage', 'Food', 'Spiritual', 'Relaxation'],
    budgetEstimate: 21000,
    attractions: [
      {
        id: 'pon-white-town',
        name: 'White Town French Quarter Walk',
        location: 'White Town, Pondicherry',
        category: 'Heritage',
        description: 'Colonial streets with French street names, pastel cafes, cycling paths, and chic artisan boutiques.',
        suggestedActivity: 'Bicycle heritage tour & fresh croissant breakfast',
        visitingTime: '08:00 AM – 11:30 AM (3.5 hrs)',
        cost: '₹150 cycle rent',
        costValue: 150,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        rating: 4.8
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'White Town Heritage & Promenade Beach Breeze',
        dateLabel: 'Day 01 • French Coastal Allure',
        stops: [
          {
            time: '08:30 AM',
            title: 'Vintage Bicycle Ride through White Town',
            location: 'White Town',
            note: 'Ride past pastel villas and stop at Cafe des Arts for artisan espresso.',
            cost: '₹250',
            duration: '3.0 hrs',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    state: 'West Bengal',
    tagline: 'Queen of the Hills, Toy Train & Kanchenjunga Vistas',
    descriptor: 'World Heritage Himalayan toy train steam engines, champagne Darjeeling tea estates, and dawn views of Mt. Kanchenjunga from Tiger Hill.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'March – May & Oct – Dec',
    idealDays: '4–5 Days',
    idealPace: 'Mountains & Tea',
    category: 'Himalayan Escapes',
    tags: ['Mountains', 'Tea', 'Heritage', 'Nature'],
    budgetEstimate: 23000,
    attractions: [
      {
        id: 'dar-tiger',
        name: 'Tiger Hill Sunrise over Mt. Kanchenjunga',
        location: 'Tiger Hill (8,482 ft)',
        category: 'Nature',
        description: 'World-famous sunrise vantage point illuminating the snow crests of the world’s third highest peak in dazzling orange.',
        suggestedActivity: 'Dawn photography & morning piping hot Darjeeling tea',
        visitingTime: '04:30 AM – 07:00 AM (2.5 hrs)',
        cost: '₹800 shared cab',
        costValue: 800,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        rating: 4.9
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Tiger Hill Dawn & Happy Valley Tea Estate',
        dateLabel: 'Day 01 • Golden Snow Crests',
        stops: [
          {
            time: '04:30 AM',
            title: 'Sunrise over Kanchenjunga',
            location: 'Tiger Hill',
            note: 'Watch Mt. Kanchenjunga turn from purple to blazing gold in the dawn chill.',
            cost: '₹800',
            duration: '2.5 hrs',
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  },
  {
    id: 'rann-of-kutch',
    name: 'Rann of Kutch',
    state: 'Gujarat',
    tagline: 'The White Salt Desert Under the Full Moon',
    descriptor: 'Endless surreal white salt desert plains, colorful Kutchi embroidery handicrafts, folk music under starlit skies, and tent city luxury.',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    bestSeason: 'November – February (Rann Utsav)',
    idealDays: '3–4 Days',
    idealPace: 'Desert & Cultural',
    category: 'Wildlife Adventures',
    tags: ['Desert', 'Culture', 'Photography', 'Festivals'],
    budgetEstimate: 27000,
    attractions: [
      {
        id: 'kut-white-rann',
        name: 'Great White Rann Salt Desert Sunset',
        location: 'Dhordo, Kutch',
        category: 'Nature',
        description: 'Vast glittering expanse of salt crystals glowing pink, violet, and silver as the sun sinks beneath the horizon.',
        suggestedActivity: 'Camel cart ride across the white desert & full moon walk',
        visitingTime: '04:30 PM – 08:30 PM (4 hrs)',
        cost: '₹100 permit + camel ride',
        costValue: 400,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        rating: 5.0
      }
    ],
    itineraryDays: [
      {
        dayNumber: 1,
        title: 'Full Moon on the White Salt Sands',
        dateLabel: 'Day 01 • Shimmering White',
        stops: [
          {
            time: '04:30 PM',
            title: 'Sunset over White Rann of Kutch',
            location: 'Dhordo',
            note: 'Witness the surreal infinite white landscape transform into a silver dreamland.',
            cost: '₹400',
            duration: '4.0 hrs',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
          }
        ]
      }
    ]
  }
];

// Curated Inspiration Categories (India-focused)
export const INSPIRATION_CATEGORIES = [
  {
    id: 'royal-rajasthan',
    title: 'Royal Rajasthan',
    subtitle: 'Palaces, Fortresses & Desert Dunes',
    count: '6 Destinations',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    destinations: ['jaipur', 'udaipur'],
    description: 'Immerse yourself in Maharaja palaces, heritage havelis, camel safaris, and royal Rajput grandeur.'
  },
  {
    id: 'himalayan-escapes',
    title: 'Himalayan Escapes',
    subtitle: 'Snow Peaks, Valleys & Mountain Air',
    count: '8 Destinations',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    destinations: ['manali', 'ladakh-leh'],
    description: 'Breathe crisp alpine air across Manali pine forests, high-altitude passes, and serene Buddhist monasteries.'
  },
  {
    id: 'beach-holidays',
    title: 'Beach Holidays',
    subtitle: 'Golden Sands, Palms & Ocean Waves',
    count: '5 Destinations',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    destinations: ['goa', 'andaman'],
    description: 'Unwind at sunset beach shacks, swim in turquoise Andaman lagoons, and cruise Goan coastal waters.'
  },
  {
    id: 'spiritual-journeys',
    title: 'Spiritual Journeys',
    subtitle: 'Sacred Ghats, Temples & River Aartis',
    count: '7 Destinations',
    image: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=80',
    destinations: ['varanasi', 'rishikesh', 'amritsar'],
    description: 'Feel the timeless spiritual pulse of ancient Varanasi ghats, holy Ganges aartis, and the golden peace of Amritsar.'
  },
  {
    id: 'south-india',
    title: 'South India Serenity',
    subtitle: 'Backwaters, Tea Hills & Dravidian Temples',
    count: '6 Destinations',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    destinations: ['kerala-munnar', 'hampi'],
    description: 'Drift along Alleppey backwater houseboats, explore Munnar tea mist, and marvel at Hampi stone chariot temples.'
  },
  {
    id: 'northeast-india',
    title: 'Northeast India',
    subtitle: 'Living Bridges, Clouds & Glass Rivers',
    count: '4 Destinations',
    image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80',
    destinations: ['meghalaya-shillong'],
    description: 'Discover bio-engineered living root bridges, glassy crystal river boats in Dawki, and misty mountain cascades.'
  },
  {
    id: 'wildlife-adventures',
    title: 'Wildlife Adventures',
    subtitle: 'Royal Bengal Tigers & National Parks',
    count: '5 Destinations',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f841807d?auto=format&fit=crop&w=800&q=80',
    destinations: ['jaipur', 'kerala-munnar'],
    description: 'Embark on jungle jeep safaris in Ranthambore, Jim Corbett, and spot one-horned rhinos in Kaziranga.'
  },
  {
    id: 'weekend-getaways',
    title: 'Weekend Getaways',
    subtitle: 'Quick 2-3 Day Restorative Escapes',
    count: '9 Destinations',
    image: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&w=800&q=80',
    destinations: ['rishikesh', 'agra', 'jaipur'],
    description: 'Short, hassle-free escapes from Delhi, Mumbai, or Bangalore crafted with frictionless pace.'
  }
];

// Initial default Indian workspace state
export const DEFAULT_TRIP = {
  destinationId: 'jaipur',
  destinationName: 'Jaipur, Rajasthan',
  tagline: 'The Pink City of Palaces, Forts & Royal Splendor',
  durationDays: 4,
  dates: 'Nov 12 – Nov 16',
  travelers: 2,
  travelerType: 'Couple',
  preferences: ['Heritage', 'Photography', 'Food', 'Shopping'],
  totalBudget: 45000,
  currency: 'INR',
  heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=85'
};

// Initial default saved places for India
export const INITIAL_SAVED_PLACES = [
  {
    id: 'save-1',
    name: 'Amber Fort & Sheesh Mahal',
    location: 'Amer, Jaipur',
    category: 'Heritage',
    note: 'Mirrored royal palace overlooking Maota Lake',
    cost: '₹550',
    costValue: 550,
    image: 'https://images.unsplash.com/photo-1603288940300-4b95383561a0?auto=format&fit=crop&w=800&q=80',
    rating: 'Top sight',
    status: 'Planned for Day 02'
  },
  {
    id: 'save-2',
    name: 'Hawa Mahal Palace of Winds',
    location: 'Badi Choupad, Jaipur',
    category: 'Heritage',
    note: '953 ornate latticework honeycomb windows',
    cost: '₹200',
    costValue: 200,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    rating: 'Must visit',
    status: 'Planned for Day 01'
  },
  {
    id: 'save-3',
    name: 'Nahargarh Fort Sunset Terrace',
    location: 'Aravalli Hills, Jaipur',
    category: 'Sights',
    note: 'Golden hour panoramic city sunset views',
    cost: '₹200',
    costValue: 200,
    image: 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&w=800&q=80',
    rating: 'Highlight',
    status: 'Sunset drink'
  },
  {
    id: 'save-4',
    name: 'Chokhi Dhani Heritage Village',
    location: 'Tonk Road, Jaipur',
    category: 'Food',
    note: 'Authentic Rajasthani Dal Baati Churma & folk dance',
    cost: '₹950',
    costValue: 950,
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
    rating: 'Dinner booked',
    status: 'Night feast'
  },
  {
    id: 'save-5',
    name: 'Alsisar Haveli Heritage Stay',
    location: 'Sansar Chandra Road, Jaipur',
    category: 'Stays',
    note: 'Restored royal Rajput mansion with antique frescoes & pool',
    cost: '₹6,500/night',
    costValue: 6500,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    rating: 'Booked',
    status: 'Confirmed'
  },
  {
    id: 'save-6',
    name: 'Johari Bazaar Lac Bangle & Textile Trail',
    location: 'Old City, Jaipur',
    category: 'Shopping',
    note: 'Handmade lac bangles, bandhani silks & Jaipuri quilts',
    cost: '₹1,500',
    costValue: 1500,
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80',
    rating: 'Shopping',
    status: 'Day 03 afternoon'
  }
];

// Initial default accommodations for Indian trip
export const INITIAL_ACCOMMODATIONS = [
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
    checkIn: 'Nov 12, 2:00 PM',
    checkOut: 'Nov 15, 11:00 AM'
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
    notes: 'Historic suite booking with outdoor jacuzzi and candlelit dinner.',
    checkIn: 'Nov 15, 2:00 PM',
    checkOut: 'Nov 16, 12:00 PM'
  }
];

// Initial default expense categories
export const INITIAL_BUDGET_CATEGORIES = {
  accommodation: [
    { id: 'b-acc-1', title: 'Alsisar Haveli (3 nights)', amount: 16500 },
    { id: 'b-acc-2', title: 'Samode Haveli (1 night)', amount: 7200 }
  ],
  food: [
    { id: 'b-fd-1', title: 'Chokhi Dhani Rajasthani Thali for 2', amount: 1900 },
    { id: 'b-fd-2', title: 'Wind View Cafe & Laxmi Mishthan Bhandar', amount: 1400 },
    { id: 'b-fd-3', title: 'Rooftop Fort-view Dinners & Chai Stalls', amount: 2500 }
  ],
  activities: [
    { id: 'b-act-1', title: 'Amber Fort + Sheesh Mahal passes for 2', amount: 1100 },
    { id: 'b-act-2', title: 'City Palace + Jantar Mantar combo tickets', amount: 1800 },
    { id: 'b-act-3', title: 'Nahargarh Sunset & Albert Hall entry', amount: 1000 }
  ],
  transport: [
    { id: 'b-tr-1', title: 'Vande Bharat Express Train Tickets (Return)', amount: 3200 },
    { id: 'b-tr-2', title: 'Private AC Cab for Amer Fort & City Tour', amount: 3500 },
    { id: 'b-tr-3', title: 'Local E-Rickshaws in Old Walled City', amount: 900 }
  ],
  shopping: [
    { id: 'b-shp-1', title: 'Johari Bazaar Lac Bangles & Silver earrings', amount: 2000 },
    { id: 'b-shp-2', title: 'Hand-block print Jaipuri Razai (Quilt)', amount: 2000 }
  ],
  other: [
    { id: 'b-oth-1', title: 'Local Heritage Guide Fees & Tips', amount: 1500 }
  ]
};
