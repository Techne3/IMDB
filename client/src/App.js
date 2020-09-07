import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import SearchMovies from "./components/SearchMovies";
import MovieList from "./components/MovieList";

function App() {
  const apiURL = `${process.env.REACT_APP_OMDB_API}`;
  const [state, setState] = useState({
    searchItem: "",
    results: [],
    selected: {},
    loading: false,
  });
  const [nominated, setNominated] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  const search = async (e) => {
    if (e.key === "Enter") {
      const searchResponse = await axios
        .get(apiURL + "&s=" + state.searchItem + "&type=movie")
        .then((searchResponse) => {
          let result = searchResponse.data.Search;
          setState((prevState) => {
            return { ...prevState, results: result };
          });
        })
        .catch((err) => console.log(err));
    }
  };
  const handleInput = (e) => {
    let search = e.target.value;
    setState((prevState) => {
      return { ...prevState, searchItem: search };
    });
  };

  const addMovies = (id) => {
    axios(apiURL + "&i=" + id).then(({ data }) => {
      let result = data;
      setSelectedItem([...selectedItem, result.imdbID]);
      setNominated([...nominated, result]);
    });
  };

  const removeMovie = (id) => {
    setSelectedItem(selectedItem.filter((x) => x !== id));
    setNominated(nominated.filter((x) => x.imdbID !== id));
  };

  return (
    <div className="App">
      <h1>IMDB Movies</h1>
      <SearchMovies handleInput={handleInput} search={search} />
      <MovieList
        results={state.results}
        addMovies={addMovies}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        nominated={nominated}
        removeMovie={removeMovie}
      />
    </div>
  );
}

export default App;
