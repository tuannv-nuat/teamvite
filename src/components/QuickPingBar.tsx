import React from 'react';

interface PingButton {
  icon: string;
  label: string;
}

interface QuickPingBarProps {
  buttons?: PingButton[];
}

const QuickPingBar: React.FC<QuickPingBarProps> = ({
  buttons = [
    { icon: '🚪', label: 'Rời chỗ' },
    { icon: '🚽', label: 'W.C' },
    { icon: '☕', label: 'Cafe' },
    { icon: '📦', label: 'Shipper' },
  ],
}) => {
  return (
    <section>
      <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className="flex items-center gap-2 bg-surface shadow-sm rounded-full px-5 py-3 bouncy-tap transition-transform duration-150 border border-outline-variant/30 flex-shrink-0 hover:scale-105"
          >
            <span className="text-xl">{btn.icon}</span>
            <span className="font-label-md text-on-surface">{btn.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickPingBar;
