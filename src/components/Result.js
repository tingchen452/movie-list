import React from "react";

function Result({ result, openPopup }) {
  //using the api image and title path to get the picture and title
  const link = `https://image.tmdb.org/t/p/w200/${result.poster_path}`;
  return (
    <div className="result" onClick={() => openPopup(result.id)}>
      {/* If there is no image from the api, then use a different image*/}
      {result.poster_path == null ? (
        <img
          className="result"
          alt="not available "
          src="https://www.electiondataservices.com/wp-content/uploads/2014/10/sorry-image-not-available.jpg"
        />
      ) : (
        <img src={link} alt="default" />
      )}
      {/*if there is no title given for the movie from the api, then it will use the name instead*/}
      {result.title == null ? <h3>{result.name}</h3> : <h3>{result.title}</h3>}
    </div>
  );
}

export default Result;
