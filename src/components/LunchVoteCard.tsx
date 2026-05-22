import React from 'react';

interface LunchVoteCardProps {
  dishName?: string;
  timeLeft?: string;
  progress?: number;
  votersCount?: number;
}

const LunchVoteCard: React.FC<LunchVoteCardProps> = ({
  dishName = 'Bún Đậu Mắm Tôm',
  timeLeft = '15:00',
  progress = 75,
  votersCount = 4,
}) => {
  return (
    <section className="glass-card rounded-lg p-6 shadow-lg relative overflow-hidden group">
      {/* Ambient glow effect */}
      <div className="absolute -right-6 -top-6 w-32 h-32 bg-secondary-container bg-opacity-30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>

      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Đang bình chọn
          </span>
          <h3 className="font-headline-md text-headline-md mt-2">{dishName}</h3>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-primary font-bold text-label-md">{timeLeft}</span>
          <span className="text-[10px] text-on-surface-variant uppercase">còn lại</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative w-full h-4 bg-surface-container rounded-full mb-4 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full progress-gradient rounded-full shadow-glow-orange transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex items-center justify-between">
        {/* Voter avatars */}
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              alt="voter"
              className="w-8 h-8 rounded-full border-2 border-white"
              src={`https://lh3.googleusercontent.com/aida-public/AB6AXuCG4G4I69s2t-tWJQpff0yEVjaSXTg1ujOk4VBGbclFE62CmvW9iZGGDpQymY_HYTbfpE0c3XHDfPaPuAKcdtMGSqIk4bjhON5KTYdM3x2DIoM-og7P2X_hnC7IYXlJYguHwViLjimKrSP-YSCADEZeIdSpkf0Bab2_LwTi5zY7iTeOSDly2ck5qQB8_58iyXC5mDVp-ykwNQMX2Omxedk4QWWhzoIrZLcL2rOSoUeDuIl42gYZOYnK1ZEQlR-y7ywBkmM6bd7MTiQ`}
            />
          ))}
          <div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-white flex items-center justify-center text-[10px] font-bold">
            +{votersCount}
          </div>
        </div>

        <button className="bg-primary text-on-primary font-label-md px-6 py-2 rounded-full shadow-md hover:scale-105 transition-all active:scale-95 bouncy-tap">
          Vote ngay
        </button>
      </div>
    </section>
  );
};

export default LunchVoteCard;
