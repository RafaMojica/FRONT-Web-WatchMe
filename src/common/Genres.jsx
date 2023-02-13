import React from "react";

function Genres({ genre }) {
  return (
    <>
      <button className="btn-genre">{genre?.name}</button>
    </>
  );
}

export default Genres;
