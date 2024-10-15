import { useEffect, useState } from "react";
const useTopRated = () => {
  const [topRated, setTopRated] = useState([]);
  const API_KEY = "c4326c9636ed552b98cf0239802c50bb";

  const fetchTopRated = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      const results = data.results.slice(0, 12);
      setTopRated(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTopRated();
  }, []);
  return { topRated };
};

export default useTopRated;
