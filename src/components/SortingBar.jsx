import axios from "axios";

export default function SortingBar({ data, setData }) {
	async function sortBy(url) {
		try {
			const response = await axios.get(url);
			if (response.status === 200) {
				setData(response.data.hits);
			} else {
				console.error("Request was not successful.");
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	return (
		<div className="sort-wrap">
			<ul className="sorting-bar">
				<li
					onClick={() =>
						sortBy("http://hn.algolia.com/api/v1/search_by_date?tags=story")
					}
				>
					new
				</li>
				<li
					onClick={() =>
						sortBy(
							"http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>100400"
						)
					}
				>
					past
				</li>
				<li
					onClick={() =>
						sortBy("http://hn.algolia.com/api/v1/search_by_date?tags=ask_hn")
					}
				>
					ask
				</li>
				<li
					onClick={() =>
						sortBy("http://hn.algolia.com/api/v1/search_by_date?tags=show_hn")
					}
				>
					show
				</li>
			</ul>
		</div>
	);
}
