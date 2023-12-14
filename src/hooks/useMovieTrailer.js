import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterTrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0]; // in case if video type "Trailer" is not present, pick any type of video

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
