import React from "react";

const Search = (props) => {
  return (
    <div className="search">
      <form onSubmit={props.userSearch} action="">
        <div class="search-form container">
          <input
            class="search-input"
            onChange={props.handleSearch}
            type="text"
            placeholder="Search for user"
          />
          <button
            disabled={!props.handleSearch}
            type="submit"
            class="form-submit"
            id="search-btn"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
