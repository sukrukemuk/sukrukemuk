export interface NavItem {
  name: string;
  path: string;
}

export const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]; 