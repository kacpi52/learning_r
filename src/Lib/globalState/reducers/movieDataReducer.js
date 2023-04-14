// reducer is a function which takes actual state and  action then returns new state
import initialState from "../initialState/initialState";
import MOVIE_DATA_ACTION_TYPES from "../actionTypes/movieDataActionTypes";

const movieDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_DATA_ACTION_TYPES.ADD_MOVIE_DATA_GLOBAL_STATE:
      const { dataArray } = action.payload;
      return { ...state, movieData: [...dataArray] };
    case MOVIE_DATA_ACTION_TYPES.DELETE_MOVIE_DATA_GLOBAL_STATE:
      return { ...state, movieData: [] };
    default:
      return state;
  }
};
export default movieDataReducer;
