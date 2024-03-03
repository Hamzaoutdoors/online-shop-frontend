import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../lib/types/subCategories";
import { ISideNavBar } from "../lib/types/sidebar";

const initialState: ISideNavBar = {
  isSidebarOpen: false,
  isNavbarOpen: false,
  isNextSideBarOpen: false,
  nextSideBarLevel: 0,
  subCatList: [],
  nextSubCatList: [],
  category: "",
};

const sideNavBarSlice = createSlice({
  name: "sideNavBar",
  initialState,
  reducers: {
    openSidebar(state) {
      state.isSidebarOpen = true;
    },

    openNextSidebar(state) {
      state.isNextSideBarOpen = true;
    },

    openNavbar(state) {
      state.isNavbarOpen = true;
    },

    closeSidebar(state) {
      state.isSidebarOpen = false;
    },

    closeNextSidebar(state) {
      state.isNextSideBarOpen = false;
    },

    closeNavbar(state) {
      state.isNavbarOpen = false;
      state.isSidebarOpen = false;
      state.isNextSideBarOpen = false;
      state.subCatList = [];
      state.nextSubCatList = [];
    },

    setSidebarEntries(state, action: PayloadAction<ICategory[]>) {
      state.subCatList = action.payload;
    },

    setNextSidebarEntries(state, action: PayloadAction<ICategory[]>) {
      state.nextSubCatList = action.payload;
    },
  },
});

export const sideNavBarActions = sideNavBarSlice.actions;

export default sideNavBarSlice.reducer;
