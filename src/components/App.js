import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

const App = () => {
  const [results, setResults] = useState([]);
  return (
    <div className="app">
      <header>
        <img
          className="nasa-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a3/NASA_Worm_logo.svg"
          alt="nasa logo"
        />
        <Search setSearchResults={setResults} />
      </header>
      <SearchResults results={results} />
    </div>
  );
};

export default App;
