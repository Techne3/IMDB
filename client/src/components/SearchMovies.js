import React from "react";

function SearchMovies({ handleInput, search }) {
  return (
    <div>
      <input
        onChange={handleInput}
        onKeyPress={search}
        placeholder="Search Movies..."
      />
    </div>
  );
}

export default SearchMovies;
