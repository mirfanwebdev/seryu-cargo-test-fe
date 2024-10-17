import { CardListScrollable } from "../../components/CardList";
import { Card } from "../../components/Cards";
import ContainerSection from "../../components/ContainerSection";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import useDetail from "../../hooks/useDetail";
import {
  displayRuntime,
  displayYear,
  displayGenres,
  formatedDate,
  ratingNumber,
} from "../../utils";
import useRecommend from "../../hooks/useRecommend";
import CircularRating from "../../components/CircularRating";
import { ButtonFavorite, ButtonWatchlist } from "../../components/Buttons";

const baseImgURL = import.meta.env.VITE_TMDB_IMAGE_URL;
const baseBackdropURL = import.meta.env.VITE_TMDB_IMAGE_URL_ORIGINAL;

function DetailSecton({ movie }) {
  const posterUrl = `${baseImgURL}${movie.poster_path}`;
  const backdropUrl = `${baseBackdropURL}${movie.backdrop_path}`;

  return (
    <>
      <div
        className="flex gap-5 justify-center flex-wrap md:flex-nowrap min-h-[400px] w-full p-4 md:py-[50px] md:px-[120px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backdropUrl})`,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="w-[200px] h-[300px] flex-none">
          <img src={posterUrl} alt={movie.title} className="object-cover" />
        </div>
        <div className="flex flex-col font-roboto text-sm md:pt-[25px]">
          <h1 className="font-poppins font-bold text-4xl text-balance">
            {movie.title}
            <span className="font-normal">{` (${displayYear(
              movie.release_date
            )})`}</span>
          </h1>
          <div className="pt-2 inline-block">
            <span>{formatedDate(movie.release_date)}</span>
            <span className="before:content-['·'] before:px-1">
              {displayGenres(movie.genres)}
            </span>
            <span className="before:content-['·'] before:px-1">
              {displayRuntime(movie.runtime)}
            </span>
          </div>
          <div className="flex items-center gap-4 py-[25px]">
            <CircularRating
              value={movie.vote_average * 10}
              text={ratingNumber(movie.vote_average)}
            />
            <p className="w-5 text-wrap text-xs">User Score</p>
            <ButtonWatchlist
              id={movie.id}
              img={movie.poster_path}
              titleMovie={movie.title}
              year={movie.release_date}
            />
            <ButtonFavorite
              id={movie.id}
              img={movie.poster_path}
              titleMovie={movie.title}
              year={movie.release_date}
            />
          </div>
          <p>{movie.tagline}</p>
          <div className="pt-2.5">
            <p className="font-bold pb-[5px]">Overview</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function MovieDetailPage() {
  const param = useParams();
  const { detail } = useDetail(param.id);
  const { recommended } = useRecommend(param.id);
  return (
    <>
      <Header />
      <DetailSecton movie={detail} />
      <ContainerSection title={"recommended"} large={false}>
        <CardListScrollable>
          {recommended.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              img={movie.poster_path}
              titleMovie={movie.title}
              year={movie.release_date}
            />
          ))}
        </CardListScrollable>
      </ContainerSection>
    </>
  );
}

export default MovieDetailPage;
