import { legacy_createStore as createStore } from "redux";
import dataReducer from "./reducers/dataReducers";

const store = createStore(dataReducer);

export * from "./actions/dataActionCreators";
export default store;
