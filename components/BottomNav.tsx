import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Don't show on recipe detail pages
  if (location.pathname.includes('/recipe/')) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-around border-t border-white/5 bg-background-dark/80 backdrop-blur-xl px-2 pb-2 safe-area-pb">
      <Link to="/" className="group flex flex-col items-center gap-1 p-2 w-16">
        <span className={`material-symbols-outlined text-[28px] transition-transform group-active:scale-90 ${isActive('/') ? 'text-primary' : 'text-text-secondary'}`}>home</span>
        <span className={`text-[10px] font-medium ${isActive('/') ? 'text-primary' : 'text-text-secondary'}`}>Home</span>
      </Link>
      <Link to="/saved" className="group flex flex-col items-center gap-1 p-2 w-16">
        <span className={`material-symbols-outlined text-[28px] transition-transform group-active:scale-90 ${isActive('/saved') ? 'text-primary filled' : 'text-text-secondary'}`}>favorite</span>
        <span className={`text-[10px] font-medium ${isActive('/saved') ? 'text-primary' : 'text-text-secondary'}`}>Saved</span>
      </Link>
      <button className="group flex flex-col items-center gap-1 p-2 w-16">
        <span className="material-symbols-outlined text-text-secondary group-hover:text-white text-[28px] transition-colors group-active:scale-90">settings</span>
        <span className="text-[10px] font-medium text-text-secondary group-hover:text-white">Settings</span>
      </button>
    </nav>
  );
};

export default BottomNav;