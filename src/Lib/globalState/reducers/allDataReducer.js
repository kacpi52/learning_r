// reducer is a function which takes actual state and  action then returns new state
import initialState from "../initialState/initialState";
import ALL_DATA_ACTION_TYPES from "../actionTypes/allDataActionTypes";

const allDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DATA_ACTION_TYPES.DELETE_ALL_DATA_GLOBAL_STATE:
      return { ...state, xmlData: [], movieData: [] };
    default:
      return state;
  }
};
export default allDataReducer;
