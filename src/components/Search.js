import React from "react";

function Search({ search, onSearchChange }) {

  function handleChange(e) {
    onSearchChange(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={search} onChange={handleChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
