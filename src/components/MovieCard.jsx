import React, { useEffect, useRef, useState } from "react";

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
  index,
}) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-up-wrapper ${visible ? "visible" : ""}`}
      style={{ transitionDelay: visible ? `${index * 150}ms` : "0ms" }}
    >
      <div className="movie-card">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "/no-movie.png"
          }
          alt={title}
        />

        <div className="mt-4">
          <h3>{title}</h3>

          <div className="content">
            <div className="rating">
              <img src="star.svg" alt="Star Icon" />
              <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
            </div>

            <span>•</span>
            <p className="lang">{original_language}</p>

            <span>•</span>
            <p className="year">
              {release_date ? release_date.split("-")[0] : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
