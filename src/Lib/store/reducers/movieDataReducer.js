// reducer is a function which takes actual state and  action then returns new state
import MOVIE_DATA_ACTION_TYPES from "../actionTypes/movieDataActionTypes";

const initialState = [];

const movieDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_DATA_ACTION_TYPES.ADD_MOVIE_DATA_GLOBAL_STATE:
      const { movieDataToBeAdded } = action.payload;
      return [...state, ...movieDataToBeAdded];
    case MOVIE_DATA_ACTION_TYPES.DELETE_MOVIE_DATA_GLOBAL_STATE:
      return [];
    default:
      return state;
  }
};
export default movieDataReducer;
