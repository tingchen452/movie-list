import React, { useState } from "react";
import Search from "./components/Search";
import Navbars from "./components/Navbars";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TemplatePage from "./components/TemplatePage";

function App() {
  const [state, setState] = useState({
    s: "",
  });
  const homePageUrl =
    "https://api.themoviedb.org/3/trending/all/day?api_key=7761243a41830c90132c413d1a1d41cc";
  const nowPlayingUrl =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=7761243a41830c90132c413d1a1d41cc&language=en-US";
  const topRatedMoviesUrl =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=7761243a41830c90132c413d1a1d41cc&language=en-US&page=1";
  const discoverUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=7761243a41830c90132c413d1a1d41cc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2019";
  const popularTvShowsUrl =
    "https://api.themoviedb.org/3/tv/popular?api_key=7761243a41830c90132c413d1a1d41cc&language=en-US&page=1";
  const genreActionUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=7761243a41830c90132c413d1a1d41cc&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&year=2019&with_genres=28";
  const genreAdventureUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=7761243a41830c90132c413d1a1d41cc&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&year=2019&with_genres=12";
  const genreAnimationUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=7761243a41830c90132c413d1a1d41cc&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&year=2019&with_genres=16";
  const genreComedyUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=7761243a41830c90132c413d1a1d41cc&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&year=2019&with_genres=35";
  const genreCrimeUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=7761243a41830c90132c413d1a1d41cc&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&year=2019&with_genres=80";
  const genreDramaUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=7761243a41830c90132c413d1a1d41cc&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&year=2019&with_genres=18";
  const genreHorrorUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=7761243a41830c90132c413d1a1d41cc&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&year=2019&with_genres=27";

  const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=7761243a41830c90132c413d1a1d41cc&query=${state.s}`;

  //getting the value of what we input into the search bar
  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
    //console.log(state.s);
  };

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbars />
        </header>
        <main>
          <Search handleInput={handleInput} />
         
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <TemplatePage apiurls={homePageUrl} />}
            />
            <Route
              path="/search"
              render={(props) => <TemplatePage apiurls={searchUrl} />}
            />
            <Route
              path="/NowPlaying"
              render={(props) => <TemplatePage apiurls={nowPlayingUrl} />}
            />
            <Route
              path="/TopRatedMovies"
              render={(props) => <TemplatePage apiurls={topRatedMoviesUrl} />}
            />
            <Route
              path="/genre/action"
              render={(props) => <TemplatePage apiurls={genreActionUrl} />}
            />
            <Route
              path="/genre/adventure"
              render={(props) => <TemplatePage apiurls={genreAdventureUrl} />}
            />
            <Route
              path="/genre/animation"
              render={(props) => <TemplatePage apiurls={genreAnimationUrl} />}
            />
            <Route
              path="/genre/comedy"
              render={(props) => <TemplatePage apiurls={genreComedyUrl} />}
            />
            <Route
              path="/genre/crime"
              render={(props) => <TemplatePage apiurls={genreCrimeUrl} />}
            />
            <Route
              path="/genre/drama"
              render={(props) => <TemplatePage apiurls={genreDramaUrl} />}
            />
            <Route
              path="/genre/horror"
              render={(props) => <TemplatePage apiurls={genreHorrorUrl} />}
            />
            <Route
              path="/Discover"
              render={(props) => <TemplatePage apiurls={discoverUrl} />}
            />
            <Route
              path="/PopularTvShows"
              render={(props) => <TemplatePage apiurls={popularTvShowsUrl} />}
            />

            {/* 
            Instead of making each page, i used a template page and pass the api url for that specify page
            */}
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
