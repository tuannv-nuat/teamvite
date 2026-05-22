import React from 'react';
import BudgetHub from './components/BudgetHub';
import Leaderboard from './components/Leaderboard';
import UnpaidList from './components/UnpaidList';
import QRSection from './components/QRSection';
import TransactionHistory from './components/TransactionHistory';

const Fund: React.FC = () => {
    return (
        <div className="bg-background text-on-surface font-body-md min-h-screen">
            <style>{`
        .glass-card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        .bouncy-hover:hover {
            transform: scale(1.03);
            transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .active-tap:active {
            transform: scale(0.95);
        }

        .sparkline {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: dash 1.5s linear forwards;
        }

        @keyframes dash {
            to {
                stroke-dashoffset: 0;
            }
        }
      `}</style>

            <main className="pb-32 pt-6 max-w-md mx-auto space-y-6">
                <BudgetHub />
                <Leaderboard />
                <UnpaidList />
                <QRSection />
                <TransactionHistory />
            </main>
        </div>
    );
};

export default Fund;
