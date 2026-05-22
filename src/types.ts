// TeamVibe Design System Types

export interface Member {
  id: string;
  name: string;
  avatarUrl: string;
  isOnline: boolean;
}

export interface Activity {
  id: string;
  user: {
    name: string;
    avatarUrl: string;
  };
  action: string;
  timeAgo: string;
}

export interface FundCard {
  title: string;
  amount: string;
  icon: string;
  subtitle?: string;
  color: 'primary' | 'secondary-container';
}
