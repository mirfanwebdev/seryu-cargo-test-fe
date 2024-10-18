import { getFavoriteMovies } from "./getLocalStorage";

const removeFavorite = (id) => {
  const favoriteMovies = getFavoriteMovies();

  const indexRemove = favoriteMovies.findIndex((movie) => movie.id === id);
  if (indexRemove !== -1) {
    favoriteMovies.splice(indexRemove, 1);
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }
};

export default removeFavorite;
