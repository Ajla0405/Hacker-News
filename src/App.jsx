import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Footer from "./components/Footer";
import SortingBar from "./components/SortingBar";
import "./App.css";
import "./SearchBar.css"

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
				<div className="header">
					<h1 className="headline">Hackernews</h1>
				</div>
				<SearchBar />
				<SortingBar />

				<Footer />
		</>
	);
}

export default App;
