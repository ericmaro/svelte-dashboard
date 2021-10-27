export interface MenuItem {
  icon?: string;
  route?: string;
  title: string;
  name?: string;
  permissions?: string[];
  subMenu?: MenuItem[];
}

export interface MenuSection {
  title?: string;
  permissions?: string[];
  items: MenuItem[];
}
