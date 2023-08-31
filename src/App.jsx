import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Footer from "./components/Footer";
import SortingBar from "./components/SortingBar";
import NewsContainer from "../components/NewsContainer";
import "./App.css";
import "./SearchBar.css";

function App() {
  //const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <div className="header">
        <h1 className="headline">Hackernews</h1>
      </div>
      {/* <SearchBar onSearch={setSearchQuery} /> */}

      <NewsContainer searchQuery={searchQuery} />
      <Footer />
    </>
  );
}

export default App;
