// type: required
//payload: optional

import { MOVIE_DATA_ACTION_TYPES } from "../actionTypes";

const addMovieDataGlobalState = (movieDataToBeAdded) => ({
  type: MOVIE_DATA_ACTION_TYPES.ADD_MOVIE_DATA_GLOBAL_STATE,
  payload: { movieDataToBeAdded },
});

const deleteMovieDataGlobalState = () => ({
  type: MOVIE_DATA_ACTION_TYPES.DELETE_MOVIE_DATA_GLOBAL_STATE,
});

export { addMovieDataGlobalState, deleteMovieDataGlobalState };
