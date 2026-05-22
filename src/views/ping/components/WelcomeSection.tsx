import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="block w-2 h-2 rounded-full bg-tertiary pulse-dot ml-2"></span>
        <p className="text-on-surface-variant font-label-md text-label-md">12 đồng nghiệp đang online</p>
      </div>
      <h2 className="font-headline-md text-headline-md text-on-surface">Cần gì, Ping nấy! ⚡</h2>
    </section>
  );
};

export default WelcomeSection;
