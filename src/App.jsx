import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NewsContainer from "../components/NewsContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NewsContainer />
      </div>
    </>
  );
}

export default App;
