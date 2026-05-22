import React from 'react';

const FundTopAppBar: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-margin-mobile py-sm w-full sticky top-0 z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary active-tap transition-all">
          <img 
            alt="User Profile" 
            data-alt="A professional and friendly male portrait in a modern, brightly lit office environment." 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmkq03CIvqK7cNtAvVjb9yCILw4eGA5xnqd538AVzGoWNIow54mWq7ytW37NSzY7dReixWEN-OF60Ovkw27aXJeuWPnuZaX41jHR3KxWk_lszSIRU5VcBjQgXBTpdlkWJuQZG2Y-Ljw4plChuKlXTODCVy4LlJPPVbST8mbJt_IWD_fV_r-Bc4gExCmRaspfBOsu9KKEoLP8kXKoGVA5k4UfyxPXisHsEKTBs4urxojb3FN0cqgSHiUJQRRUyS-GKQKKFVrVMjgNE" 
          />
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">TeamVibe</h1>
      </div>
      <button className="material-symbols-outlined text-primary text-2xl active-tap bouncy-hover">notifications</button>
    </header>
  );
};

export default FundTopAppBar;
