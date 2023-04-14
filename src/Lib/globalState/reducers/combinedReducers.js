import { combineReducers } from "redux";
import allDataReducer from "./allDataReducer";
import xmlDataReducer from "./xmlDataReducers";
import movieDataReducer from "./movieDataReducer";

const combinedReducers = combineReducers({
  allDataReducer,
  xmlDataReducer,
  movieDataReducer,
});
export default combinedReducers;
