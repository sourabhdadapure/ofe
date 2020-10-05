import types, { NavigationInfo } from "./types";

export const initialState: NavigationInfo = {
  currentScreen: 0,
  loading: false,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case types.NAV_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.NAV_SUCCESS: {
      console.warn("current reduce", state.currentScreen);
      return {
        ...state,
        loading: false,
        currentScreen: state.currentScreen + action.payload,
      };
    }

    default:
      return state;
  }
}
