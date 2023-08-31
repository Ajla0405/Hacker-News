import axios from "axios";

export default function SortingBar({ newsArr }) {
	 function sortBy(url) {
		    axios
			.get(url)
			.then((res) => {
				newsArr.push(res.data)
			})
			
		.catch(err => {
			console.log(err)
		})

	}

	console.log(sortBy("http://hn.algolia.com/api/v1/search_by_date?"))

	return (
		<>
			<div className="sort-wrap">
				<ul className="sorting-bar">
					<li>
						<span
							onClick={sortBy("http://hn.algolia.com/api/v1/search_by_date?")}
						>
							new
						</span>
					</li>
					<li>
						<span
							onClick={sortBy("http://hn.algolia.com/api/v1/search_by_date?numericFilters=created_at_i<86400")}
						>
							past
						</span>
					</li>
					<li>
						<span
							onClick={sortBy("http://hn.algolia.com/api/v1/search_by_date?")}
						>
							comments
						</span>
					</li>
					<li>
						<span
							onClick={sortBy("http://hn.algolia.com/api/v1/search_by_date?")}
						>
							ask
						</span>
					</li>
					<li>
						<span
							onClick={sortBy("http://hn.algolia.com/api/v1/search_by_date?")}
						>
							show
						</span>
					</li>
					<li>
						<span
							onClick={sortBy("http://hn.algolia.com/api/v1/search_by_date?")}
						>
							jobs
						</span>
					</li>
				</ul>
			</div>
		</>
	);
}