// type: required
//payload: optional

import DATA_ACTION_TYPES from "./dataActionTypes";

const addDataGlobalState = (dataSource, dataArray) => ({
  type: DATA_ACTION_TYPES.ADD_DATA_GLOBAL_STATE,
  payload: { dataSource, dataArray },
});

const deleteDataGlobalState = (dataSource) => ({
  type: DATA_ACTION_TYPES.DELETE_DATA_GLOBAL_STATE,
  payload: dataSource,
});

const deleteAllDataGlobalState = () => ({
  type: DATA_ACTION_TYPES.DELETE_ALL_DATA_GLOBAL_STATE,
});

export { addDataGlobalState, deleteDataGlobalState, deleteAllDataGlobalState };
