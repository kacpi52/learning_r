// reducer is a function which takes actual state and  action then returns new state
import initialState from "../initialState/initialState";
import XML_DATA_ACTION_TYPES from "../actionTypes/xmlDataActionTypes";

const xmlDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case XML_DATA_ACTION_TYPES.ADD_XML_DATA_GLOBAL_STATE:
      const { dataArray } = action.payload;
      return { ...state, xmlData: [...dataArray] };
    case XML_DATA_ACTION_TYPES.DELETE_XML_DATA_GLOBAL_STATE:
      return { ...state, xmlData: [] };
    default:
      return state;
  }
};
export default xmlDataReducer;
