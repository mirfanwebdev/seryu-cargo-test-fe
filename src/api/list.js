import { apiBaseUrlv4, getAuthHeader } from "./config";

export const getFavorite = async (accountId) => {
  try {
    const response = await fetch(
      `${apiBaseUrlv4}/account/${accountId}/favorite/movies`,
      {
        method: "GET",
        headers: getAuthHeader(),
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

export const getWatchlist = async (accountId) => {
  try {
    const response = await fetch(
      `${apiBaseUrlv4}/account/${accountId}/watchlist/movies`,
      {
        method: "GET",
        headers: getAuthHeader(),
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
