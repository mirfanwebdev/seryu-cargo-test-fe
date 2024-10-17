const removeWatchList = (id) => {
  const savedWatchlist = localStorage.getItem("watchlistMovies");
  const watchlistMovies = JSON.parse(savedWatchlist);

  const indexRemove = watchlistMovies.findIndex((movie) => movie.id === id);
  if (indexRemove !== -1) {
    watchlistMovies.splice(indexRemove, 1);
    localStorage.setItem("watchlistMovies", JSON.stringify(watchlistMovies));
  }
};

export default removeWatchList;
