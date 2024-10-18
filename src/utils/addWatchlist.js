import { getWatchlistMovies } from "./getLocalStorage";

const addWatchlist = ({ id, titleMovie, img, year }) => {
  const watchlistMovies = getWatchlistMovies();

  const addMovie = {
    id: id,
    title: titleMovie,
    poster_path: img,
    release_date: year,
  };

  if (watchlistMovies.some((movie) => movie.id === id)) {
    return;
  }
  watchlistMovies.push(addMovie);
  localStorage.setItem("watchlistMovies", JSON.stringify(watchlistMovies));
};

export default addWatchlist;
