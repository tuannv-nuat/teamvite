import React from 'react';
import type { Activity } from '../types';

interface ActivityFeedProps {
  activities?: Activity[];
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({
  activities = [
    {
      id: '1',
      user: {
        name: 'Minh',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0HA3qHB4n8EkOq7nBxJTXrPD_Zb21eyg_z5U8RvwAORKePz3mK22oKH2sWLjnGdCoJ1XdvcE8pcjjdA6GxrtLZIQeS7Rge3oULsaoMA6QqQCL20ipCTtlSLoNjcY49w83fxYedssNELVehhEyHx3R53CTvHK2l2IwMp4c3B6SNv_jFHWTdomd0ATU5PvE7F2idq9SbaPTfZ_EXnWp0H9yFQ1sSQcpfZaWvgaMeV_bAK4jO-NIm1dgUJ39J3UK4oa5oCLogsaL4ns',
      },
      action: 'vừa ping Cafe ☕',
      timeAgo: '2 phút trước',
    },
    {
      id: '2',
      user: {
        name: 'An',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLFDl9BOTbJvqsi4krOyZJ0oevbbm05CC0F978OIFl0dXF6Jwppqo7_C6YEXaavqO4WF5sPozwgHUfDGYNswlTZBGjc98J4wBHsxCCwrYxzMxbTSAjG5tV0IlBJ5aSckn0iuzZt3kSlPsjTrIRa5VczpXZYMuMe8qkDkfeQdUNfs5KWzzclYfmm8qk0-PoqfFKZvRYja_1wauwZKJrciNNDw60VWw6bH3WGN7Do5q9DTUFhZQHZDyoHjoXy8vl5zaabW0clHuxzSw',
      },
      action: 'đã đóng quỹ 50k ✅',
      timeAgo: '15 phút trước',
    },
  ],
}) => {
  return (
    <section className="space-y-3 pb-4">
      <div className="flex items-center justify-between">
        <h3 className="font-headline-md text-headline-md text-on-surface">
          Hoạt động
        </h3>
        <button className="text-primary font-label-md">Xem tất cả</button>
      </div>
      <div className="space-y-2">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-4 bg-white p-4 rounded-lg border border-outline-variant border-opacity-20 shadow-sm"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <img
                className="w-full h-full object-cover"
                src={activity.user.avatarUrl}
                alt={activity.user.name}
              />
            </div>
            <div className="flex-grow">
              <p className="text-body-md text-on-surface">
                <strong>{activity.user.name}</strong> {activity.action}
              </p>
              <p className="text-[12px] text-on-surface-variant">{activity.timeAgo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivityFeed;
