// type: required
//payload: optional

import XML_DATA_ACTION_TYPES from "../actionTypes/xmlDataActionTypes";

const addXmlDataGlobalState = (dataArray) => ({
  type: XML_DATA_ACTION_TYPES.ADD_XML_DATA_GLOBAL_STATE,
  payload: { dataArray },
});

const deleteXmlDataGlobalState = () => ({
  type: XML_DATA_ACTION_TYPES.DELETE_XML_DATA_GLOBAL_STATE,
});

export { addXmlDataGlobalState, deleteXmlDataGlobalState };
