import { ICategory } from "./subCategories";

export interface ISideNavBar {
  isSidebarOpen: boolean;
  isNavbarOpen: boolean;
  isNextSideBarOpen: boolean;
  subCatList: ICategory[];
  nextSubCatList: ICategory[];
  category: string;
  nextSideBarLevel: number;
}

export interface ISideNavBarRootState {
  sideNavBar: ISideNavBar;
}
