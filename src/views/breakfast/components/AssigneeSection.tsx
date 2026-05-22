import React from 'react';

const AssigneeSection: React.FC = () => {
  return (
    <section className="bg-surface-container rounded-lg p-4 space-y-4 border border-outline-variant/20">
      <div className="flex items-center justify-between">
        <h3 className="font-headline-md text-headline-md text-on-surface">Ai đi mua?</h3>
        <span className="material-symbols-outlined text-primary" data-icon="person_search">person_search</span>
      </div>
      <div className="flex items-center gap-md bg-surface-container-lowest p-4 rounded-full ambient-shadow">
        <div className="relative">
          <img
            className="w-12 h-12 rounded-full object-cover border-2 border-primary"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0TzlE-W_6-rZpeB9g1sYe3tOJBDZ6CVBi0Q6c_flvXR-50dh9WSiS-XG1mPgmd7QeO1tpg8G-hvAXlSfCAggcwGots3UpajDHdKAubDL-TsydR7RSaMUVdzJrWreUSbL27lX646Z4OKjkYCaS6yD-UsBspNZLNqw0C594lz4rQLss1S7eK_ZZGDRL7sXDVtZMsw4i3d_m2t4Cb_GzivEdmmoA6c85pTXjQrykF0aZLJvHGdY0bWG6ERv3gVCL7G8_yeSRioJVHl0"
            alt="Assignee"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-tertiary-container rounded-full border-2 border-white pulse-status"></div>
        </div>
        <div className="flex-1 ml-2">
          <p className="font-bold text-on-surface text-body-md">Hùng đã nhận kèo! 🏃‍♂️</p>
          <p className="text-on-surface-variant text-label-md">Sẽ giao lúc 8:30 AM</p>
        </div>
        <button className="bg-primary text-on-primary px-4 py-2 rounded-full font-label-md bouncy-tap shadow-md">Cảm ơn!</button>
      </div>
    </section>
  );
};

export default AssigneeSection;
