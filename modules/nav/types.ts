export default {
  NAV_LOADING: "NAV_LOADING",
  NAV_SUCCESS: "NAV_SUCCESS",
  NAV_ERROR: "NAV_ERROR",
};

export type NavigationInfo = {
  currentScreen: number;
  loading: boolean;
};
