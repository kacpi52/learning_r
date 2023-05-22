import { combineReducers } from "redux";
import { movieDataReducer } from "./index";
import { xmlDataReducer } from "./index";

const combinedReducers = combineReducers({
  xmlDataReducer,
  movieDataReducer,
});
export default combinedReducers;
