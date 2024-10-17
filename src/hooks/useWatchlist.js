import { useEffect, useState } from "react";
import addWatchlist from "../utils/addWatchlist";
import removeWatchList from "../utils/removeWatchlist";

const useWatchList = ({ id, img, titleMovie, year, active }) => {
  const [watchList, setWatchList] = useState(false);

  useEffect(() => {
    setWatchList(active);
  }, []);

  const handleWatchList = (e) => {
    e.preventDefault();
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
