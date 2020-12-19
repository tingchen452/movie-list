import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search({ handleInput }) {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        className="searchbox"
        placeholder="Search for a movie..."
        onChange={handleInput}
      ></input>
      <Link to="/search">
        <a className="searchbtn" href="#">
          {" "}
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </a>
      </Link>
    </section>
  );
}

export default Search;
