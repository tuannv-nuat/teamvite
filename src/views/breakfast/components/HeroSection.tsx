import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-lg bg-primary-container p-4 text-on-primary-container shadow-lg">
      <div className="relative z-10 space-y-2">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile">Sáng mai ăn gì? 🥐</h2>
        <p className="text-on-primary-container/80 font-label-md">Chọn món và chốt kèo trước 9h tối nay nhé!</p>
      </div>
      <div className="absolute -right-4 -bottom-4 opacity-20">
        <span className="material-symbols-outlined text-[120px]" data-icon="bakery_dining">bakery_dining</span>
      </div>
    </section>
  );
};

export default HeroSection;
