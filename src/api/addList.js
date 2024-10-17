import { apiBaseUrlV3, getAuthHeader } from "./config";

export const addFavorite = async (accountId, movieId, favorite = true) => {
  try {
    const response = await fetch(
      `${apiBaseUrlV3}/movie/${accountId}}/favorite`,
      {
        method: "POST",
        headers: getAuthHeader(),
        body: JSON.stringify({
          media_type: "movie",
          media_id: movieId,
          favorite: favorite,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const addWatchlist = async (accountId, movieId, watchlist = true) => {
  try {
    const response = await fetch(
      `${apiBaseUrlV3}/movie/${accountId}}/watchlist`,
      {
        method: "POST",
        headers: getAuthHeader(),
        body: JSON.stringify({
          media_type: "movie",
          media_id: movieId,
          watchlist: watchlist,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
