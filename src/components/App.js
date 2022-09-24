import "../styles/app.css";
import React from "react";
import Search from "./Search";

const App = () => {
  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a3/NASA_Worm_logo.svg"
        alt="nasa logo"
      />
      <Search />
    </div>
  );
};

export default App;
