import React, { useState, useEffect } from "react";
import Results from "./Results";
import axios from "axios";
import Popup from "./Popup";

function TemplatePage({ apiurls }) {
  const [state, setState] = useState({
    results: [],
    selected: {},
  });

  //using useEffect to make it run once, to fetch the api data of movies/shows with the specified api url that is passed through it
  useEffect(() => {
    axios.get(apiurls).then(({ data }) => {
      let results = data.results;
      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  });

  // function that is used when a movie title/picture is clicked on, so it uses the movie's id to fetch the api data of the movie data, so it can be used in the popup info page
  const openPopup = (id) => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          id +
          "?api_key=7761243a41830c90132c413d1a1d41cc"
      )
      .then(({ data }) => {
        let result = data;

        console.log(result);

        setState((prevState) => {
          return { ...prevState, selected: result };
        });
      });
  };
  //this function is used when the button close is pressed in the popup info page, where it goes back to the previous page
  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div>
      <Results results={state.results} openPopup={openPopup} />
      {typeof state.selected.title != "undefined" ? (
        <Popup selected={state.selected} closePopup={closePopup} />
      ) : (
        false
      )}
    </div>
  );
}

export default TemplatePage;
