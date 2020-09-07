import React from "react";
import Nominated from "./Nominated";

function MovieList({
  results,
  addMovies,
  setSelectedItem,
  nominated,
  removeMovie,
  selectedItem,
}) {
  return (
    <section>
      {nominated.length < 5
        ? results.map((movieResult, i) => (
            <>
              <h1>{movieResult.Title}</h1>
              <h3>{movieResult.Year}</h3>
              <img src={movieResult.Poster} alt="movie poster" />
              <button
                disabled={
                  selectedItem.indexOf(movieResult.imdbID) !== -1 ? true : false
                }
                onClick={() => {
                  addMovies(movieResult.imdbID);
                  setSelectedItem(movieResult.imdbID);
                }}
              >
                Nominate
              </button>
            </>
          ))
        : results.map((movieResult, i) => (
            <>
              <h1 key={movieResult.imdbID}>{movieResult.Title}</h1>
              <h3>{movieResult.Year}</h3>
              <img src={movieResult.Poster} alt="movie poster" />
              <button disabled={true}>Nominate</button>
            </>
          ))}

      <Nominated nominated={nominated} removeMovie={removeMovie} />
    </section>
  );
}

export default MovieList;
