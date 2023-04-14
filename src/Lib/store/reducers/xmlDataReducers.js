// reducer is a function which takes actual state and  action then returns new state

import XML_DATA_ACTION_TYPES from "../actionTypes/xmlDataActionTypes";

const initialState = [];

const xmlDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case XML_DATA_ACTION_TYPES.ADD_XML_DATA_GLOBAL_STATE:
      const { dataArray } = action.payload;
      return [...dataArray];
    case XML_DATA_ACTION_TYPES.DELETE_XML_DATA_GLOBAL_STATE:
      return [];
    default:
      return state;
  }
};
export default xmlDataReducer;
