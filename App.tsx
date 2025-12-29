import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Saved from './pages/Saved';
import BottomNav from './components/BottomNav';
import { FavoritesProvider } from './context/FavoritesContext';

const App: React.FC = () => {
  return (
    <FavoritesProvider>
      <Router>
        <div className="mx-auto max-w-md bg-background-light dark:bg-background-dark min-h-screen shadow-2xl overflow-hidden relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/recipe/:id" element={<Recipe />} />
          </Routes>
          <BottomNav />
        </div>
      </Router>
    </FavoritesProvider>
  );
};

export default App;