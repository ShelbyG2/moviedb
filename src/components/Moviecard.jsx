function MovieCard({ movie }) {
  const { title, overview, poster_path, vote_average, original_language } =
    movie;
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
          <span className="text-amber-50">•</span>p
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
