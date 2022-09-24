import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  }

  return (
    <div className="search-results" data-testid="search-results">
      {results.map((url) => (
        <img
          key={uuidv4()}
          className="search-results__image"
          src={url}
          alt=""
        />
      ))}
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchResults;
