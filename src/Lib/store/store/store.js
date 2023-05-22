import { legacy_createStore as createStore } from "redux";
import { combinedReducers } from "../reducers";

const store = createStore(combinedReducers);

export default store;
