export const displayYear = (releaseDate) => new Date(releaseDate).getFullYear();

export const displayRuntime = (runtime) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
};

export const displayGenres = (genres) => {
  if (genres) {
    return genres.map((genre) => genre.name).join(", ");
  }
  return genres;
};

export const formatedDate = (date) => {
  if (date) {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  }
  return date;
};

export const ratingNumber = (rating) => {
  if (rating) {
    return Math.floor(rating * 10);
  }
  return rating;
};
