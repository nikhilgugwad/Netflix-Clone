import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  // useSelector is used to fetch data from the store i.e list of movies data in this case
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return; // early return because useSelector will try to fetch data from the store when it is still null (i.e nowPlayingMovies) so, therefore throws an error

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default MainContainer;
