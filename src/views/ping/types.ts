export interface Activity {
  id: string;
  user: string;
  avatar: string;
  action: string;
  time: string;
  bgClass: string;
  borderClass: string;
  avatarBgClass: string;
  isNew?: boolean;
}
