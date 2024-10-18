import { useEffect, useState } from "react";
import addFavorite from "../utils/addFavorite";
import removeFavorite from "../utils/removeFavorite";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/getLocalStorage";

const useFavorite = ({ id, img, titleMovie, year, active }) => {
  const accessToken = getToken();
  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFavorite(active);
  }, []);

  const handleFavorite = (e) => {
    e.preventDefault();
    if (!accessToken) {
      navigate("/login");
      return;
    }
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
