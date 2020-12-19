import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

function Navbars() {
  return (
    <div>
      <nav>
        <p onClick={() => window.location.reload(false)}>
          <FontAwesomeIcon icon={faVideo} />
          TingMovie
        </p>
        <ul>
          <Link to="/">
            <li>
              <a href="#">Home</a>
            </li>
          </Link>
          <Link to="/NowPlaying">
            <li>
              <a href="#">Now Playing</a>
            </li>
          </Link>
          <Link to="/TopRatedMovies">
            <li>
              <a href="#">Top Rated Movies</a>
            </li>
          </Link>
          <li>
            <a href="#">Genre</a>
            <ul>
              <Link to="/genre/action">
                <li>
                  <a href="#">Action</a>
                </li>
              </Link>
              <Link to="/genre/adventure">
                <li>
                  <a href="#">Adventure</a>
                </li>
              </Link>
              <Link to="/genre/animation">
                <li>
                  <a href="#">Animation</a>
                </li>
              </Link>

              <Link to="/genre/comedy">
                <li>
                  <a href="#">Comedy</a>
                </li>
              </Link>

              <Link to="/genre/crime">
                <li>
                  <a href="#">Crime</a>
                </li>
              </Link>
              <Link to="/genre/drama">
                <li>
                  <a href="#">Drama</a>
                </li>
              </Link>
              <Link to="/genre/horror">
                <li>
                  <a href="#">Horror</a>
                </li>
              </Link>
            </ul>
          </li>
          <Link to="/Discover">
            <li>
              <a href="#">Discover</a>
            </li>
          </Link>
          <Link to="/PopularTvShows">
            <li>
              <a href="#">Popular Tv Shows</a>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbars;
