import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coffees } from '../data/coffees';
import { useFavorites } from '../context/FavoritesContext';
import { useSettings } from '../context/SettingsContext';
import BrewTimer from '../components/BrewTimer';

const Recipe: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const coffee = coffees.find(c => c.id === id);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { tempUnit } = useSettings();
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [showShareFeedback, setShowShareFeedback] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const relatedCoffees = useMemo(() => {
    if (!coffee) return [];
    // Prioritize same category
    let related = coffees.filter(c => c.id !== coffee.id && c.category === coffee.category);
    
    // Fill up to 3 if needed with other random coffees
    if (related.length < 3) {
        const remaining = coffees.filter(c => c.id !== coffee.id && c.category !== coffee.category);
        related = [...related, ...remaining];
    }
    
    return related.slice(0, 3);
  }, [coffee]);

  const getTempPercentage = (tempStr: string) => {
    const lower = tempStr.toLowerCase();
    if (lower.includes('cold') || lower.includes('room') || lower.includes('ice')) return 15;
    
    const match = tempStr.match(/(\d+)/);
    if (match) {
        let val = parseInt(match[0], 10);
        // Heuristic: if > 120, it's likely F. Convert to C.
        if (val > 120) val = (val - 32) * (5/9);
        
        // Scale for coffee: 0C is 0%, 100C is 100%.
        return Math.min(Math.max(val, 0), 100);
    }
    return 95; // Default
  };

  const formatTemperatureDisplay = (tempStr: string) => {
    if (!tempStr.includes('/')) return tempStr;
    const parts = tempStr.split('/');
    if (parts.length < 2) return tempStr;

    // Assuming format is always "C / F" based on data
    const cPart = parts[0].trim();
    const fPart = parts[1].trim();

    return tempUnit === 'C' ? cPart : fPart;
  };

  const getFlavorColorClass = (note: string) => {
    const n = note.toLowerCase();
    if (n.includes('chocolate') || n.includes('cocoa') || n.includes('toffee')) return 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-800';
    if (n.includes('fruit') || n.includes('berry') || n.includes('citrus') || n.includes('floral')) return 'bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-200 border-rose-200 dark:border-rose-800';
    if (n.includes('nut') || n.includes('wood') || n.includes('earth')) return 'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-stone-700';
    if (n.includes('sweet') || n.includes('caramel') || n.includes('vanilla') || n.includes('sugar') || n.includes('dessert')) return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800';
    if (n.includes('spice') || n.includes('biscuit')) return 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-800';
    
    // Default (Creamy, Milky, Smooth, etc.)
    return 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 border-blue-100 dark:border-blue-800';
  };

  const handleShare = async () => {
    if (!coffee) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `BaristaPro: ${coffee.name}`,
          text: `Check out this amazing ${coffee.name} recipe on BaristaPro!`,
          url: window.location.href,
        });
      } catch (err) {
        console.debug('Share cancelled or failed', err);
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShowShareFeedback(true);
        setTimeout(() => setShowShareFeedback(false), 2000);
      } catch (err) {
        console.error('Failed to copy link', err);
      }
    }
  };

  if (!coffee) {
    return <div className="text-white p-10 text-center">Recipe not found</div>;
  }

  const isFav = id ? isFavorite(id) : false;

  return (
    <div className="relative min-h-screen w-full flex flex-col mx-auto max-w-md bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden pb-24">
      {/* Hero Section */}
      <div className="relative w-full h-[45vh] shrink-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${coffee.image})` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent bottom-0 h-32"></div>
        </div>

        {/* Top Navigation */}
        <div className="absolute top-0 left-0 w-full z-10 p-4 pt-8 flex items-center justify-between text-white">
          <Link to="/" className="flex items-center justify-center size-10 rounded-full bg-black/20 backdrop-blur-md hover:bg-black/30 transition-colors">
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </Link>
          <div className="flex gap-3">
            <button 
              onClick={() => id && toggleFavorite(id)}
              className={`flex items-center justify-center size-10 rounded-full backdrop-blur-md transition-all active:scale-90 ${isFav ? 'bg-primary text-white' : 'bg-black/20 text-white hover:bg-black/30'}`}
              aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
            >
              <span className={`material-symbols-outlined text-[24px] ${isFav ? 'filled' : ''}`}>
                {isFav ? 'favorite' : 'favorite_border'}
              </span>
            </button>
            <button 
              onClick={handleShare}
              className="relative flex items-center justify-center size-10 rounded-full bg-black/20 backdrop-blur-md hover:bg-black/30 transition-colors group"
              aria-label="Share recipe"
            >
              <span className="material-symbols-outlined text-[24px]">
                  {showShareFeedback ? 'check' : 'ios_share'}
              </span>
              {showShareFeedback && (
                  <div className="absolute top-full mt-2 right-0 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-lg whitespace-nowrap shadow-xl animate-fade-in">
                      Copied!
                  </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Sheet */}
      <div className="relative z-0 -mt-16 flex-1 flex flex-col px-6 animate-slide-up">
        {/* Header Info */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
             <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-wider border border-primary/10">
                {coffee.tags[0] || 'Coffee'}
             </span>
             <div className="flex text-yellow-500">
                {Array.from({length: Math.floor(coffee.rating)}).map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[16px] filled">star</span>
                ))}
                 {coffee.rating % 1 !== 0 && <span className="material-symbols-outlined text-[16px] filled">star_half</span>}
             </div>
             <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">({coffee.rating})</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 drop-shadow-sm">{coffee.name}</h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
            {coffee.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 border-y border-gray-200 dark:border-white/10 py-4 mb-6">
            <div className="flex flex-col items-center justify-center gap-1 border-r border-gray-200 dark:border-white/10 last:border-0">
               <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
               <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Time</span>
               <span className="text-sm font-bold text-gray-900 dark:text-white">{coffee.stats.time}</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 border-r border-gray-200 dark:border-white/10 last:border-0">
               <span className="material-symbols-outlined text-primary text-[20px]">bar_chart</span>
               <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Level</span>
               <span className="text-sm font-bold text-gray-900 dark:text-white">{coffee.stats.difficulty}</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
               <span className="material-symbols-outlined text-primary text-[20px]">local_fire_department</span>
               <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Calories</span>
               <span className="text-sm font-bold text-gray-900 dark:text-white">{coffee.stats.calories}</span>
            </div>
          </div>

          {/* Bean Profile (Origin, Roast, Notes) */}
          {(coffee.origin || coffee.tastingNotes) && (
            <div className="mb-6 p-4 rounded-2xl bg-stone-100 dark:bg-stone-900/40 border border-stone-200 dark:border-stone-800">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-sm font-bold text-stone-800 dark:text-stone-200 flex items-center gap-2">
                    <span className="material-symbols-outlined">public</span>
                    Bean Profile
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Recommended beans for this brew</p>
                </div>
                {coffee.roast && (
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] uppercase font-bold text-stone-400">Roast</span>
                        <span className="text-xs font-bold text-stone-700 dark:text-stone-300">{coffee.roast}</span>
                    </div>
                )}
              </div>
              
              {coffee.origin && (
                  <div className="flex items-center gap-3 mb-4 p-3 bg-white dark:bg-black/20 rounded-xl">
                    <div className="size-10 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
                        <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Origin</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">{coffee.origin}</p>
                    </div>
                  </div>
              )}

              {coffee.tastingNotes && (
                  <div>
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">Tasting Notes</p>
                    <div className="flex flex-wrap gap-2">
                    {coffee.tastingNotes.map((note, idx) => (
                        <span key={idx} className={`px-3 py-1 rounded-full text-xs font-bold border ${getFlavorColorClass(note)}`}>
                            {note}
                        </span>
                    ))}
                    </div>
                  </div>
              )}
            </div>
          )}
        </div>
        
        {/* Dedicated Temperature Section */}
        {coffee.brewingDetails && (
             <div className="mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-background-dark border border-orange-200/50 dark:border-orange-500/20">
                   <div className="flex items-center justify-between mb-3">
                       <div className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
                           <span className="material-symbols-outlined">thermostat</span>
                           <span className="font-bold text-sm uppercase tracking-wider">Water Temp</span>
                       </div>
                       <span className="text-lg font-bold text-gray-900 dark:text-white">{formatTemperatureDisplay(coffee.brewingDetails.temperature)}</span>
                   </div>
                   <div className="relative h-3 w-full bg-white/60 dark:bg-white/10 rounded-full overflow-hidden">
                       <div 
                           className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-orange-400 to-red-500"
                           style={{ width: `${getTempPercentage(coffee.brewingDetails.temperature)}%` }}
                       ></div>
                   </div>
                   <p className="mt-2 text-[10px] text-orange-800/60 dark:text-orange-200/40 font-medium">
                        Optimal range for extraction without bitterness.
                   </p>
                </div>
             </div>
        )}

        {/* Brewing Guide */}
        {coffee.brewingDetails && (
            <div className="mb-8 p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">tune</span>
                    Brewing Settings
                </h2>
                <div className="space-y-4">
                    {/* Temperature moved to dedicated section above */}

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-full bg-stone-100 dark:bg-stone-500/20 text-stone-600 dark:text-stone-400 flex items-center justify-center">
                                <span className="material-symbols-outlined">grain</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900 dark:text-white">Grind Size</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Bean texture</p>
                            </div>
                        </div>
                        <span className="text-sm font-bold text-gray-900 dark:text-white bg-white dark:bg-white/10 px-3 py-1 rounded-full border border-gray-200 dark:border-white/5 shadow-sm">
                            {coffee.brewingDetails.grindSize}
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                                <span className="material-symbols-outlined">water_drop</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900 dark:text-white">Technique</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Method</p>
                            </div>
                        </div>
                         <span className="text-sm font-bold text-gray-900 dark:text-white bg-white dark:bg-white/10 px-3 py-1 rounded-full border border-gray-200 dark:border-white/5 shadow-sm">
                            {coffee.brewingDetails.method}
                        </span>
                    </div>
                    
                    {coffee.brewingDetails.ratio && (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                                    <span className="material-symbols-outlined">scale</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">Ratio</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Water to Coffee</p>
                                </div>
                            </div>
                             <span className="text-sm font-bold text-gray-900 dark:text-white bg-white dark:bg-white/10 px-3 py-1 rounded-full border border-gray-200 dark:border-white/5 shadow-sm">
                                {coffee.brewingDetails.ratio}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* Ingredients */}
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Ingredients</h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">{coffee.ingredients.length} items</span>
            </div>
            <div className="flex flex-col gap-3">
                {coffee.ingredients.map((ing, idx) => (
                    <div key={idx} className="flex items-center p-3 rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-white/5 transition-colors hover:border-primary/20">
                        <div className={`size-10 rounded-lg flex items-center justify-center shrink-0 ${ing.colorClass || 'bg-gray-100 dark:bg-white/10'} ${ing.textColorClass || 'text-gray-600 dark:text-white'}`}>
                            <span className="material-symbols-outlined text-[20px]">{ing.icon}</span>
                        </div>
                        <div className="ml-4 flex-1">
                            <p className="text-sm font-bold text-gray-900 dark:text-white">{ing.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{ing.detail}</p>
                        </div>
                        <p className="text-sm font-semibold text-primary">{ing.amount}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Tools (Optional) */}
        {coffee.tools && (
            <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Tools Needed</h3>
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                    {coffee.tools.map((tool, idx) => (
                         <div key={idx} className="flex-shrink-0 flex flex-col items-center gap-2 min-w-[80px]">
                            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 flex items-center justify-center text-gray-400 dark:text-gray-500">
                                <span className="material-symbols-outlined text-[32px]">{tool.icon}</span>
                            </div>
                            <span className="text-xs text-center text-gray-600 dark:text-gray-300">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* Ratio Visualizer (Specific for Cappuccino mostly, but could be adapted) */}
        {coffee.id === 'cappuccino' && (
            <div className="mb-8 p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5">
                <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">Composition Ratio</h3>
                <div className="flex w-full h-8 rounded-lg overflow-hidden">
                    <div className="w-1/3 bg-stone-600 flex items-center justify-center text-[10px] text-white/90 font-bold">Espresso</div>
                    <div className="w-1/3 bg-[#d4a373] flex items-center justify-center text-[10px] text-black/60 font-bold">Milk</div>
                    <div className="w-1/3 bg-[#faedcd] flex items-center justify-center text-[10px] text-black/60 font-bold">Foam</div>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">Equal parts for perfect balance</p>
            </div>
        )}

        {/* Preparation Steps */}
        <div className="pb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Preparation</h2>
            <div className="relative pl-4 space-y-8 before:absolute before:inset-y-0 before:left-[19px] before:w-0.5 before:bg-gray-200 dark:before:bg-white/10">
                {coffee.steps.map((step, idx) => (
                    <div key={idx} className="relative pl-14 group">
                        <div className="absolute left-0 top-0 size-10 rounded-full bg-background-light dark:bg-background-dark border-2 border-gray-300 dark:border-white/20 flex items-center justify-center z-10 group-hover:border-primary group-hover:text-primary transition-all">
                            <span className="font-bold text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">
                                {idx + 1}
                            </span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Pro Tip */}
        {coffee.baristaTip && (
             <div className="mt-2 mb-8 p-4 rounded-xl bg-primary/10 border border-primary/20 flex gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">tips_and_updates</span>
                <div>
                    <h5 className="text-sm font-bold text-primary mb-1">Barista Tip</h5>
                    <p className="text-xs text-gray-600 dark:text-[#c9ad92] leading-relaxed">
                        {coffee.baristaTip}
                    </p>
                </div>
            </div>
        )}

        {/* Related Recipes */}
        {relatedCoffees.length > 0 && (
            <div className="mt-4 mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">recommend</span>
                    You might also like
                </h2>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6">
                    {relatedCoffees.map(item => (
                        <Link key={item.id} to={`/recipe/${item.id}`} className="shrink-0 w-36 flex flex-col gap-2 group">
                            <div className="w-full h-36 rounded-2xl bg-gray-100 dark:bg-white/5 relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${item.image})` }}></div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-white flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[10px] filled">star</span> {item.rating}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-gray-900 dark:text-white truncate">{item.name}</h4>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400 truncate">{item.tags[0]} • {item.stats.time}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )}
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark dark:to-transparent z-20 max-w-md mx-auto pointer-events-none">
        <button 
            className="pointer-events-auto w-full bg-primary hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-2xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
            onClick={() => setIsTimerOpen(true)}
        >
            <span className="material-symbols-outlined">play_circle</span>
            <span>Start Brewing</span>
        </button>
      </div>

      <BrewTimer 
        isOpen={isTimerOpen} 
        onClose={() => setIsTimerOpen(false)} 
        durationStr={coffee.stats.time} 
        coffeeName={coffee.name}
      />
    </div>
  );
};

export default Recipe;