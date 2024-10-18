import { getWatchlistMovies } from "./getLocalStorage";

const removeWatchList = (id) => {
  const watchlistMovies = getWatchlistMovies();

  const indexRemove = watchlistMovies.findIndex((movie) => movie.id === id);
  if (indexRemove !== -1) {
    watchlistMovies.splice(indexRemove, 1);
    localStorage.setItem("watchlistMovies", JSON.stringify(watchlistMovies));
  }
};

export default removeWatchList;
