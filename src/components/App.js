import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import logo from "../assets/img/NASA_Worm_logo.svg";

const App = () => {
  const [results, setResults] = useState([]);
  return (
    <div className="app">
      <header>
        <img className="nasa-logo" src={logo} alt="nasa logo" />
        <Search setSearchResults={setResults} />
      </header>
      <SearchResults results={results} />
    </div>
  );
};

export default App;
