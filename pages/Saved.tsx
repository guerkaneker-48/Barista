import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { coffees } from '../data/coffees';

const Saved: React.FC = () => {
  const { favorites } = useFavorites();
  
  const savedCoffees = coffees.filter(coffee => favorites.includes(coffee.id));

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-40 flex items-center justify-between bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 border-b border-black/5 dark:border-white/5">
        <h2 className="text-xl font-bold leading-tight tracking-tight dark:text-white">Your Favorites</h2>
        <div className="text-sm font-medium text-text-secondary">{savedCoffees.length} saved</div>
      </header>

      <div className="flex flex-col pt-6 px-4 gap-4 animate-fade-in">
        {savedCoffees.length > 0 ? (
          savedCoffees.map((coffee) => (
             <Link key={coffee.id} to={`/recipe/${coffee.id}`} className="flex overflow-hidden rounded-xl bg-white dark:bg-card-dark ring-1 ring-black/5 dark:ring-white/5 transition-colors hover:bg-gray-50 dark:hover:bg-[#3d2e20] shadow-sm">
                <div className="w-32 shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${coffee.image})` }}></div>
                <div className="flex flex-1 flex-col justify-center p-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold dark:text-white">{coffee.name}</h3>
                    <span className="rounded bg-black/5 dark:bg-white/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-white">{coffee.tags[0]}</span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-text-secondary">{coffee.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-medium text-text-secondary">{coffee.stats.time} • {coffee.stats.difficulty}</span>
                    <span className="text-xs font-bold text-primary hover:text-gray-900 dark:hover:text-white transition-colors">View Recipe</span>
                  </div>
                </div>
             </Link>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center pt-20 text-text-secondary">
             <div className="h-16 w-16 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl">favorite_border</span>
             </div>
             <h3 className="text-lg font-bold text-gray-900 dark:text-white">No favorites yet</h3>
             <p className="text-sm text-center max-w-[200px] mt-2">Start exploring and save your best brews here.</p>
             <Link to="/" className="mt-6 px-6 py-2 bg-primary text-white rounded-full text-sm font-bold shadow-lg shadow-primary/20">
                Explore Coffees
             </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Saved;