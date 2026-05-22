import React from 'react';
import RemindButton from './RemindButton';

const UnpaidList: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="font-headline-md text-headline-md text-on-surface">Ai chưa đóng? 🧐</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 -mx-margin-mobile px-margin-mobile no-scrollbar">
        <div className="flex-shrink-0 w-32 bg-white p-4 rounded-lg shadow-sm text-center space-y-3 bouncy-hover group">
          <img 
            alt="Avatar" 
            className="w-12 h-12 rounded-full mx-auto grayscale group-hover:grayscale-0 transition-all" 
            data-alt="Avatar" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi0xpCf7IugY046FLjk2B9YvKimAMrbEVaN8FZx1Kx6PdGWSGs7G9RK0QN6GIfrFd-w0yIOmNmBDf8LLcMPHG0hBeVdNQTjZP5K_NNeTTyymL1269autKc7Du3eMy56Y7uEsvLJgI2ppbYbotnbZ8LU1-5s4iH2B_KvY_jMEaYdyD23fzFp68J1uRiKJtSpaGe5_CCWOcyMVGuDooH_D2xO8D9A0wYhiM0BRPhCKV7x4HkliNiaUyDZxCdoOyq_iBikA7VpckNYAI" 
          />
          <p className="font-label-md text-label-md truncate">Lê Hải</p>
          <RemindButton />
        </div>
        <div className="flex-shrink-0 w-32 bg-white p-4 rounded-lg shadow-sm text-center space-y-3 bouncy-hover group">
          <img 
            alt="Avatar" 
            className="w-12 h-12 rounded-full mx-auto grayscale group-hover:grayscale-0 transition-all" 
            data-alt="Avatar" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2z3R_nlfx2BKZ-rKT7VFetvxE9m2EuGOAIWmjRbSxzcwoBem0lGh1j8cbK79l1kNf4wwqEyruBzTXL-KOpW32ReDpOYMikzJPgtray1aUezAqEwBoeaczB3anzfLNUmtRXknBxZE0h1BNmmGiTgTDX2jqqTobx_FU1EiHVwhVNtPlGrBgTvWkORk0JZNxb6KEIB8O6HJh2TjtnoNCRbHlLgrKfy7qes9OHMv7SN_PlFACV7lDtS5GfL9q3m0Mq-RAcMGy1r_XJOs" 
          />
          <p className="font-label-md text-label-md truncate">Thùy Chi</p>
          <RemindButton />
        </div>
        <div className="flex-shrink-0 w-32 bg-white p-4 rounded-lg shadow-sm text-center space-y-3 bouncy-hover group">
          <img 
            alt="Avatar" 
            className="w-12 h-12 rounded-full mx-auto grayscale group-hover:grayscale-0 transition-all" 
            data-alt="Avatar" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0maICRwzkUWIgWHeb5N9xYKe59PV4_f0Z3_DEFYrKLRfwk_XL3857SDER-2MwIVO8o56yUqlV5_5Z-Iq0Ia-SKJZBqFK4sRrED8zTvKegP5NtacE9b_t-teaWCx6mOK6ZWRLYwbzvDSf-ckQNiSFPBbGXGytQPzqC4ZoQDNVzYJyCat-vN3mNJoBuVv7ZPcrTG8PEXN8yyzBz7RHYakcWeX_CtY69yTUxSXHa43b2x3tUR_EHbDET997K39mZQd5tGrTUZ3swAMs" 
          />
          <p className="font-label-md text-label-md truncate">Văn Bình</p>
          <RemindButton />
        </div>
      </div>
    </section>
  );
};

export default UnpaidList;
