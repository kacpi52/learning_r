// reducer is a function which takes actual state and  action then returns new state
import defaultState from "../defaultState/defaultState";
import DATA_ACTION_TYPES from "../actions/dataActionTypes";

const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DATA_ACTION_TYPES.ADD_DATA_GLOBAL_STATE:
      const { dataSource, dataArray } = action.payload;
      if (dataSource === "xml")
        return { ...state, dataFromXml: [...dataArray] };
      return {
        ...state,
        dataFromMovieApi: [...state.dataFromMovieApi, ...dataArray],
      };
    case DATA_ACTION_TYPES.DELETE_DATA_GLOBAL_STATE:
      if (action.payload === "xml") return { ...state, dataFromXml: [] };
      return { ...state, dataFromMovieApi: [] };
    case DATA_ACTION_TYPES.DELETE_ALL_DATA_GLOBAL_STATE:
      return { ...state, dataFromMovieApi: [], dataFromXml: [] };
    default:
      return state;
  }
};
export default dataReducer;
