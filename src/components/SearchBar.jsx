import React, { useState } from "react";
import axios from "axios";
import "./SearchBar.css";

const SearchBar = ({ data, setData }) => {
	const [searchQuery, setSearchQuery] = useState("");

	async function handleSearch(search) {
		try {
			const res = await axios.get(
				`http://hn.algolia.com/api/v1/search?query=${search}`
			);
			if (res.status === 200) {
				setData(res.data.hits);
			} else {
				console.log("Request was not successful.");
			}
		} catch (err) {
			console.log("Error fetching data:", err);
		}
	}

	return (
		<div className="search-bar">
			<form onSubmit={(e) => {
				e.preventDefault();
				handleSearch(searchQuery);
			}}>
				<input
					className="search-input"
					type="text"
					placeholder="Search..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<button className="search-button">Search</button>
			</form>
		</div>
	);
};

export default SearchBar;
