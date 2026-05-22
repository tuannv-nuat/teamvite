import React from 'react';

const PingTopAppBar: React.FC = () => {
  return (
    <header className="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl flex justify-between items-center px-margin-mobile py-sm w-full sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-fixed overflow-hidden ring-2 ring-white">
          <img 
            alt="User" 
            className="w-full h-full object-cover" 
            data-alt="User Avatar" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdzMzIUg153-O_dXqgSgD0_3aU2vkWNPFbZvgvcSoMrT0H9paAOGPMfwLFaQApImGpEbfsSvVyU5vy_1k8t3kVCb-nsc6IlfgQs0bnJ99HK6HfXRimnSUV25biGdT_CnZbD33pBgFSe8MrhKdXKArVI4n_-YNIRiRu1M8K7Kn6u2UeK6xV4n-cKx3ARvz5ytiPe3Fxs4w6DimEcAM64b8AoNzgU5FHi8jKIHXBLmtVIF3-2IK27cKiGxTcOEPuuzKBmYRXgNm2D2k" 
          />
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">TeamVibe</h1>
      </div>
      <div className="flex items-center gap-sm">
        <button className="material-symbols-outlined text-primary hover:scale-105 transition-transform duration-200" data-icon="notifications">notifications</button>
      </div>
    </header>
  );
};

export default PingTopAppBar;
