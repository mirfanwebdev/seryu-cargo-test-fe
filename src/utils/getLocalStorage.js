export const getToken = () => {
  const token = localStorage.getItem("access_token");
  return token;
};

export const getRequestToken = () => {
  const requestToken = localStorage.getItem("request_token");
  return requestToken;
};

export const getFavoriteMovies = () => {
  const favoriteMovies = localStorage.getItem("favoriteMovies");
  return favoriteMovies ? JSON.parse(favoriteMovies) : [];
};

export const getWatchlistMovies = () => {
  const watchlistMovies = localStorage.getItem("watchlistMovies");
  return watchlistMovies ? JSON.parse(watchlistMovies) : [];
};
