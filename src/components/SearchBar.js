/* eslint-disable no-undef */
import "./SearchBar.css";

import React, { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("bike");
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(term);
    // onSubmit(
    //   //NEVER EVER EVER DO THIS
    //   document.querySelector("input").value
    // );
  };
  const handleChange = (e) => {
    // console.log(e.target.value);
    setTerm(e.target.value);
    // setTerm(e.target.value.replace(/[a-z]/, ""));
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        {/* Confirm your search:{term} */}
        <label>Enert Search Tearm</label>
        <input value={term} onChange={handleChange} />
        {/* {term.length < 3 && "Term must be longer"} */}
      </form>
    </div>
  );
}
export default SearchBar;
