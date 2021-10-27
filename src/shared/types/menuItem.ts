export interface MenuItem {
  icon?: string;
  route?: string;
  title: string;
  name?: string;
  subMenu?: MenuItem[];
}
