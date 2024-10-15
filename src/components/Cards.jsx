import { ButtonFavorite, ButtonWatchlist } from "./Buttons";
import ContainerButton from "./ContainerButton";

function BaseCard({ children, img, titleMovie, year }) {
  const posterUrl = `https://image.tmdb.org/t/p/w500${img}`;
  const displayYear = (releaseDate) => new Date(releaseDate).getFullYear();

  return (
    <>
      <div className="w-[188px] h-[355px] bg-[#050E12] rounded-md flex-none relative">
        <div className="relative group">
          <img
            className="object-cover rounded-md"
            src={posterUrl}
            // src="https://placehold.co/193x290"
            // alt="placeholder-image"
            alt={titleMovie}
          />
          <div className="hidden group-hover:flex gap-2.5 absolute bottom-2.5 right-2.5">
            {children}
          </div>
        </div>
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

export function Card({ img, titleMovie, year }) {
  return (
    <>
      <BaseCard img={img} titleMovie={titleMovie} year={year}>
        <ContainerButton />
      </BaseCard>
    </>
  );
}

export function CardFavorite({ img, titleMovie, year }) {
  return (
    <>
      <BaseCard img={img} titleMovie={titleMovie} year={year}>
        <ButtonFavorite />
      </BaseCard>
    </>
  );
}

export function CardWatchlist({ img, titleMovie, year }) {
  return (
    <>
      <BaseCard img={img} titleMovie={titleMovie} year={year}>
        <ButtonWatchlist />
      </BaseCard>
    </>
  );
}
