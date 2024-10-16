import { useEffect, useState } from "react";
import { getNowPlaying } from "../api";
const useNowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState([]);

  //   const fetchNowPlaying = async () => {
  //     try {
  //       const response = await fetch(
  //         `${apiUrl}/now_playing?api_key=${apiKey}&language=en-US&page=1`
  //       );
  //       const data = await response.json();
  //       setNowPlaying(data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

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
