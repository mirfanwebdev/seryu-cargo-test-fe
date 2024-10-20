import ContainerSection from "../../components/ContainerSection";
import { CardList } from "../../components/CardList";
import Header from "../../components/Header";
import { CardFavorite } from "../../components/Cards";
import { useEffect, useState } from "react";
import { getFavoriteMovies } from "../../utils/getLocalStorage";

function FavoritePage() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const savedFavorite = getFavoriteMovies();
    setFavoriteMovies(savedFavorite);
  }, []);

  return (
    <div>
      <Header />
      <ContainerSection title={"your favorite movies"}>
        {favoriteMovies && favoriteMovies.length ? (
          <CardList>
            {favoriteMovies.map((movie) => (
              <CardFavorite
                key={movie.id}
                id={movie.id}
                img={movie.poster_path}
                titleMovie={movie.title}
                year={movie.release_date}
              />
            ))}
          </CardList>
        ) : (
          <div className="text-center">No favorite movie</div>
        )}
      </ContainerSection>
    </div>
  );
}

export default FavoritePage;
