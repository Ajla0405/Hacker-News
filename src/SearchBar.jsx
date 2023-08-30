import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input className="search-input" type="text" placeholder="Search..." />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
