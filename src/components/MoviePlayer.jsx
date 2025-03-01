import React from "react";
import ReactPlayer from "react-player/youtube";

function MoviePlayer({ url }) {
  return (
    <div className="movie-player">
      <ReactPlayer url={url} controls width="100%" height="100%" />
    </div>
  );
}

export default MoviePlayer;
