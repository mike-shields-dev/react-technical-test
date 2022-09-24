import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/search.css";

const Search = () => {
  const [value, setValue] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  console.log(imageUrls);

  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    getImages(value).then((imageUrls) => setImageUrls(imageUrls));
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
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
