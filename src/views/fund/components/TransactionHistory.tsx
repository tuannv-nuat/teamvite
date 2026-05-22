import React from 'react';

const TransactionHistory: React.FC = () => {

  const transactions = [
    {
      id: '1',
      user: 'Minh Anh',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVXLoI9rbpbijPx8umLZ6r5bJe2UQSyyggN32D2Rm7Nxyhup39vXOm3U0hYMkUqGSsTk-aeYwa2aPEIMznkZnEH3q3LTsc9_iajevdK5_MHKlSnlNp20Af26jRaJMYHhvtyMu5H6cKdU6NtuUmOFOi3q1Sn3ba1A1GSN1hIeBRIhvGPw0tUR9jjr2KEUjO6hM4yzdPEZBmoplXB54SXP7IGZamVD4FKXkI0TD3gP_ewCCDxGVwJySA3kRCldiJukuJCmz1Kob3sEo',
      action: 'Mua 2kg cam',
      time: 'Hôm nay, 10:30',
      amount: '-60k',
      type: 'error',
      icon: 'shopping_cart'
    },
    {
      id: '2',
      user: 'Hoàng Nam',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlURTHyqSYeveCgPVAqZZueYHwdYRpLFSpDXgbYNIcQnvFQJGphizqPmFJdRE0CYUrIeAyhDhAZ6_ctsM9qdL2HRCQcJpJdLgal8S-5-SDfwjIhvHw08TvALxElFg0qP_JdJJyV8ZXtrcZOmFs58DtWmDyCQ92Sla1Rr-LWC1Eb8Hh8Pj78IOaS-Z7RLeLh34mMFqw_FSRil79fdE5HsouZP4s1Xc7N8Zwc-qKC_1-8a1l9sLoztQ4vq3JaigrG75VjH2qSZv21eM',
      action: 'Lương đóng quỹ',
      time: 'Hôm qua, 15:45',
      amount: '+100k',
      type: 'tertiary',
      icon: 'payments'
    },
    {
      id: '3',
      user: 'Linh',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvyehDbOi5vsK0XdU5dkzTMsy3M1LbTuTe0kz4-ZGeu1FKEp0UZI9rwk95edk0fooN5gES7R00CmMj6F-h5eBy8tsUaL5pyPG_qCbmXkRu9WVIqV75bOB0QqPMy5FotiOFSnRAtgrMump9RDxSmotBpL0T8ZrhYHN_Jl7p0yweqRR3PGFGmZl3yN9cgB8QV7nyysNsJUq80cnEXDWpOCQdCeo3JlnjnA5Lee6tqiDYiwis38KQc_hnf7oYox4UNTJjP0WwCe5B83k',
      action: 'Cơm tấm đêm',
      time: '12 Th08, 19:20',
      amount: '-450k',
      type: 'error',
      icon: 'lunch_dining'
    }
  ]

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-headline-md text-headline-md text-on-surface">Giao dịch gần đây</h2>
        <button className="text-primary font-bold text-sm">Tất cả</button>
      </div>
      <div className="space-y-3">
        {transactions.map((item, index) => {
          return (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4 active-tap cursor-pointer">
              <div className={`w-12 h-12 ${item.type}-container/20 rounded-full flex items-center justify-center ${item.type}`}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div className="flex-1">
                <p className="font-bold text-on-surface">{item.action}</p>
                <p className="text-xs text-on-surface-variant">{item.time} • {item.user}</p>
              </div>
              <p className="font-bold text-error">{item.amount}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default TransactionHistory;
