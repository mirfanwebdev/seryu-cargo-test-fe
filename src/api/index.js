const apiBaseUrlV3 = import.meta.env.VITE_API_URL_V3;
const apiBaseUrlv4 = import.meta.env.VITE_API_URL_V4;
const apiKey = import.meta.env.VITE_API_KEY;

const fetchData = async ({
  endpoint,
  params = {},
  v3 = true,
  method = "GET",
  token = null,
  body = null,
}) => {
  const url = new URL(`${v3 ? apiBaseUrlV3 : apiBaseUrlv4}${endpoint}`);

  url.searchParams.append("api_key", apiKey);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : null,
    },
    body: body ? JSON.stringify(body) : null,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getNowPlaying = (page = 1, language = "en-US") => {
  return fetchData({ endpoint: "/now_playing", params: { page, language } });
};

export const getTopRated = (page = 1, language = "en-US") => {
  return fetchData({ endpoint: "/top_rated", params: { page, language } });
};

export const getDetail = (movieId, language = "en-US") => {
  return fetchData({ endpoint: `/${movieId}`, params: { language } });
};

export const getRecommendation = (movieId, page = 1, language = "en-US") => {
  return fetchData({
    endpoint: `/${movieId}/recommendations`,
    params: { page, language },
  });
};

export const getFavorite = (accountId, token, page = 1, language = "en-US") => {
  return fetchData({
    endpoint: `/account/${accountId}/favorite/movies`,
    params: { page, language },
    v3: false,
    token: token,
  });
};

export const getWatchlist = (
  accountId,
  token,
  page = 1,
  language = "en-US"
) => {
  return fetchData({
    endpoint: `/account/${accountId}/watchlist/movies`,
    params: { page, language },
    v3: false,
    token: token,
  });
};
