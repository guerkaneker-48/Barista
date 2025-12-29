import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Saved from './pages/Saved';
import Settings from './pages/Settings';
import BottomNav from './components/BottomNav';
import { FavoritesProvider } from './context/FavoritesContext';
import { SettingsProvider } from './context/SettingsContext';

const App: React.FC = () => {
  return (
    <SettingsProvider>
      <FavoritesProvider>
        <Router>
          <div className="mx-auto max-w-md bg-background-light dark:bg-background-dark min-h-screen shadow-2xl overflow-hidden relative transition-colors duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/recipe/:id" element={<Recipe />} />
            </Routes>
            <BottomNav />
          </div>
        </Router>
      </FavoritesProvider>
    </SettingsProvider>
  );
};

export default App;