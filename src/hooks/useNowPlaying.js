import { useEffect, useState } from "react";
import { getNowPlaying } from "../api/movie";
const useNowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState([]);

  const handleNowPlaying = async () => {
    const data = await getNowPlaying();
    const movies = data.results;
    setNowPlaying(movies);
  };

  useEffect(() => {
    handleNowPlaying();
  }, []);
  return {
    nowPlaying,
  };
};

export default useNowPlaying;
