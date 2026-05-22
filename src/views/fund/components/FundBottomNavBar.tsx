import React from 'react';

const FundBottomNavBar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface/70 dark:bg-surface-dim/70 backdrop-blur-2xl shadow-[0_-4px_20px_rgba(144,77,0,0.1)] rounded-t-lg">
      <div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active-tap cursor-pointer">
        <span className="material-symbols-outlined">home</span>
        <span className="font-label-md text-label-md">Home</span>
      </div>
      <div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active-tap cursor-pointer">
        <span className="material-symbols-outlined">restaurant</span>
        <span className="font-label-md text-label-md">Lunch</span>
      </div>
      <div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active-tap cursor-pointer">
        <span className="material-symbols-outlined">campaign</span>
        <span className="font-label-md text-label-md">Ping</span>
      </div>
      {/* Active Tab: Fund */}
      <div className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl px-4 py-1 active-tap cursor-pointer">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
        <span className="font-label-md text-label-md">Fund</span>
      </div>
      <div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active-tap cursor-pointer">
        <span className="material-symbols-outlined">bakery_dining</span>
        <span className="font-label-md text-label-md">Breakfast</span>
      </div>
    </nav>
  );
};

export default FundBottomNavBar;
