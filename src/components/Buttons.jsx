import {
  MdBookmark,
  MdBookmarkBorder,
  MdFavorite,
  MdFavoriteBorder,
} from "react-icons/md";
import useFavorite from "../hooks/useFavorite";
import useWatchList from "../hooks/useWatchlist";

export function ButtonFavorite({ id, img, titleMovie, year, active = false }) {
  const { favorite, handleFavorite } = useFavorite({
    id,
    img,
    titleMovie,
    year,
    active,
  });

  return (
    <>
      <button onClick={handleFavorite} className="hover:scale-110">
        {favorite ? (
          <MdFavorite className="text-2xl" />
        ) : (
          <MdFavoriteBorder className="text-2xl" />
        )}
      </button>
    </>
  );
}

export function ButtonWatchlist({ id, img, titleMovie, year, active = false }) {
  const { watchList, handleWatchList } = useWatchList({
    id,
    img,
    titleMovie,
    year,
    active,
  });

  return (
    <>
      <button onClick={handleWatchList} className="hover:scale-110">
        {watchList ? (
          <MdBookmark className="text-2xl" />
        ) : (
          <MdBookmarkBorder className="text-2xl" />
        )}
      </button>
    </>
  );
}
