import React from 'react';

interface HeroSectionProps {
  userName?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ userName = 'Tuấn' }) => {
  return (
    <section className="mt-4">
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
        Xin chào <span className="text-primary">{userName}! 🍕</span>
      </h2>
      <p className="text-on-surface-variant font-label-md mt-1">
        Sẵn sàng cho một ngày bùng nổ cùng team?
      </p>
    </section>
  );
};

export default HeroSection;
