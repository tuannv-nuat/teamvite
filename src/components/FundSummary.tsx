import React from 'react';

interface FundCard {
  title: string;
  amount: string;
  icon: string;
  subtitle: string;
  color: 'primary' | 'secondary-container';
}

interface FundSummaryProps {
  funds?: FundCard[];
}

const FundSummary: React.FC<FundSummaryProps> = ({
  funds = [
    {
      title: 'Quỹ Lunch',
      amount: '1.500k',
      icon: 'payments',
      subtitle: '+250k tuần này',
      color: 'primary',
    },
    {
      title: 'Quỹ Trà Đá',
      amount: '200k',
      icon: 'bakery_dining',
      subtitle: 'Vừa đóng: An',
      color: 'secondary-container',
    },
  ],
}) => {
  const getColorClasses = (color: 'primary' | 'secondary-container') => {
    if (color === 'primary') {
      return 'bg-primary text-on-primary';
    }
    return 'bg-secondary-container text-on-secondary-container';
  };

  return (
    <section className="grid grid-cols-2 gap-4">
      {funds.map((fund, index) => (
        <div
          key={index}
          className={`${getColorClasses(fund.color)} p-5 rounded-lg shadow-lg relative overflow-hidden bouncy-tap`}
        >
          <div className="absolute right-[-10%] top-[-10%] opacity-20 transform rotate-12">
            <span className="material-symbols-outlined text-6xl">{fund.icon}</span>
          </div>
          <p className="font-label-md opacity-80">{fund.title}</p>
          <h4 className="font-headline-md text-headline-md mt-1">{fund.amount}</h4>
          <div className="mt-4 flex items-center text-[11px] gap-1 bg-white bg-opacity-20 w-fit px-2 py-0.5 rounded-full">
            <span className="material-symbols-outlined text-[14px]">trending_up</span>
            <span>{fund.subtitle}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FundSummary;
