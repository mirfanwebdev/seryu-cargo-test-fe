import { useEffect, useState } from "react";
import { getTopRated } from "../api";
const useTopRated = () => {
  const [topRated, setTopRated] = useState([]);

  const handleTopRated = async () => {
    const data = await getTopRated();
    const movies = data.results.slice(0, 12);
    setTopRated(movies);
  };

  useEffect(() => {
    handleTopRated();
  }, []);
  return { topRated };
};

export default useTopRated;
