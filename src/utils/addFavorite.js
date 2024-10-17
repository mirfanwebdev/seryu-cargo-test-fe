const addFavorite = ({ id, titleMovie, img, year }) => {
  const savedFavorites = localStorage.getItem("favoriteMovies");
  const favoriteMovies = JSON.parse(savedFavorites);
  const addMovie = {
    id: id,
    title: titleMovie,
    poster_path: img,
    release_date: year,
  };

  if (!savedFavorites) {
    let movie = [];
    movie.push(addMovie);
    localStorage.setItem("favoriteMovies", JSON.stringify(movie));
  }
  if (favoriteMovies.some((movie) => movie.id)) {
    return;
  }

  favoriteMovies.push(addMovie);
  localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
};
export default addFavorite;
