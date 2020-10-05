import types, { userPost } from "./types";

export const initialState: userPost = {
  userIndex: 0,
  post: "",
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case types.GET_POSTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.GET_POSTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        userIndex: action.userIndex,
        post: action.payload,
      };
    }

    default:
      return state;
  }
}
