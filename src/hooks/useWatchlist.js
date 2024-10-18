import { useEffect, useState } from "react";
import addWatchlist from "../utils/addWatchlist";
import removeWatchList from "../utils/removeWatchlist";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/getLocalStorage";

const useWatchList = ({ id, img, titleMovie, year, active }) => {
  const accessToken = getToken();
  const [watchList, setWatchList] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setWatchList(active);
  }, []);

  const handleWatchList = (e) => {
    e.preventDefault();
    if (!accessToken) {
      navigate("/login");
      return;
    }
    if (watchList === false) {
      addWatchlist({ id, titleMovie, img, year });
      setWatchList(true);
    } else if (watchList === true) {
      removeWatchList(id);
      setWatchList(false);
    }
  };

  return {
    watchList,
    handleWatchList,
  };
};

export default useWatchList;
