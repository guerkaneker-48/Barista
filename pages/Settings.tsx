import React from 'react';
import { useSettings } from '../context/SettingsContext';
import { useFavorites } from '../context/FavoritesContext';

const Settings: React.FC = () => {
  const { theme, toggleTheme, tempUnit, toggleTempUnit } = useSettings();
  const { favorites, toggleFavorite } = useFavorites();

  const handleClearFavorites = () => {
    if (window.confirm('Are you sure you want to clear all your saved recipes?')) {
      favorites.forEach(id => toggleFavorite(id));
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-40 flex items-center justify-between bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 border-b border-black/5 dark:border-white/5">
        <h2 className="text-xl font-bold leading-tight tracking-tight dark:text-white">Settings</h2>
      </header>

      <div className="p-4 space-y-6 animate-fade-in">
        
        {/* Appearance Section */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-3 px-1">Appearance</h3>
          <div className="bg-white dark:bg-card-dark rounded-2xl border border-black/5 dark:border-white/5 overflow-hidden">
            <div className="flex items-center justify-between p-4" onClick={toggleTheme}>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 flex items-center justify-center">
                  <span className="material-symbols-outlined">{theme === 'dark' ? 'dark_mode' : 'light_mode'}</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Dark Mode</p>
                  <p className="text-xs text-text-secondary">Toggle app theme</p>
                </div>
              </div>
              <button 
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${theme === 'dark' ? 'bg-primary' : 'bg-gray-200 dark:bg-white/10'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
        </section>

        {/* Preferences Section */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-3 px-1">Preferences</h3>
          <div className="bg-white dark:bg-card-dark rounded-2xl border border-black/5 dark:border-white/5 overflow-hidden">
            <div className="flex items-center justify-between p-4" onClick={toggleTempUnit}>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 flex items-center justify-center">
                  <span className="material-symbols-outlined">thermostat</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Temperature Unit</p>
                  <p className="text-xs text-text-secondary">Celsius / Fahrenheit</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-100 dark:bg-black/20 rounded-lg p-1">
                 <button className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${tempUnit === 'C' ? 'bg-white dark:bg-white/10 text-primary shadow-sm' : 'text-gray-400'}`}>°C</button>
                 <button className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${tempUnit === 'F' ? 'bg-white dark:bg-white/10 text-primary shadow-sm' : 'text-gray-400'}`}>°F</button>
              </div>
            </div>
          </div>
        </section>

        {/* Data Section */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-3 px-1">Data Management</h3>
          <div className="bg-white dark:bg-card-dark rounded-2xl border border-black/5 dark:border-white/5 overflow-hidden">
             <button onClick={handleClearFavorites} className="w-full flex items-center gap-3 p-4 text-left active:bg-gray-50 dark:active:bg-white/5 transition-colors">
                <div className="size-10 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300 flex items-center justify-center">
                  <span className="material-symbols-outlined">delete_forever</span>
                </div>
                <div>
                  <p className="font-bold text-red-600 dark:text-red-400">Clear Favorites</p>
                  <p className="text-xs text-text-secondary">Remove all saved recipes locally</p>
                </div>
             </button>
          </div>
        </section>

        {/* About Section */}
        <section className="pt-4 text-center">
            <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-gradient-to-br from-primary to-orange-600 text-white shadow-xl shadow-primary/30 mb-4">
                <span className="material-symbols-outlined text-3xl">coffee</span>
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white">BaristaPro</h4>
            <p className="text-xs text-text-secondary mt-1">Version 1.0.0</p>
            <p className="text-xs text-text-secondary mt-4">Made with ☕ and Code</p>
        </section>
      </div>
    </div>
  );
};

export default Settings;