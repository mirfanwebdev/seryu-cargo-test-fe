import { useEffect, useState } from "react";
import addFavorite from "../utils/addFavorite";
import removeFavorite from "../utils/removeFavorite";

const useFavorite = ({ id, img, titleMovie, year, active }) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(active);
  }, []);

  const handleFavorite = (e) => {
    e.preventDefault();
    if (favorite == false) {
      addFavorite({ id, titleMovie, img, year });
      setFavorite(true);
    } else if (favorite == true) {
      removeFavorite(id);
      setFavorite(false);
    }
  };

  return { favorite, handleFavorite };
};

export default useFavorite;
