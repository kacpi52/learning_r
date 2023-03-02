import axios from "axios";

export const searchByTitle = async (movieTitle) => {
  if (typeof movieTitle == "undefined" || movieTitle == "") {
    return {};
  }
  try {
    const { data } = await axios.get(
      `${movieTitle}&apikey=${process.env.REACT_APP_MOVIES_API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(`error from fetching api : ${error}`);
    throw error;
  }
};
