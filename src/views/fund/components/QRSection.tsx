import React from 'react';

const QRSection: React.FC = () => {
  return (
    <section className="glass-card p-8 rounded-lg shadow-lg text-center space-y-6 relative border-2 border-dashed border-primary/20">
      <h3 className="font-headline-md text-headline-md text-primary">Nạp Quỹ Nhanh</h3>
      <div className="bg-white p-4 rounded-xl inline-block shadow-inner relative group cursor-pointer">
        <div className="w-48 h-48 bg-surface-container flex items-center justify-center relative">
          {/* Fake QR generated via patterns */}
          <div className="grid grid-cols-6 grid-rows-6 gap-1 w-40 h-40 opacity-80">
            <div className="bg-on-surface"></div><div className="bg-on-surface"></div><div className="bg-on-surface"></div>
            <div className="bg-on-surface"></div><div className="bg-on-surface"></div><div className="bg-on-surface"></div>
            <div className="bg-on-surface"></div><div></div><div></div><div></div><div></div><div className="bg-on-surface"></div>
            <div className="bg-on-surface"></div><div></div><div className="bg-on-surface"></div><div className="bg-on-surface"></div>
            <div></div><div className="bg-on-surface"></div><div className="bg-on-surface"></div><div></div>
            <div className="bg-on-surface"></div><div className="bg-on-surface"></div><div></div><div className="bg-on-surface"></div>
            <div className="bg-on-surface"></div><div></div><div></div><div></div><div></div>
            <div className="bg-on-surface"></div><div className="bg-on-surface"></div><div className="bg-on-surface"></div>
            <div className="bg-on-surface"></div><div className="bg-on-surface"></div><div className="bg-on-surface"></div>
            <div className="bg-on-surface"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-2 rounded-lg shadow-md">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
          <span className="bg-white text-primary font-bold px-4 py-2 rounded-full shadow-lg">Download QR</span>
        </div>
      </div>
      <p className="text-label-md font-label-md text-on-surface-variant">Quét mã để đóng 50k vào Quỹ Ăn Trưa</p>
    </section>
  );
};

export default QRSection;
