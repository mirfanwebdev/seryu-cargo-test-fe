const removeFavorite = (id) => {
  const savedFavorites = localStorage.getItem("favoriteMovies");
  const favoriteMovies = JSON.parse(savedFavorites);

  const indexRemove = favoriteMovies.findIndex((movie) => movie.id === id);
  if (indexRemove !== -1) {
    favoriteMovies.splice(indexRemove, 1);
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }
};

export default removeFavorite;
