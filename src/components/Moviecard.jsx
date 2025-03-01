import React, { useState } from "react";
import MoviePlayer from "./MoviePlayer";

function MovieCard({ movie }) {
  const { title, overview, poster_path, vote_average, original_language } =
    movie;
  const [isPlaying, setIsPlaying] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handlePlay = async () => {
    setIsPlaying(true);
    const url = await fetchTrailerUrl(movie.id);
    setTrailerUrl(url);
  };

  const fetchTrailerUrl = async (movieId) => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
    );
    const data = await response.json();
    const trailer = data.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : "";
  };

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="rating">
          <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          <img src="./star.svg" alt="star" />
          <span className="text-amber-50">•</span>
          <p className="lang">{original_language}</p>
          <span className="text-amber-50">•</span>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePlay}
        >
          Play
        </button>
        {isPlaying && trailerUrl && <MoviePlayer url={trailerUrl} />}
      </div>
    </div>
  );
}

export default MovieCard;
