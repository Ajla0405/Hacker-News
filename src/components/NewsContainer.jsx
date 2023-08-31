import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleNews from "./SingleNews.jsx";
import SortingBar from "./SortingBar.jsx";
import SearchBar from "./SearchBar.jsx";

export default function NewsContainer() {
	const [data, setData] = useState([]);
	//ayla
	const [showArticles, setShowArticles] = useState(true);

	const url = "http://hn.algolia.com/api/v1/search?tags=front_page";

	const getData = async () => {
		try {
			const response = await axios.get(url);
			setData(response.data.hits);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	/*  console.log("hello", data) */
	/*  console.log(data.hits[1].title); */
	/*  console.log("hello", data[0].url) */
	/*  {data.map((data, index) => {return <div> data.hits[index].title} </div> )}*/
	/* {data[index].url.split("/")[2]} */

	// function toggle() {
	// 	setShowArticles((showArticles) => !showArticles);
	// }
	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<SearchBar data={data} setData={setData} />
			<SortingBar data={data} setData={setData} />
			{/* <button onClick={toggle}>{showArticles ? "Hide" : "Show"} News</button> */}
			{data.length ? (
				data.map((item, index) => (
					<SingleNews
						data={data}
						item={item}
						index={index}
						key={item.objectID}
					/>
				))
			) : (
				console.log("hier kommt dann der Spinner rein")
			)}
		</>
	);
}
