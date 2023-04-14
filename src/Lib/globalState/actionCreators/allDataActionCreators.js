// type: required
//payload: optional

import ALL_DATA_ACTION_TYPES from "../actionTypes/allDataActionTypes";

const deleteAllDataGlobalState = () => ({
  type: ALL_DATA_ACTION_TYPES.DELETE_ALL_DATA_GLOBAL_STATE,
});

export { deleteAllDataGlobalState };
