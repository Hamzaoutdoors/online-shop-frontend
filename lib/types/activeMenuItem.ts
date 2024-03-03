export interface IActiveMenuItem {
  activeMenuItemIndex: number;
  activeMenuItemText: string;
  nextActiveMenuItemIndex: number;
  nextActiveMenuItemText: string;
}

export interface IActiveMenuItemRootState {
  activeMenuItem: IActiveMenuItem;
}
