import { combineReducers } from "redux";
import users from "./users";
import nav from "./modules/nav";
import posts from "./modules/posts";

export default combineReducers({
  users,
  nav,
  posts,
});
