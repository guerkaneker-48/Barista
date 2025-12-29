import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type TempUnit = 'C' | 'F';

interface SettingsContextType {
  theme: Theme;
  toggleTheme: () => void;
  tempUnit: TempUnit;
  toggleTempUnit: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme Logic
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('baristaPro_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    // Default to dark as per index.html
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('baristaPro_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Unit Logic
  const [tempUnit, setTempUnit] = useState<TempUnit>(() => {
    return (localStorage.getItem('baristaPro_unit') as TempUnit) || 'C';
  });

  useEffect(() => {
    localStorage.setItem('baristaPro_unit', tempUnit);
  }, [tempUnit]);

  const toggleTempUnit = () => {
    setTempUnit(prev => prev === 'C' ? 'F' : 'C');
  };

  return (
    <SettingsContext.Provider value={{ theme, toggleTheme, tempUnit, toggleTempUnit }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error('useSettings must be used within a SettingsProvider');
  return context;
};