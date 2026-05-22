import React from 'react';
import HeroSection from './components/HeroSection';
import MenuOptions from './components/MenuOptions';
import AssigneeSection from './components/AssigneeSection';
import BillSplitSection from './components/BillSplitSection';

const Breakfast: React.FC = () => {
    return (
        <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed min-h-screen">
            <style>{`
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .bouncy-tap:active {
            transform: scale(0.95);
        }
        .ambient-shadow {
            box-shadow: 0 10px 30px -5px rgba(144, 77, 0, 0.15), 0 4px 6px -2px rgba(144, 77, 0, 0.05);
        }
        .pulse-status {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: .5; }
        }
      `}</style>

            <main className="py-4 space-y-6">
                <HeroSection />
                <MenuOptions />
                <AssigneeSection />
                <BillSplitSection />

                <div className="flex justify-center gap-xl opacity-30 pt-md">
                    <span className="material-symbols-outlined text-5xl" data-icon="croissant">toast</span>
                    <span className="material-symbols-outlined text-5xl" data-icon="coffee">coffee</span>
                    <span className="material-symbols-outlined text-5xl" data-icon="egg_alt">egg_alt</span>
                </div>
            </main>
        </div>
    );
};

export default Breakfast;
