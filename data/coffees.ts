import { Coffee } from '../types';

export const coffees: Coffee[] = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Rich espresso topped with foamed milk.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBituXdCgrlejEVriX6530vrfs17q-EnsNhRQFtFp_qUBtw2Mj68UNswHx8t8DTKkhDtbQQBhXNY1_LiOTCeLZrOutB6zoK30R1enjnC0GqsyUWK0LnPlV8O728HfNN9j9v4a932SdrnCMGzJFhw0M6fuL_hRtzDgop2tgrAAhpTjZoXEogSzTpKc85CdAbLWoMjDWYCKZYQ56NVEPosurbqz52Vwz340gfj44EaoBOgj1bm0kldEfeVcZD0ECsHM0mvwQuGoWShg',
    tags: ['Balanced', 'Classic'],
    rating: 4.8,
    category: 'Hot',
    stats: {
      time: '10 Min',
      difficulty: 'Medium',
      calories: '150 kcal'
    },
    brewingDetails: {
      temperature: '93°C / 200°F',
      grindSize: 'Fine',
      method: 'Espresso Machine',
      ratio: '1:2 (Espresso)'
    },
    ingredients: [
      { name: 'Espresso Shot', detail: 'Freshly brewed', amount: '30ml', icon: 'coffee', colorClass: 'bg-orange-100 dark:bg-primary/20', textColorClass: 'text-primary' },
      { name: 'Steamed Milk', detail: 'Heated to 65°C', amount: '30ml', icon: 'water_drop', colorClass: 'bg-blue-100 dark:bg-blue-500/20', textColorClass: 'text-blue-600 dark:text-blue-400' },
      { name: 'Milk Foam', detail: 'Thick & creamy', amount: '30ml', icon: 'cloud', colorClass: 'bg-stone-100 dark:bg-stone-700/40', textColorClass: 'text-stone-600 dark:text-stone-300' },
      { name: 'Cocoa Powder', detail: 'Optional garnish', amount: 'Dash', icon: 'grain', colorClass: 'bg-amber-100 dark:bg-amber-900/40', textColorClass: 'text-amber-700 dark:text-amber-500' },
    ],
    steps: [
      { title: 'Brew Espresso', description: 'Pull a double shot of espresso directly into your cappuccino cup. Aim for a rich crema on top.' },
      { title: 'Steam Milk', description: 'Steam the milk to about 65°C (150°F). Keep the wand near the surface initially to create microfoam.' },
      { title: 'Pour & Layer', description: 'Pour the steamed milk into the center of the espresso. Then, gently spoon the remaining thick foam on top.' }
    ],
    baristaTip: 'Swirl the espresso and milk before topping with foam to integrate the flavors better. Tap the jug to remove big bubbles.',
    tastingNotes: ['Creamy', 'Sweet', 'Nutty'],
    origin: 'Central & South America',
    roast: 'Medium-Dark'
  },
  {
    id: 'latte',
    name: 'Classic Latte',
    description: 'A coffee shop staple. Rich espresso topped with creamy steamed milk and a thin layer of foam.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBituXdCgrlejEVriX6530vrfs17q-EnsNhRQFtFp_qUBtw2Mj68UNswHx8t8DTKkhDtbQQBhXNY1_LiOTCeLZrOutB6zoK30R1enjnC0GqsyUWK0LnPlV8O728HfNN9j9v4a932SdrnCMGzJFhw0M6fuL_hRtzDgop2tgrAAhpTjZoXEogSzTpKc85CdAbLWoMjDWYCKZYQ56NVEPosurbqz52Vwz340gfj44EaoBOgj1bm0kldEfeVcZD0ECsHM0mvwQuGoWShg',
    tags: ['Creamy', 'Popular'],
    rating: 4.8,
    category: 'Hot',
    stats: {
      time: '5 min',
      difficulty: 'Easy',
      calories: '190 kcal'
    },
    brewingDetails: {
      temperature: '93°C / 200°F',
      grindSize: 'Fine',
      method: 'Espresso Machine',
      ratio: '1:2'
    },
    ingredients: [
      { name: 'Espresso', detail: 'Rich arabica beans', amount: '1 Shot (30ml)', icon: 'coffee', colorClass: 'bg-white/10', textColorClass: 'text-white' },
      { name: 'Steamed Milk', detail: 'Heated to 65°C', amount: '8 oz (240ml)', icon: 'water_drop', colorClass: 'bg-white/10', textColorClass: 'text-white' },
      { name: 'Micro-foam', detail: 'Thin layer', amount: '1 cm Layer', icon: 'cloud', colorClass: 'bg-white/10', textColorClass: 'text-white' }
    ],
    steps: [
      { title: 'Brew Espresso', description: 'Extract a shot of espresso into a heavy, wide-mouthed mug. Aim for a rich crema.' },
      { title: 'Steam Milk', description: 'Steam milk to 150°F (65°C). Introduce air initially to create micro-foam, then swirl to incorporate.' },
      { title: 'Pour', description: 'Hold the jug high to mix the milk with the espresso, then bring it lower to pour the foam on top.' },
      { title: 'Finish', description: 'Top with a light layer of foam. Optional: dust with cocoa powder or cinnamon.' }
    ],
    baristaTip: 'Tilt your cup 45 degrees when pouring the milk to create a canvas for latte art if you are feeling adventurous.',
    tastingNotes: ['Milky', 'Mellow', 'Biscuit'],
    origin: 'Brazil',
    roast: 'Medium-Dark'
  },
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'The foundation of every great coffee.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNJH4Uvv5P56RkJZ6d0s27RG3vq4JFyNAnmlN1pJsJ5lK2ctXdsOgDQXehx7NYQvz8OB9nQIkB6Xcsrah1nsg06yhAWdioSLjuoeo2LP1i49nvmbpcSWUNnPpJ1L_OwbaP97XheAv5dwhrKXlIePLvVUU8xLNgBPYBfbJEjmh8xEQgN0sFPrqpQLTjUkaCMUOrVXB7qaM22omhj0ps5Wj1zZ8iTvyeGwa2ChNtUkFNeNtUyvU-_Si77PzuhACb5TZg8IKM82Telg',
    tags: ['Strong', 'Classic'],
    rating: 4.9,
    category: 'Hot',
    stats: {
      time: '2 mins',
      difficulty: 'Medium',
      calories: '5 kcal',
      yield: '30ml'
    },
    brewingDetails: {
      temperature: '93°C / 200°F',
      grindSize: 'Fine (Powdery)',
      method: 'Pressure Extraction',
      ratio: '1:2 (18g in, 36g out)'
    },
    ingredients: [
      { name: 'Coffee Beans', detail: '18g • Dark Roast • Finely Ground', amount: '18g', icon: 'grain', colorClass: 'bg-background-dark', textColorClass: 'text-white/70' },
      { name: 'Water', detail: '30-40ml • 93°C (200°F)', amount: '30ml', icon: 'water_full', colorClass: 'bg-background-dark', textColorClass: 'text-white/70' }
    ],
    steps: [
      { title: 'Grind the Beans', description: 'Grind your fresh beans to a fine, powdery consistency similar to table salt. This ensures optimal pressure build-up.' },
      { title: 'Tamp Evenly', description: 'Distribute the grounds evenly in the portafilter. Tamp down with approximately 30lbs of pressure to create a flat, even puck.' },
      { title: 'Extract', description: 'Lock the portafilter into the group head and brew. Aim for an extraction time of 25-30 seconds for a balanced flavor profile.' },
      { title: 'Serve Immediately', description: 'Pour into a pre-heated demitasse cup to maintain crema and temperature. Enjoy your perfect shot.' }
    ],
    baristaTip: 'Stir your espresso before drinking! The flavors layer as it extracts (sour, sweet, bitter), so stirring balances the taste.',
    tastingNotes: ['Intense', 'Caramel', 'Bright Acid'],
    origin: 'Multi-Origin Blend',
    roast: 'Dark'
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Espresso shots topped with hot water for a rich flavor.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPiMStKMDJN5B9CKfR2xL6N1F1KUjSl5qih5VPlxvuTMnPBIjQq-vJYDQ1nrcBMMpz-bsjLkClObJqBfxDHfFDDUQ78CPQMTn7uyOGKBK8wn6FUGpv8ID6YkknwQ6XdmGhesgxljHm0bovuDkbnA4E9XIig6nXS4lHT9CI2cLn89kNe_O0qsOSLrCr5IAs69MyQhqSBJLVrRrcmaBX4fY7aslapTjHmQvhKjtGeOakOdAOV7droubnWXCNEb8DsTq31cfZLCe38w',
    tags: ['Classic', 'Easy'],
    rating: 4.7,
    category: 'Hot',
    stats: {
      time: '5 mins',
      difficulty: 'Easy',
      calories: '5 kcal'
    },
    brewingDetails: {
      temperature: '93°C / 200°F',
      grindSize: 'Fine',
      method: 'Dilution',
      ratio: '1:2 or 1:4 (Water)'
    },
    ingredients: [
      { name: 'Espresso', detail: 'Dark roast preferred', amount: '2 shots (60ml)', icon: 'coffee', colorClass: 'bg-[#f0e6dd] dark:bg-[#3d2e22]', textColorClass: 'text-primary' },
      { name: 'Hot Water', detail: '200°F / 93°C', amount: '4 oz (120ml)', icon: 'water_drop', colorClass: 'bg-[#f0e6dd] dark:bg-[#3d2e22]', textColorClass: 'text-primary' }
    ],
    tools: [
      { name: 'Machine', icon: 'coffee_maker' },
      { name: 'Kettle', icon: 'kettle' },
      { name: 'Cup', icon: 'local_cafe' }
    ],
    steps: [
      { title: 'Heat the water', description: 'Bring your filtered water to 200°F (93°C). It should be hot, but not actively boiling to avoid burning the coffee flavor.' },
      { title: 'Prepare the cup', description: 'Pour the hot water into your serving cup first. This is the key difference between an Americano and a Long Black.' },
      { title: 'Brew Espresso', description: 'Brew a double shot of espresso (60ml) directly over the hot water. Pouring the shot over the water helps preserve the rich golden crema on top.' },
      { title: 'Serve', description: 'Enjoy immediately. You can add milk or sugar if desired, though a classic Americano is served black.' }
    ],
    baristaTip: 'For a stronger taste, try a 1:1 ratio of espresso to water. For a milder drink, go up to 1:4.',
    tastingNotes: ['Bold', 'Earthy', 'Clean'],
    origin: 'Colombia',
    roast: 'Medium'
  },
  {
    id: 'macchiato',
    name: 'Espresso Macchiato',
    description: 'Espresso "stained" with a dash of frothy milk.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY-mDqyEOkXH7mUeohdWXL0KfcsjoKvLDYXFgBo48OABkXED7NNBBFDZHn2JZzkXhTlDTFUy1dMj35NLCGDSrPdEjFg3Vr10JoJvTyAVAOJiU5mQIA4-S5MAEo6J0HqNQZoPI_Xe8aq8JZE0L7fog2H-Y52V5i6utBWZMLDsx1MGe71rSzgLTHaztQfv1Swn20JupiNhs56wWasG3g2HZGBelsLTTeDtS20OyfGiaEun4Hz7uWwk5NtBvsGyrEjfli_ndR6tdUbQ',
    tags: ['Bold', 'Rich'],
    rating: 4.6,
    category: 'Hot',
    stats: {
      time: '5 min',
      difficulty: 'Medium',
      calories: '15 kcal'
    },
    brewingDetails: {
      temperature: '93°C / 200°F',
      grindSize: 'Fine',
      method: 'Staining (Marking)',
    },
    ingredients: [
      { name: 'Espresso', detail: 'Rich arabica beans', amount: '1 shot (30ml)', icon: 'coffee_maker', colorClass: 'bg-primary/10', textColorClass: 'text-primary' },
      { name: 'Milk Foam', detail: 'Steam milk to 65°C', amount: '1 Dollop (15ml)', icon: 'water_drop', colorClass: 'bg-primary/10', textColorClass: 'text-primary' }
    ],
    steps: [
      { title: 'Brew the Espresso', description: 'Grind 18-20g of coffee beans. Brew a single or double shot of espresso directly into a pre-warmed demitasse cup.' },
      { title: 'Steam the Milk', description: 'Steam a small amount of milk. You want to create a rich, dense microfoam. Aim for a velvety texture rather than large bubbles.' },
      { title: 'Mark the Spot', description: 'Gently spoon a dollop of foam directly onto the center of the crema. Serve immediately for the best taste.' }
    ],
    baristaTip: 'This drink is all about the espresso. The milk is just a modifier. Do not add too much milk or it becomes a Piccolo.',
    tastingNotes: ['Strong', 'Sweet Foam', 'Cocoa'],
    origin: 'Ethiopia',
    roast: 'Medium'
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    description: 'Velvety microfoam poured over double espresso.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7KLUt_k_0D0KvEMpNLHDUSELjGnuKolPAqxSmyyR2aZ010qo9lEr0fCz8E4nOgg1v_gKVsn8SWuC1Jrjup67oI4NgWxyGXz5osfg9RuHIFEe__iUnfblCwT9NPIkStaV0df1y0liAqMAhFI6g-z-A6mQDYstCDWQFftFBD_9Nv8CSGzU3KO-Cxi25WLN8T6M0eZlTsvI8pqqbYKMmTSVE1GYUxCBhRf58loci4M0tkr3B1Exu-Wv1aSvWRwimkFGGiOkigD9fdw',
    tags: ['Smooth', 'Australian'],
    rating: 4.8,
    category: 'Hot',
    stats: {
      time: '4 min',
      difficulty: 'Hard',
      calories: '120 kcal'
    },
    brewingDetails: {
      temperature: '93°C / 200°F',
      grindSize: 'Fine',
      method: 'Free Pour',
      ratio: '1:2 (Milk to Espresso)'
    },
    ingredients: [
      { name: 'Double Espresso', detail: 'Strong base', amount: '60ml', icon: 'coffee', colorClass: 'bg-white/10', textColorClass: 'text-white' },
      { name: 'Steamed Milk', detail: 'Microfoam texture', amount: '120ml', icon: 'water_drop', colorClass: 'bg-white/10', textColorClass: 'text-white' }
    ],
    steps: [
      { title: 'Prepare Espresso', description: 'Brew a double shot of espresso into a ceramic cup.' },
      { title: 'Steam Milk', description: 'Steam milk to create a velvety microfoam with very small bubbles.' },
      { title: 'Pour', description: 'Pour the steamed milk over the espresso, holding back the foam initially, then creating a small white circle in the center.' }
    ],
    baristaTip: 'Microfoam is key. Swirl the milk pitcher vigorously before pouring to ensure the foam is incorporated into the liquid.',
    tastingNotes: ['Velvety', 'Dark Chocolate', 'Toasted'],
    origin: 'Papua New Guinea',
    roast: 'Medium'
  },
  {
    id: 'mocha',
    name: 'Mocha',
    description: 'A delightful mix of espresso, chocolate, and milk.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn62wjr2anDze5yWAJQkq6MA6m3nTzEoZcbEQ-gPBs9SbcqBl6INXfFxLBuNf5w-EMitvFQSnwp1YDHk4PFfzwLrwlEwova1LtUxM9S9-5tAPMOZAsn2Gq9TyjrGpDjCpS3PhNOn7Yn85YJ_ML_CnZAEk-gD4yfN9PWdaiQeAwE_QRqdNoFVl2vrpd_3tMXP49_o_3U46l-neqfY00XulcmcvP_juHzSQj2PI_u5_gR-haBJ-rlGNhneVmQPBBgpeB80VQK4nbHw',
    tags: ['Sweet', 'Indulgent'],
    rating: 4.9,
    category: 'Hot',
    stats: {
      time: '5 min',
      difficulty: 'Medium',
      calories: '290 kcal'
    },
    brewingDetails: {
      temperature: '93°C / 200°F',
      grindSize: 'Fine',
      method: 'Mixing',
    },
    ingredients: [
      { name: 'Espresso', detail: '1 Shot', amount: '30ml', icon: 'coffee', colorClass: 'bg-white/10', textColorClass: 'text-white' },
      { name: 'Chocolate Syrup', detail: 'Rich & Sweet', amount: '30ml', icon: 'water_drop', colorClass: 'bg-white/10', textColorClass: 'text-white' },
      { name: 'Steamed Milk', detail: 'Creamy', amount: '150ml', icon: 'cloud', colorClass: 'bg-white/10', textColorClass: 'text-white' }
    ],
    steps: [
      { title: 'Mix Chocolate', description: 'Add chocolate syrup or powder to your cup.' },
      { title: 'Brew Espresso', description: 'Brew espresso directly onto the chocolate and stir to combine.' },
      { title: 'Add Milk', description: 'Pour steamed milk over the mixture and top with whipped cream if desired.' }
    ],
    baristaTip: 'Use a dark chocolate sauce instead of syrup for a more sophisticated, less sugary flavor profile.',
    tastingNotes: ['Chocolate', 'Rich', 'Dessert-like'],
    origin: 'Sumatra',
    roast: 'Dark'
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    description: 'Steeped for 12+ hours for a smooth, low-acid taste.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCrjcP2YwbQ88p1m66pr69PnDp8hb9GeaVk_DYUy6ULyivpLULP6re6j-qwAEFxajMx77jL_gG3sh0Lu91B3CN2qh6s3xFJYr_mP3r91qBiOeJA2NlC2zcqCBQD7GVboHFIxRRVNv4fhmc8joDGjG7fbfNvlUjroD6a9V4hb2dbZpSKTVNgHSaBUS1lu60bDyIPB0KPjfzUtg4S_BrmB9NynsgyrxjF6FJB4d9JBqZth_YxAHqDH5gVOWH1tJWjGnn54m_wnG_MA',
    tags: ['Chilled', 'Smooth'],
    rating: 4.8,
    category: 'Iced',
    stats: {
      time: '12 hrs',
      difficulty: 'Easy',
      calories: '5 kcal'
    },
    brewingDetails: {
      temperature: 'Room Temp / Cold',
      grindSize: 'Extra Coarse',
      method: 'Immersion',
      ratio: '1:4 (Concentrate)'
    },
    ingredients: [
      { name: 'Coarse Grounds', detail: 'Coffee Beans', amount: '1 cup', icon: 'grain', colorClass: 'bg-white/10', textColorClass: 'text-white' },
      { name: 'Cold Water', detail: 'Filtered', amount: '4 cups', icon: 'water_drop', colorClass: 'bg-white/10', textColorClass: 'text-white' }
    ],
    steps: [
      { title: 'Combine', description: 'Combine coarse coffee grounds and cold water in a pitcher.' },
      { title: 'Steep', description: 'Let it steep in the refrigerator for 12 to 24 hours.' },
      { title: 'Strain', description: 'Strain the coffee through a fine-mesh sieve or coffee filter. Serve over ice.' }
    ],
    baristaTip: 'Do not squeeze the grounds when straining, as this releases bitter tannins. Just let gravity do the work.',
    tastingNotes: ['Smooth', 'Low Acid', 'Dark Cocoa'],
    origin: 'Kenya',
    roast: 'Light'
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    description: 'Fresh espresso and milk served over plenty of ice.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAhirdLB0iL7-N2b2lfU86RpNleHlWY3ya1TCaZ84DLnRpdCT7SLcI3OBPpFiP9Q9VtznDyxxHk2fgYUi4wstitYRxsvlQEHxH8AEVzB1QRY_5k1qaS6B9Cw-QXsNwlaFpBQHG294yV6uqH0p7r36Hv1FE7dvp16n9mhUVNidoJzTkL-GhiS7MwvSYui7P2plwIj7hIjFuVNCk_mLqbBk2XutUKA8LQWUgVg2B-Fv06NXdVZ2HJ0OUMGvLto3CcleH1z_V4MQRKA',
    tags: ['Cold', 'Refreshing'],
    rating: 4.7,
    category: 'Iced',
    stats: {
      time: '5 min',
      difficulty: 'Easy',
      calories: '130 kcal'
    },
    brewingDetails: {
      temperature: '93°C / 200°F (Espresso)',
      grindSize: 'Fine',
      method: 'Pour Over Ice',
    },
    ingredients: [
      { name: 'Espresso', detail: '2 Shots', amount: '60ml', icon: 'coffee', colorClass: 'bg-white/10', textColorClass: 'text-white' },
      { name: 'Milk', detail: 'Cold', amount: '200ml', icon: 'water_drop', colorClass: 'bg-white/10', textColorClass: 'text-white' },
      { name: 'Ice', detail: 'Cubes', amount: '1 cup', icon: 'ac_unit', colorClass: 'bg-white/10', textColorClass: 'text-white' }
    ],
    steps: [
      { title: 'Brew Espresso', description: 'Brew a double shot of espresso and let it cool slightly.' },
      { title: 'Prepare Glass', description: 'Fill a tall glass with ice cubes.' },
      { title: 'Combine', description: 'Pour the milk over the ice, then slowly pour the espresso on top for a layered effect.' }
    ],
    baristaTip: 'If you want a sweeter drink, dissolve the sugar in the hot espresso before pouring it over the ice.',
    tastingNotes: ['Refreshing', 'Sweet', 'Creamy'],
    origin: 'Guatemala',
    roast: 'Medium-Dark'
  },
  {
    id: 'drip',
    name: 'Drip Coffee',
    description: 'Classic brewed coffee made by dripping boiling water.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNTiavlcfM-U5M_vkVUeGqwa5GJhaI-CeN-zJEOKCGyzOS7Lpn4ANzkfpTJIbT8Qim6RluMjLmfd2DF_5rHq099YcAEK7iovM1nXOWtluZbhpl_3U5ZOLxsP0SInlXvvxylm-ikcWSzNAMF8IpFYj8quSNP331xcUZm9yXdvCfSoET1Kj4BklYZUE5F_mcCCXIm6HrARgna6GqXjqzVCBQLUbKtH60UpnJs1W-vCehf1Gun8QhfpF9-3t6uRy79RC1zdPr9jWgnw',
    tags: ['Standard', 'Simple'],
    rating: 4.5,
    category: 'Brewing',
    stats: {
      time: '10 min',
      difficulty: 'Easy',
      calories: '2 kcal'
    },
    brewingDetails: {
      temperature: '92-96°C / 197-205°F',
      grindSize: 'Medium',
      method: 'Drip / Pour Over',
      ratio: '1:16'
    },
    ingredients: [
      { name: 'Medium Grounds', detail: 'Coffee', amount: '2 tbsp', icon: 'grain', colorClass: 'bg-white/10', textColorClass: 'text-white' },
      { name: 'Water', detail: 'Hot', amount: '12 oz', icon: 'water_drop', colorClass: 'bg-white/10', textColorClass: 'text-white' }
    ],
    steps: [
      { title: 'Prepare', description: 'Place a filter in the drip machine basket and add coffee grounds.' },
      { title: 'Brew', description: 'Add water to the reservoir and start the machine.' },
      { title: 'Serve', description: 'Once brewing is complete, pour into a mug and enjoy.' }
    ],
    baristaTip: 'Rinse your paper filter with hot water before adding grounds to remove the paper taste and pre-heat the machine.',
    tastingNotes: ['Balanced', 'Fruity', 'Floral'],
    origin: 'Costa Rica',
    roast: 'Medium'
  }
];
