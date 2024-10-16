import { CardListScrollable } from "../../components/CardList";
import { Card } from "../../components/Cards";
import ContainerButton from "../../components/ContainerButton";
import ContainerSection from "../../components/ContainerSection";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import useDetail from "../../hooks/useDetail";
import {
  displayRuntime,
  displayYear,
  displayGenres,
  formatedDate,
} from "../../utils";
import useRecommend from "../../hooks/useRecommend";

const baseImgURL = import.meta.env.VITE_TMDB_IMAGE_URL;
const baseBackdropURL = import.meta.env.VITE_TMDB_IMAGE_URL_ORIGINAL;

function DetailSecton({ movie }) {
  const posterUrl = `${baseImgURL}${movie.poster_path}`;
  const backdropUrl = `${baseBackdropURL}${movie.backdrop_path}`;

  return (
    <>
      <div
        className="h-[400px] w-full py-[50px] px-[120px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backdropUrl})` }}
      >
        <div className="flex gap-5">
          <div className="w-[200px] h-[300px] flex-none">
            <img src={posterUrl} alt={movie.title} className="object-cover" />
          </div>
          <div className="font-roboto text-sm pt-[25px]">
            <h1 className="font-poppins font-bold text-[32px]">
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
            <div className="flex gap-2 py-[25px]">
              <ContainerButton />
            </div>
            <p>{movie.tagline}</p>
            <div className="pt-2.5">
              <p className="font-bold pb-[5px]">Overview</p>
              <p>{movie.overview}</p>
            </div>
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
      {/* <div>{detail.title}</div> */}
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
