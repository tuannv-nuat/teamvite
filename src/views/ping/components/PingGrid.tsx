import React from 'react';

interface PingGridProps {
  onPing: (label: string) => void;
}

const COMMON_BTN_CLASS = "ping-glow flex flex-col items-center justify-center aspect-square p-4 rounded-3xl shadow-sm transition-all duration-150 active:scale-90 hover:scale-[1.03]";

const PING_ITEMS = [
  {
    label: 'Mở cửa',
    pingLabel: '🚪 Mở cửa',
    emoji: '🚪',
    colorClass: 'bg-surface-container-lowest text-primary',
  },
  {
    label: 'Đi vệ sinh',
    pingLabel: '🚽 Đi vệ sinh',
    emoji: '🚽',
    colorClass: 'bg-surface-container-lowest text-secondary',
  },
  {
    label: 'Cafe?',
    pingLabel: '☕ Cafe?',
    emoji: '☕',
    colorClass: 'bg-secondary-container text-on-secondary-container',
  },
  {
    label: 'Shipper',
    pingLabel: '📦 Shipper tới',
    emoji: '📦',
    colorClass: 'bg-surface-container-lowest text-primary-container',
  },
  {
    label: 'Họp gấp!',
    pingLabel: '🔥 Họp gấp!',
    emoji: '🔥',
    colorClass: 'bg-error-container text-on-error-container',
  },
  {
    label: 'Trà sữa?',
    pingLabel: '🥤 Trà sữa?',
    emoji: '🥤',
    colorClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
  },
  {
    label: 'Làm ván ARAM không?',
    pingLabel: '🎮 ARAM 1 trận?',
    emoji: '🎮',
    fullClass: 'col-span-2 flex items-center justify-center gap-4 p-6 rounded-3xl bg-inverse-surface shadow-lg text-surface-bright transition-all duration-150 active:scale-95 hover:scale-[1.01]',
    isWide: true
  }
];

const PingGrid: React.FC<PingGridProps> = ({ onPing }) => {
  return (
    <section className="grid grid-cols-2 gap-4">
      {PING_ITEMS.map((item, index) => (
        <button
          key={index}
          className={item.isWide ? item.fullClass : `${COMMON_BTN_CLASS} ${item.colorClass}`}
          onClick={() => onPing(item.pingLabel)}
        >
          {item.isWide ? (
            <>
              <span className="text-4xl">{item.emoji}</span>
              <span className="font-headline-md text-headline-md">{item.label}</span>
            </>
          ) : (
            <>
              <span className="text-5xl mb-2">{item.emoji}</span>
              <span className="font-headline-md text-headline-md">{item.label}</span>
            </>
          )}
        </button>
      ))}
    </section>
  );
};

export default PingGrid;
