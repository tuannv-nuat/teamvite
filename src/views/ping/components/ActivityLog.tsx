import React from 'react';
import type { Activity } from '../types';

interface ActivityLogProps {
  activities: Activity[];
  onClear: () => void;
}

const ActivityLog: React.FC<ActivityLogProps> = ({ activities, onClear }) => {
  return (
    <section className="space-y-md">
      <div className="flex justify-between items-end">
        <h3 className="font-headline-md text-headline-md text-on-surface">Hoạt động</h3>
        <button onClick={onClear} className="text-label-md font-label-md text-primary hover:underline">Xóa hết</button>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={`flex gap-4 p-4 rounded-3xl border-l-4 transition-all duration-500 ${activity.isNew ? 'bg-primary-fixed/20 border-primary-container animate-bounce-short' : activity.bgClass + ' ' + activity.borderClass}`}
          >
            <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center overflow-hidden ${activity.avatarBgClass}`}>
              <img alt={activity.user} src={activity.avatar} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="font-body-md text-body-md">
                <span className="font-bold">{activity.user}{activity.action.startsWith(' đang') ? '' : ':'}</span> {activity.action}
              </p>
              <p className={`text-xs ${activity.time === 'Vừa xong' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivityLog;
