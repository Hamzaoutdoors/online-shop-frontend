import { configureStore } from "@reduxjs/toolkit";

import specialOfferProductsReducer from "./specialOfferProducts-slice";
import newestProductReducer from "./newestProduct-slice";
import SortedProductsListReducer from "./sortedProductList-slice";
import cartUiReducer from "./cartUI-slice";
import sideNavBarReducer from "./sideNavBar-slice";
import userInfoReducer from "./user-slice";
import megaMenuReducer from "./megaMenu-slice";
import activeMenuItemReducer from "./activeMenuItem-slice";
import settingBoxReducer from "./settingBox-slice";
import favoriteReducer from "./favorite-slice";
import brandsReducer from "./api/brandsSlice";
import productsReducer from "./api/productsSlice";
import slidersReducer from "./api/slidersSlice";

const store = configureStore({
  reducer: {
    specialOfferProductsList: specialOfferProductsReducer,
    newestProductsList: newestProductReducer,
    sortedProductsList: SortedProductsListReducer,
    cartUi: cartUiReducer,
    userInfo: userInfoReducer,
    sideNavBar: sideNavBarReducer,
    megaMenu: megaMenuReducer,
    activeMenuItem: activeMenuItemReducer,
    settingBox: settingBoxReducer,
    favorite: favoriteReducer,
    brands: brandsReducer,
    products: productsReducer,
    sliders: slidersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
