import React from "react";

function Popup({ selected, closePopup }) {
  const link = `https://image.tmdb.org/t/p/w200/${selected.poster_path}`;

  return (
    <section className="popup">
      <div className="content">
        <h2>{selected.title}</h2>
        <div className="plot">
          <img alt="primary" src={link} />
          <p> {selected.overview}</p>
        </div>
        <div className="info">
          <p> Released Date: {selected.release_date}</p>
          <p>Rating: {selected.vote_average} </p>
        </div>
      </div>
      <button className="close" onClick={closePopup}>
        Close
      </button>
    </section>
  );
}
//might have to change
export default Popup;
