import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Footer from "./components/Footer";
import SortingBar from "./components/SortingBar";
import NewsContainer from "../components/NewsContainer";
import "./App.css";
import "./SearchBar.css";

function App() {

	return (
		<>
			<div className="header">
				<h1 className="headline">Hackernews</h1>
			</div>
			<SearchBar />
			<NewsContainer />
			<Footer />
		</>
	);
}

export default App;