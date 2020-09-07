import React from "react";

function MovieList({ results }) {
  return (
    <section>
      {results.map((movieResult) => (
        <>
          <h1>{movieResult.Title}</h1>
          <h3>{movieResult.Year}</h3>
          <img src={movieResult.Poster} alt="movie poster" />
        </>
      ))}
    </section>
  );
}

export default MovieList;
