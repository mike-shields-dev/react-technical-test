import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p className="no-results">No results</p>;
  }

  return (
    <div className="search-results" data-testid="search-results">
      <ResponsiveMasonry columnsCountBreakPoints={{ 600: 1, 900: 2, 1200: 3 }}>
        <Masonry gutter="1rem">
          {results.map((item) => (
            <img
              key={uuidv4()}
              className="search-results__image"
              src={item.links[0].href}
              alt={item.data[0].title}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default SearchResults;
