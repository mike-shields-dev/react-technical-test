import React, { useState } from "react";
import { PropTypes } from "prop-types";
import getImages from "../requests/getImages";
import "../styles/search.css";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await getImages(value)
    setSearchResults(results);
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit} name="search-form">
        <input
          className="search-form__input"
          onChange={handleChange}
          placeholder="enter your search"
          type="text"
          value={value}
        />
        <button className="search-form__button" type="submit">
          Go!
        </button>
      </form>
    </>
  );
};

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Search;
