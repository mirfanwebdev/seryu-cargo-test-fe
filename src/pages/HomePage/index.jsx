import Header from "../../components/Header";
import ContainerSection from "../../components/ContainerSection";
import { CardList, CardListScrollable } from "../../components/CardList";
import { Card } from "../../components/Cards";
import useNowPlaying from "../../hooks/useNowPlaying";
import useTopRated from "../../hooks/useTopRated";

function HomePage() {
  const { nowPlaying } = useNowPlaying();
  const { topRated } = useTopRated();

  return (
    <>
      <Header />
      <ContainerSection title={"now playing"}>
        <CardListScrollable>
          {nowPlaying.map((movie) => (
            <Card
              key={movie.id}
              img={movie.poster_path}
              titleMovie={movie.title}
              year={movie.release_date}
            />
          ))}
        </CardListScrollable>
      </ContainerSection>
      <ContainerSection title={"top rated"}>
        <CardList>
          {topRated.map((movie) => (
            <Card
              key={movie.id}
              img={movie.poster_path}
              titleMovie={movie.title}
              year={movie.release_date}
            />
          ))}
        </CardList>
      </ContainerSection>
    </>
  );
}

export default HomePage;
