import { useEffect, useState } from "react";
import { getRecommendation } from "../api/movie";
const useRecommend = (id) => {
  const [recommended, setRecommended] = useState([]);

  const handleRecommend = async (movieId) => {
    const data = await getRecommendation(movieId);
    const movies = data.results;
    setRecommended(movies);
  };

  useEffect(() => {
    handleRecommend(id);
  }, [id]);

  return { recommended };
};

export default useRecommend;
