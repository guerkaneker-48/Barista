import React, { useState, useEffect, useRef } from 'react';

interface BrewTimerProps {
  isOpen: boolean;
  onClose: () => void;
  durationStr: string;
  coffeeName: string;
}

const BrewTimer: React.FC<BrewTimerProps> = ({ isOpen, onClose, durationStr, coffeeName }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Parse duration string to seconds
  useEffect(() => {
    if (isOpen) {
      const parseDuration = (str: string): number => {
        const lowerStr = str.toLowerCase();
        let seconds = 0;
        
        // Match numbers
        const numbers = lowerStr.match(/(\d+)/);
        if (!numbers) return 300; // Default 5 mins

        const val = parseInt(numbers[0], 10);

        if (lowerStr.includes('hr') || lowerStr.includes('hour')) {
            seconds = val * 3600;
        } else if (lowerStr.includes('min') || lowerStr.includes('m') && !lowerStr.includes('ms')) {
            seconds = val * 60;
        } else if (lowerStr.includes('sec') || lowerStr.includes('s')) {
            seconds = val;
        } else {
            seconds = val * 60; // Default to minutes if unit missing
        }
        return seconds;
      };

      const initialSeconds = parseDuration(durationStr);
      setTotalTime(initialSeconds);
      setTimeLeft(initialSeconds);
      setIsActive(false);
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen, durationStr]);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
            if (prev <= 1) {
                setIsActive(false);
                if (timerRef.current) clearInterval(timerRef.current);
                return 0;
            }
            return prev - 1;
        });
      }, 1000);
    } else {
        if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(totalTime);
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    if (h > 0) {
        return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progress = totalTime > 0 ? ((totalTime - timeLeft) / totalTime) * 100 : 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in text-white p-6 safe-area-pb">
       {/* Close Button */}
       <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
          <span className="material-symbols-outlined text-3xl">close</span>
       </button>

       <div className="text-center mb-10 mt-[-40px]">
           <h3 className="text-white/60 text-sm font-bold uppercase tracking-widest mb-2">Brewing</h3>
           <h2 className="text-3xl font-bold">{coffeeName}</h2>
       </div>

       {/* Timer Display */}
       <div className="relative flex items-center justify-center w-72 h-72 rounded-full border-8 border-white/5 mb-12 shadow-2xl shadow-black/50">
            {/* SVG Circle for Progress */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-primary transition-all duration-1000 ease-linear"
                    strokeDasharray={289}
                    strokeDashoffset={289 - (289 * progress) / 100}
                    strokeLinecap="round"
                />
            </svg>
            
            <div className="flex flex-col items-center z-10">
                <span className="text-7xl font-bold tracking-tighter tabular-nums font-mono">
                    {formatTime(timeLeft)}
                </span>
                <span className="text-white/50 text-sm font-medium mt-2 uppercase tracking-widest">
                    {isActive ? 'Brewing...' : timeLeft === 0 ? 'Enjoy!' : 'Ready'}
                </span>
            </div>
       </div>

       {/* Controls */}
       <div className="flex items-center gap-8">
           <button 
                onClick={resetTimer}
                className="flex flex-col items-center gap-2 p-4 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
           >
                <span className="material-symbols-outlined text-3xl">replay</span>
                <span className="text-xs font-bold uppercase tracking-wider">Reset</span>
           </button>

           <button 
                onClick={toggleTimer}
                className={`flex items-center justify-center w-24 h-24 rounded-full shadow-2xl shadow-primary/20 transition-all active:scale-95 ${isActive ? 'bg-orange-600 text-white' : 'bg-primary text-white hover:bg-primary/90'}`}
           >
                <span className="material-symbols-outlined text-5xl filled">
                    {isActive ? 'pause' : 'play_arrow'}
                </span>
           </button>

           <button 
                onClick={() => setTimeLeft(prev => prev + 30)}
                className="flex flex-col items-center gap-2 p-4 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
           >
                <span className="material-symbols-outlined text-3xl">more_time</span>
                <span className="text-xs font-bold uppercase tracking-wider">+30s</span>
           </button>
       </div>
    </div>
  );
};

export default BrewTimer;