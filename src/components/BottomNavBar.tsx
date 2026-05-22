import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  icon: string;
  label: string;
  path: string;
}

interface BottomNavBarProps {
  items?: NavItem[];
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({
  items = [
    { icon: 'home', label: 'Home', path: '/' },
    { icon: 'restaurant', label: 'Lunch', path: '/lunch-vote' },
    { icon: 'campaign', label: 'Ping', path: '/ping' },
    { icon: 'payments', label: 'Fund', path: '/fund' },
    { icon: 'bakery_dining', label: 'Breakfast', path: '/breakfast' },
  ],
}) => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface backdrop-blur-2xl shadow-[0_-4px_20px_rgba(144,77,0,0.1)] rounded-t-lg mx-[20px]">
      {items.map((item: NavItem, index: number) => {
        const active = isActive(item.path);
        return (
          <Link
            key={index}
            to={item.path}
            className={`flex flex-col items-center justify-center px-4 py-1 active:scale-90 transition-transform duration-150 ${active
              ? 'bg-secondary-container text-on-secondary-container rounded-xl'
              : 'text-on-surface-variant hover:text-primary'
              }`}
          >
            <span
              className="material-symbols-outlined text-xl"
              style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            <span className="font-label-md text-label-md">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavBar;
