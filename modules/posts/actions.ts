import { Dispatch } from "redux";
import types from "./types";

export const getUserPost = (userIndex: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: types.GET_POSTS_LOADING });
      const payload = await fetch(`https://jsonplaceholder.typicode.com/posts/
    ${userIndex}})`);
      dispatch({ type: types.GET_POSTS_SUCCESS, payload, userIndex });
    } catch (error) {
      dispatch({ type: types.GET_POSTS_ERROR, error });
    }
  };
};
