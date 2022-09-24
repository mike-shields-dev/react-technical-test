import React, { useState } from "react";
import "../styles/search.css";

const Search = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  return (
    <>
      <form className="search-form">
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

export default Search;
