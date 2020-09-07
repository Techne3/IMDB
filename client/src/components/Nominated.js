import React from "react";

function Nominated({ nominated, removeMovie }) {
  return (
    <div>
      {nominated.map((nomination) => (
        <>
          <h1>{nomination.Title}</h1>
          <img src={nomination.Poster} alt="Movie Poster" />
          <h1>{nomination.Rated}</h1>
          <button onClick={() => removeMovie(nomination.imdbID)}>Remove</button>
        </>
      ))}
    </div>
  );
}

export default Nominated;
