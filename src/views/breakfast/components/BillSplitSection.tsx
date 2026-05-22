import React from 'react';

const BillSplitSection: React.FC = () => {
  return (
    <section className="bg-secondary-container/30 rounded-lg p-4 border-2 border-dashed border-secondary-container flex flex-col items-center justify-center gap-md text-center">
      <span className="material-symbols-outlined text-secondary text-4xl" data-icon="payments">payments</span>
      <div>
        <p className="font-headline-md text-secondary">Tạm tính: 35k/người</p>
        <p className="text-on-secondary-container/70 text-label-md">Bao gồm phí ship & hộp</p>
      </div>
      <div className="w-full h-3 bg-surface-container rounded-full mt-4 overflow-hidden">
        <div className="h-full w-[85%] bg-gradient-to-r from-secondary-fixed to-secondary rounded-full shadow-[0_0_8px_rgba(112,93,0,0.3)]"></div>
      </div>
      <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-4">12/15 người đã chốt</p>
    </section>
  );
};

export default BillSplitSection;
