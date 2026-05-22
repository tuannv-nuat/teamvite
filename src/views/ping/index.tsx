import React, { useState, useEffect } from 'react';
import WelcomeSection from './components/WelcomeSection';
import PingGrid from './components/PingGrid';
import ActivityLog from './components/ActivityLog';
import type { Activity } from './types';

const INITIAL_ACTIVITIES: Activity[] = [
    {
        id: '1',
        user: 'Tuấn',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiA3-eEu2fVkIUU960mpTrhsgy1Of2ZJtA4QYNbNiNj6z4XYe5dFR8O_E7Cy96EMAE9HSwNCodL6udAjVaV1g_yIFeEVkseh6UsDwwYB_-maaBP78b9XuJDVmLSMNoIw2mSJ7YTi28Ii9YgPBafYmAl_9URio8r1bvpEwi0Bz4hx2R8NXgHHlMXqqRshhjnSrRlfROGZcwiFZWg1CedrImckWjEywlX0lleCPIuOfj3d4MF_0lUWhQ-QNyroW3V4iUSUjjt-y_AQU',
        action: 'đang cần mở cửa 🚪',
        time: '1 phút trước',
        bgClass: 'bg-surface-container-low',
        borderClass: 'border-primary',
        avatarBgClass: 'bg-secondary-fixed'
    },
    {
        id: '2',
        user: 'Linh',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvyehDbOi5vsK0XdU5dkzTMsy3M1LbTuTe0kz4-ZGeu1FKEp0UZI9rwk95edk0fooN5gES7R00CmMj6F-h5eBy8tsUaL5pyPG_qCbmXkRu9WVIqV75bOB0QqPMy5FotiOFSnRAtgrMump9RDxSmotBpL0T8ZrhYHN_Jl7p0yweqRR3PGFGmZl3yN9cgB8QV7nyysNsJUq80cnEXDWpOCQdCeo3JlnjnA5Lee6tqiDYiwis38KQc_hnf7oYox4UNTJjP0WwCe5B83k',
        action: 'Cafe đê ☕',
        time: 'Vừa xong',
        bgClass: 'bg-surface-container-low',
        borderClass: 'border-tertiary',
        avatarBgClass: 'bg-tertiary-fixed'
    }
];

const Ping: React.FC = () => {
    const [activities, setActivities] = useState<Activity[]>(INITIAL_ACTIVITIES);

    useEffect(() => {
        // Remove isNew flag after animation
        if (activities.some(a => a.isNew)) {
            const timer = setTimeout(() => {
                setActivities(prev => prev.map(a => ({ ...a, isNew: false })));
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [activities]);

    const handlePing = (label: string) => {
        const users = ["Hùng", "Mai", "Kiên", "Trang"];
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const newActivity: Activity = {
            id: Date.now().toString(),
            user: randomUser,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${randomUser}`,
            action: label,
            time: 'Vừa xong',
            bgClass: 'bg-surface-container-low', // Set default bgClass when isNew becomes false
            borderClass: 'border-primary-container',
            avatarBgClass: 'bg-primary-fixed',
            isNew: true
        };

        setActivities(prev => [newActivity, ...prev]);

        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    };

    const handleClear = () => {
        setActivities([]);
    };

    return (
        <div className="bg-background text-on-surface font-body-md text-body-md min-h-screen pb-24 overflow-x-hidden">
            <style>{`
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .ping-glow:active {
            box-shadow: 0 0 25px currentColor;
        }
        .glass-sidebar {
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        }
        .pulse-dot {
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 110, 28, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(0, 110, 28, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 110, 28, 0); }
        }
        .animate-bounce-short {
            animation: bounce 1s ease-in-out;
        }
        @keyframes bounce {
            0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
            50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
        }
      `}</style>
            <main className="pt-md space-y-6 py-6">
                <WelcomeSection />
                <PingGrid onPing={handlePing} />
                <ActivityLog activities={activities} onClear={handleClear} />
            </main>
        </div>
    );
};

export default Ping;
