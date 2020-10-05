import { Dispatch } from "redux";
import types from "./types";

export const navigate = (navigationType: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: types.NAV_LOADING });
      dispatch({ type: types.NAV_SUCCESS, payload: navigationType });
    } catch (error) {
      dispatch({ type: types.NAV_ERROR, error });
    }
  };
};
