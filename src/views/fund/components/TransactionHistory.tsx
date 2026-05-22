import React from 'react';

const TransactionHistory: React.FC = () => {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-headline-md text-headline-md text-on-surface">Giao dịch gần đây</h2>
        <button className="text-primary font-bold text-sm">Tất cả</button>
      </div>
      <div className="space-y-3">
        {/* Transaction 1 */}
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4 active-tap cursor-pointer">
          <div className="w-12 h-12 bg-error-container/20 rounded-full flex items-center justify-center text-error">
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-on-surface">Mua 2kg cam</p>
            <p className="text-xs text-on-surface-variant">Hôm nay, 10:30 • Quỹ Trà Đá</p>
          </div>
          <p className="font-bold text-error">-60k</p>
        </div>
        {/* Transaction 2 */}
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4 active-tap cursor-pointer">
          <div className="w-12 h-12 bg-tertiary-container/20 rounded-full flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined">payments</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-on-surface">Lương đóng quỹ</p>
            <p className="text-xs text-on-surface-variant">Hôm qua, 15:45 • Quỹ Ăn Trưa</p>
          </div>
          <p className="font-bold text-tertiary">+100k</p>
        </div>
        {/* Transaction 3 */}
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4 active-tap cursor-pointer">
          <div className="w-12 h-12 bg-error-container/20 rounded-full flex items-center justify-center text-error">
            <span className="material-symbols-outlined">lunch_dining</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-on-surface">Cơm tấm đêm</p>
            <p className="text-xs text-on-surface-variant">12 Th08, 19:20 • Quỹ Ăn Trưa</p>
          </div>
          <p className="font-bold text-error">-450k</p>
        </div>
      </div>
    </section>
  );
};

export default TransactionHistory;
