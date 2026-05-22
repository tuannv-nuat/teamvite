import React from 'react';

const FundCards: React.FC = () => {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-end">
        <h2 className="font-headline-md text-headline-md text-on-surface">Budget Hub</h2>
        <span className="text-label-md font-label-md text-primary bg-primary-fixed px-3 py-1 rounded-full">Live Now</span>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {/* Quỹ Ăn Trưa */}
        <div className="glass-card p-6 rounded-lg shadow-sm relative overflow-hidden group bouncy-hover active-tap transition-all cursor-pointer">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl">restaurant</span>
          </div>
          <div className="flex justify-between items-start mb-4">
            <div className="bg-primary-container/20 p-2 rounded-xl">
              <span className="text-3xl">🍱</span>
            </div>
            <div className="text-right">
              <p className="font-label-md text-label-md text-on-surface-variant">Quỹ Ăn Trưa</p>
              <p className="font-headline-md text-headline-md text-primary">2.450.000đ</p>
            </div>
          </div>
          {/* Mini Sparkline */}
          <div className="w-full h-12 flex items-end gap-1">
            <svg className="w-full h-full" viewBox="0 0 100 30">
              <path className="sparkline" d="M0,25 Q15,5 30,20 T60,10 T90,15 T100,5" fill="none" stroke="#904d00" strokeWidth="2"></path>
            </svg>
          </div>
        </div>
        {/* Quỹ Trà Đá */}
        <div className="glass-card p-6 rounded-lg shadow-sm relative overflow-hidden group bouncy-hover active-tap transition-all cursor-pointer">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl">bakery_dining</span>
          </div>
          <div className="flex justify-between items-start mb-4">
            <div className="bg-tertiary-container/20 p-2 rounded-xl">
              <span className="text-3xl">🧋</span>
            </div>
            <div className="text-right">
              <p className="font-label-md text-label-md text-on-surface-variant">Quỹ Trà Đá</p>
              <p className="font-headline-md text-headline-md text-tertiary">840.000đ</p>
            </div>
          </div>
          <div className="w-full h-12 flex items-end gap-1">
            <svg className="w-full h-full" viewBox="0 0 100 30">
              <path className="sparkline" d="M0,20 Q20,25 40,10 T70,15 T100,22" fill="none" stroke="#006e1c" strokeWidth="2"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundCards;
