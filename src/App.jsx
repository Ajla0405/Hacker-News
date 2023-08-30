import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import SortingBar from "./components/SortingBar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<SortingBar />
			<Footer />
		</>
	);
}

export default App;
