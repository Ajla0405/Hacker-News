import React, { useState } from "react";
import SearchBar from "./SearchBar";
import reactLogo from "./assets/react.svg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Header Section */}
      <div className="header">
        <h1 className="headline">Hackernews</h1>
      </div>
      <SearchBar />
    </div>
  );
}

export default App;
