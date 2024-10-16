import { Link } from "react-router-dom";
import { ButtonFavorite, ButtonWatchlist } from "./Buttons";
import ContainerButton from "./ContainerButton";
import { displayYear } from "../utils";
const baseImgURL = import.meta.env.VITE_TMDB_IMAGE_URL;

function BaseCard({ children, id, img, titleMovie, year }) {
  const posterUrl = `${baseImgURL}${img}`;

  return (
    <>
      <div className="w-[188px] h-[355px] bg-[#050E12] rounded-md flex-none relative">
        <Link to={`/movie/${id}`} className="relative group">
          <img
            className="object-cover rounded-md"
            src={posterUrl}
            alt={titleMovie}
          />
          <div className="hidden group-hover:flex gap-2.5 absolute bottom-2.5 right-2.5">
            {children}
          </div>
        </Link>
        <div className="pt-3 pl-4">
          <p className="font-inter font-bold text-lg capitalize truncate text-[#B6B6B6]">
            {titleMovie}
          </p>
          <p className="font-inter text-xs text-[#828282]">
            {displayYear(year)}
          </p>
        </div>
      </div>
    </>
  );
}

export function Card({ id, img, titleMovie, year }) {
  return (
    <>
      <BaseCard id={id} img={img} titleMovie={titleMovie} year={year}>
        <ContainerButton />
      </BaseCard>
    </>
  );
}

export function CardFavorite({ id, img, titleMovie, year }) {
  return (
    <>
      <BaseCard id={id} img={img} titleMovie={titleMovie} year={year}>
        <ButtonFavorite />
      </BaseCard>
    </>
  );
}

export function CardWatchlist({ id, img, titleMovie, year }) {
  return (
    <>
      <BaseCard id={id} img={img} titleMovie={titleMovie} year={year}>
        <ButtonWatchlist />
      </BaseCard>
    </>
  );
}
