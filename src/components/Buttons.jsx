import { MdBookmarkBorder, MdFavoriteBorder } from "react-icons/md";

export function ButtonFavorite() {
  return (
    <>
      <button className="hover:scale-110">
        <MdFavoriteBorder className="text-2xl" />
      </button>
    </>
  );
}

export function ButtonWatchlist() {
  return (
    <>
      <button className="hover:scale-110">
        <MdBookmarkBorder className="text-2xl" />
      </button>
    </>
  );
}
