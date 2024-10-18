import { getFavoriteMovies } from "./getLocalStorage";

const addFavorite = ({ id, titleMovie, img, year }) => {
  const favoriteMovies = getFavoriteMovies();

  const addMovie = {
    id: id,
    title: titleMovie,
    poster_path: img,
    release_date: year,
  };

  if (favoriteMovies.some((movie) => movie.id === id)) {
    return;
  }

  favoriteMovies.push(addMovie);
  localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
};
export default addFavorite;
