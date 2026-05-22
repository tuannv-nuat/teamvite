import React, { useState } from 'react';

const RemindButton: React.FC = () => {
  const [status, setStatus] = useState<'Remind' | 'Sent! ✅'>('Remind');

  const handleClick = () => {
    setStatus('Sent! ✅');
    setTimeout(() => {
      setStatus('Remind');
    }, 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`text-xs font-bold text-white px-3 py-1 rounded-full active-tap transition-colors ${
        status === 'Remind' ? 'bg-primary' : 'bg-tertiary'
      }`}
    >
      {status}
    </button>
  );
};

export default RemindButton;
