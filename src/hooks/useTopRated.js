import { useEffect, useState } from "react";
import { getTopRated } from "../api";
const useTopRated = () => {
  const [topRated, setTopRated] = useState([]);

  // const apiKey = import.meta.env.VITE_API_KEY;
  // const apiUrl = import.meta.env.VITE_API_URL_V3;

  // const fetchTopRated = async () => {
  //   try {
  //     const response = await fetch(
  //       `${apiUrl}/top_rated?api_key=${apiKey}&language=en-US&page=1`
  //     );
  //     const data = await response.json();
  //     const results = data.results.slice(0, 12);
  //     setTopRated(results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
