import React, { useState } from "react";
import Footer from "./components/Footer";
import NewsContainer from "./components/NewsContainer";
import "./App.css";
import "./components/SearchBar.css";

function App() {
	//const [count, setCount] = useState(0);
	return (
		<>
			<div className="header">
				<h1 className="headline">Hackernews</h1>
			</div>
			<NewsContainer />
			<Footer />
		</>
	);
}

export default App;
