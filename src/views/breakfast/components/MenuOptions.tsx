import React from 'react';

const MENU_ITEMS = [
  {
    id: 1,
    title: 'Bánh mì',
    description: 'Thịt nguội, Pate, Chả',
    icon: 'breakfast_dining',
    iconColor: 'text-secondary',
    iconBg: 'bg-secondary-fixed',
    isHot: true,
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbhV4EVcGP4KohGOK0mg2PeVkAEI9xqZsWhxpUSX6KaDGarr80GMVJ-_IMq-sw86Es7MM7IweV5f3g1PTwIrkXZntlaNIOyv-EsGNESU5oyHmL9hK_DwVhwlkyg6SzvM1BN2jKpQeeuBlvBks8IS871wjotHfjCnRSsOwsOqe55XgT_AQhtJb6ROIUaJ-Pa7BUMGGSBrKLbz85xhJksk66zONWRy3mZacsjkqeUJ7F_Twpe1QGfxhvZ1JmevSrlOI3IXN3U63QoOA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCenJpIw38SUUrzTPRKCFa-8NR5PauDgsTchFil3QsKMVvkW6xrju5cWbsSU0_hzH9qVw6n_6Kt89LljYcvMALXJtXBLk0FkaxCl0ailioxuNSw841nbc2J2EIZiXLtwCoQSnxaFJgxiKn9ah1ReCjH8LO_grlKWTT6PqjwYYXsmYw8RZTqQm4VUZkG4Wtnrar4RCQftDuza00AyBwah5mztw4ryc7RdporK9o7WQJAZUt8Woojxszm5w1gX69i5U6KXSDOp567EFM'
    ],
    moreCount: 3
  },
  {
    id: 2,
    title: 'Xôi xéo',
    description: 'Hành phi, đậu xanh',
    icon: 'rice_bowl',
    iconColor: 'text-primary',
    iconBg: 'bg-primary-fixed',
    isHot: false,
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAsag9Wp5PuIbkNLH_nR-IVM2ExFCeIjgv90LP2YaweJx8oaGCYjEwt1kFm3U1uzUByfJ-FqCcZoIT1VOlyiVIPpjAs8dj1v1uk11I4wKfNc9D8wzqNLsx7k7P84tW5SEU1PijcWDkLHeb3KCcgPpeODxXvUjNRXeNWfAtnVoNCn5xejeL1AYhWkl6JZiVZwbQ4z0Z3BCm_ys6sN0XCf4p4kOEZ35DnbSBYitLmAosjEg0Y-XhZm9jE6znMeqSnZFm0IsHQnROCQ_w'
    ],
    moreCount: 1
  },
  {
    id: 3,
    title: 'Bún cá',
    description: 'Cá chiên giòn, dọc mùng',
    icon: 'ramen_dining',
    iconColor: 'text-tertiary',
    iconBg: 'bg-tertiary-fixed',
    isHot: false,
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKbg0ZgbX2qqOpbwQas2dOWzaUlVe2tJIM13v6VXPxsk_3mPO8dWNzfVxL_Z_YaWmirPtNjbjjCHmt15a4y-3WWtYRjPSniOgjZd8cBkrRbejvCm0LDZ4T1OLu06TKsGYV1HXCpMGm0j9YUqBZ7MYYpMlYrPTSRTptM-WPrG2U1RN3T1YTYbYlLmF4I-j6y2FtzlCbF6awBo14r4shfu8fgLccNm9_vSgRf3wJz3SYg55chzXwFIIvFa44w1OXITD2nVOMmub78FY'
    ],
    moreCount: 0
  }
];

const MenuOptions: React.FC = () => {
  return (
    <section className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="font-headline-md text-headline-md text-on-surface">Menu đề xuất</h3>
        <span className="text-primary font-label-md">3 món mới</span>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {MENU_ITEMS.map((item) => (
          <div key={item.id} className="bg-surface-container-lowest p-2 rounded-lg flex items-center gap-2 ambient-shadow hover:scale-[1.02] transition-transform duration-300">
            <div className={`w-16 h-16 ${item.iconBg} rounded-full flex items-center justify-center`}>
              <span className={`material-symbols-outlined ${item.iconColor} text-3xl`} data-icon={item.icon}>{item.icon}</span>
            </div>
            <div className="flex-1">
              <p className="font-headline-md text-on-surface">{item.title}</p>
              <p className="text-on-surface-variant text-label-md">{item.description}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              {item.isHot && (
                <span className="bg-tertiary-container text-on-tertiary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Hot</span>
              )}
              <div className="flex -space-x-2">
                {item.avatars.map((avatar, idx) => (
                  <img key={idx} className="w-6 h-6 rounded-full border-2 border-white" src={avatar} alt={`Avatar ${idx}`} />
                ))}
                {item.moreCount > 0 && (
                  <div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-[10px] font-bold border-2 border-white">+{item.moreCount}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuOptions;
