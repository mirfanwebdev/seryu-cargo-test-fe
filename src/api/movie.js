import { apiBaseUrlV3, apiKey, defaultHeader } from "./config";

export const getNowPlaying = async () => {
  try {
    const response = await fetch(
      `${apiBaseUrlV3}/movie/now_playing?api_key=${apiKey}`,
      {
        method: "GET",
        headers: defaultHeader,
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

export const getTopRated = async () => {
  try {
    const response = await fetch(
      `${apiBaseUrlV3}/movie/top_rated?api_key=${apiKey}`,
      {
        method: "GET",
        headers: defaultHeader,
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

export const getDetail = async (movieId) => {
  try {
    const response = await fetch(
      `${apiBaseUrlV3}/movie/${movieId}?api_key=${apiKey}`,
      {
        method: "GET",
        headers: defaultHeader,
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

export const getRecommendation = async (movieId) => {
  try {
    const response = await fetch(
      `${apiBaseUrlV3}/movie/${movieId}/recommendations?api_key=${apiKey}`,
      {
        method: "GET",
        headers: defaultHeader,
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
