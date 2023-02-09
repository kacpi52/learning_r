const API_LINK = "https://www.omdbapi.com";
const API_KEY = "2eb14caf";

export const searchByTitle = async (movieTitle) => {
  if (typeof movieTitle == "undefined" || movieTitle == "") {
    return {};
  }
  try {
    const apiConnect = await fetch(
      `${API_LINK}/?t=${movieTitle}&apikey=${API_KEY}`
    );
    return apiConnect.json();
  } catch (error) {
    console.log(`error from fetching api : ${error}`);
    throw error;
  }
};
