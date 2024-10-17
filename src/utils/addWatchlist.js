const addWatchlist = ({ id, titleMovie, img, year }) => {
  const savedWatchlist = localStorage.getItem("watchlistMovies");
  const watchlistMovies = JSON.parse(savedWatchlist);

  const addMovie = {
    id: id,
    title: titleMovie,
    poster_path: img,
    release_date: year,
  };

  if (!savedWatchlist) {
    let movie = [];
    movie.push(addMovie);
    localStorage.setItem("watchlistMovies", JSON.stringify(movie));
  }
  if (watchlistMovies.some((movie) => movie.id === id)) {
    return;
  }
  watchlistMovies.push(addMovie);
  localStorage.setItem("watchlistMovies", JSON.stringify(watchlistMovies));
};

export default addWatchlist;
