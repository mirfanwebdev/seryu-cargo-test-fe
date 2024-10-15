import { useEffect, useState } from "react";
const useNowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const API_KEY = "c4326c9636ed552b98cf0239802c50bb";

  const fetchNowPlaying = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      setNowPlaying(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);
  return {
    nowPlaying,
  };
};

export default useNowPlaying;
