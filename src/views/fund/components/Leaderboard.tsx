import React from 'react';

const Leaderboard: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
        <span>👑</span> Thánh Đóng Quỹ
      </h2>
      <div className="bg-surface-container-low rounded-lg p-2 space-y-2">
        {/* Rank 1 */}
        <div className="flex items-center justify-between p-3 bg-white rounded-full shadow-sm border-l-4 border-secondary-container">
          <div className="flex items-center gap-3">
            <span className="font-bold text-secondary italic">#1</span>
            <img
              alt="Avatar"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
              data-alt="Avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVXLoI9rbpbijPx8umLZ6r5bJe2UQSyyggN32D2Rm7Nxyhup39vXOm3U0hYMkUqGSsTk-aeYwa2aPEIMznkZnEH3q3LTsc9_iajevdK5_MHKlSnlNp20Af26jRaJMYHhvtyMu5H6cKdU6NtuUmOFOi3q1Sn3ba1A1GSN1hIeBRIhvGPw0tUR9jjr2KEUjO6hM4yzdPEZBmoplXB54SXP7IGZamVD4FKXkI0TD3gP_ewCCDxGVwJySA3kRCldiJukuJCmz1Kob3sEo"
            />
            <div>
              <p className="font-label-md text-label-md">Minh Anh</p>
              <p className="text-xs text-on-surface-variant">Top Contributor</p>
            </div>
          </div>
          <p className="font-bold text-primary">+500k</p>
        </div>
        {/* Rank 2 */}
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-3">
            <span className="font-bold text-on-surface-variant">#2</span>
            <img
              alt="Avatar"
              className="w-10 h-10 rounded-full"
              data-alt="Avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlURTHyqSYeveCgPVAqZZueYHwdYRpLFSpDXgbYNIcQnvFQJGphizqPmFJdRE0CYUrIeAyhDhAZ6_ctsM9qdL2HRCQcJpJdLgal8S-5-SDfwjIhvHw08TvALxElFg0qP_JdJJyV8ZXtrcZOmFs58DtWmDyCQ92Sla1Rr-LWC1Eb8Hh8Pj78IOaS-Z7RLeLh34mMFqw_FSRil79fdE5HsouZP4s1Xc7N8Zwc-qKC_1-8a1l9sLoztQ4vq3JaigrG75VjH2qSZv21eM"
            />
            <div>
              <p className="font-label-md text-label-md">Hoàng Nam</p>
              <p className="text-xs text-on-surface-variant">Active Giver</p>
            </div>
          </div>
          <p className="font-bold text-primary">+350k</p>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
