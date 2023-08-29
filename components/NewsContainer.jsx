import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NewsContainer() {
  const [data, setData] = useState([]);
  const url = "http://hn.algolia.com/api/v1/search?tags=front_page";

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data.hits);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  /*  console.log(data.hits[1].title); */
  /*   console.log("hello", data[0].url) */
  /*  {data.map((data, index) => {return <div> data.hits[index].title} </div> )}*/

  const renderTitles = (data) => {
    return data.map((item, index) => (
      <div className="news_container" key={index}>
        <h2>
          {index + 1} | {item.title}
        </h2>
        <a href="{data[index].url}">{data[index].url}</a>
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
    ));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {renderTitles(data)}
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
