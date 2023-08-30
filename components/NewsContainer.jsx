import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NewsContainer() {
  const [data, setData] = useState([]);
  const url = "http://hn.algolia.com/api/v1/search?tags=front_page";
  const [showArticles, setShowArticles] = useState(true);

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
  function toggle() {
    setShowArticles((showArticles) => !showArticles);
  }

  const renderTitles = (data) => {
    return data.map((item, index) => (
      <div className="news_container" key={index}>
        <h2>
          {index + 1} | {item.title}
        </h2>
        <a href={data[index].url} target="_blank">
          {data[index].url.split("//")[1]}
        </a>
        <div className="sub_infos">
          <div>
            <p>
              {index} Points by <a>User</a>
            </p>
          </div>
          <div>
            <p>{data[index].created_at.split("T")[0]}</p>
          </div>
          <div>
            <p>Hide</p>
          </div>
          <div>
            <p>
              <a href="http://millionpainter.de/">Comments</a>
            </p>
          </div>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button onClick={toggle}>
        {showArticles ? "Hide" : "Show"} Articles
      </button>
      {showArticles && renderTitles(data)}
      <div className="news_container">
        <h2>01 | News Headline Lorem ipsum sed dolor nunquam in exemplarus</h2>
        <p>URL of original Article</p>
        <div className="sub_infos">
          <div>
            <p>
              X Points by <a>User</a>
            </p>
          </div>
          <div>
            <p>Time-Stamp</p>
          </div>
          <div>
            <p>Hide</p>
          </div>
          <div>
            <p>
              <a href="http://millionpainter.de/">Comments</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
