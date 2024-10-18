import { useEffect, useState } from "react";
import { CardList } from "../../components/CardList";
import { CardWatchlist } from "../../components/Cards";
import ContainerSection from "../../components/ContainerSection";
import Header from "../../components/Header";
import { getWatchlistMovies } from "../../utils/getLocalStorage";

function WatchlistPage() {
  const [watchListMovies, setWatchListMovies] = useState([]);

  useEffect(() => {
    const savedWatchList = getWatchlistMovies();
    setWatchListMovies(savedWatchList);
  }, []);

  return (
    <div>
      <Header />
      <ContainerSection title={"your watchlist"}>
        {watchListMovies && watchListMovies.length ? (
          <CardList>
            {watchListMovies.map((movie) => (
              <CardWatchlist
                key={movie.id}
                id={movie.id}
                img={movie.poster_path}
                titleMovie={movie.title}
                year={movie.release_date}
              />
            ))}
          </CardList>
        ) : (
          <div className="text-center">No watchlist movie</div>
        )}
      </ContainerSection>
    </div>
  );
}

export default WatchlistPage;
