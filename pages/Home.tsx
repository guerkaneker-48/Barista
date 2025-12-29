import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { coffees } from '../data/coffees';
import { Coffee } from '../types';

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredCoffee = coffees.find(c => c.id === 'cappuccino') || coffees[0];
  
  const filteredCoffees = coffees.filter(coffee => {
    const matchesCategory = activeCategory === 'All' || coffee.category === activeCategory || (activeCategory === 'Specials' && coffee.rating >= 4.9);
    const matchesSearch = coffee.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { name: 'All', icon: 'local_cafe' },
    { name: 'Hot', icon: 'local_fire_department' },
    { name: 'Iced', icon: 'ac_unit' },
    { name: 'Brewing', icon: 'coffee_maker' },
    { name: 'Specials', icon: 'star' },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 border-b border-black/5 dark:border-white/5">
        <div>
          <p className="text-text-secondary text-sm font-medium">Good Morning,</p>
          <h2 className="text-xl font-bold leading-tight tracking-tight dark:text-white">Coffee lovers</h2>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors relative">
          <span className="material-symbols-outlined dark:text-white">notifications</span>
          <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-primary border border-background-light dark:border-background-dark"></span>
        </button>
      </header>

      {/* Search */}
      <div className="px-4 pt-4 pb-2">
        <div className="relative group">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <span className="material-symbols-outlined text-text-secondary group-focus-within:text-primary transition-colors">search</span>
          </div>
          <input 
            type="text"
            className="font-display block w-full rounded-2xl border-none bg-white dark:bg-card-dark py-3.5 pl-12 pr-12 text-sm text-gray-900 dark:text-white placeholder-text-secondary shadow-lg shadow-black/5 dark:shadow-black/20 ring-1 ring-black/5 dark:ring-white/5 transition-all focus:ring-2 focus:ring-primary/50"
            placeholder="Find your coffee..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
             <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/5 dark:bg-white/5 text-text-secondary hover:bg-black/10 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[18px]">tune</span>
             </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="w-full pt-2">
        <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button 
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-transform active:scale-95 ${
                activeCategory === cat.name 
                ? 'bg-primary shadow-lg shadow-primary/20' 
                : 'bg-white dark:bg-card-dark border border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${activeCategory === cat.name ? 'text-white' : 'text-text-secondary'}`}>{cat.icon}</span>
              <p className={`text-sm font-semibold ${activeCategory === cat.name ? 'text-white' : 'text-text-secondary'}`}>{cat.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Featured (Only show if no search query) */}
      {!searchQuery && activeCategory === 'All' && (
        <div className="flex flex-col pt-6 animate-fade-in">
          <div className="flex items-center justify-between px-4 pb-3">
            <h2 className="text-2xl font-bold tracking-tight dark:text-white">Featured Drink</h2>
            <button className="text-primary text-sm font-medium hover:text-primary/80">See all</button>
          </div>
          <div className="px-4 w-full">
            <Link to={`/recipe/${featuredCoffee.id}`} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-card-dark shadow-xl shadow-black/5 dark:shadow-black/20 ring-1 ring-black/5 dark:ring-white/5 transition-all hover:ring-primary/50">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${featuredCoffee.image})` }}></div>
                <div className="absolute top-3 right-3 z-20 rounded-full bg-white/20 backdrop-blur-md px-2 py-1 text-xs font-bold text-white flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">timer</span> {featuredCoffee.stats.time}
                </div>
              </div>
              <div className="flex flex-col p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">{featuredCoffee.name}</h3>
                    <p className="text-text-secondary text-sm line-clamp-1">{featuredCoffee.description}</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1">
                    <span className="material-symbols-outlined text-primary text-[16px]">bolt</span>
                    <span className="text-xs font-bold text-primary">{featuredCoffee.tags[0]}</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-3">
                  <div className="flex gap-4">
                     {featuredCoffee.ingredients.slice(0, 2).map((ing, i) => (
                        <div key={i} className="flex items-center gap-1 text-text-secondary text-xs">
                          <span className="material-symbols-outlined text-[16px]">{ing.icon}</span>
                          <span>{ing.name}</span>
                        </div>
                     ))}
                  </div>
                  <button className="rounded-full bg-primary p-2 text-white shadow-lg shadow-primary/30 transition-transform active:scale-95 group-hover:bg-primary/90">
                    <span className="material-symbols-outlined block">arrow_forward</span>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Popular List */}
      <div className="flex flex-col pt-8">
        <h2 className="px-4 pb-4 text-2xl font-bold tracking-tight dark:text-white">
            {searchQuery ? 'Search Results' : 'Popular Brews'}
        </h2>
        <div className="flex flex-col gap-4 px-4">
          {filteredCoffees.map((coffee) => (
             /* Skip featured in main list if showing featured */
             (!searchQuery && activeCategory === 'All' && coffee.id === featuredCoffee.id) ? null :
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
          ))}
          {filteredCoffees.length === 0 && (
             <div className="text-center py-10 text-text-secondary">
                 <span className="material-symbols-outlined text-4xl mb-2">sentiment_dissatisfied</span>
                 <p>No coffees found.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;