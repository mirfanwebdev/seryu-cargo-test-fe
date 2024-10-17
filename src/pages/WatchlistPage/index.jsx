import { useEffect, useState } from "react";
import { CardList } from "../../components/CardList";
import { CardWatchlist } from "../../components/Cards";
import ContainerSection from "../../components/ContainerSection";
import Header from "../../components/Header";

function WatchlistPage() {
  const [watchListMovies, setWatchListMovies] = useState([]);

  useEffect(() => {
    const savedWatchlist = localStorage.getItem("watchlistMovies");
    if (savedWatchlist) {
      setWatchListMovies(JSON.parse(savedWatchlist));
    }
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
