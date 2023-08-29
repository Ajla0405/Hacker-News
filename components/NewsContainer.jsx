import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NewsContainer() {
  const [data, setData] = useState([]);
  const url = "http://hn.algolia.com/api/v1/search?tags=front_page";

  const getData = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setData(data);
      });
  };

  console.log(data.hits[1].title);
  /*  {data.map((data, index) => {return <div> data.hits[index].title} </div> )}*/
  /*   {data.map((data, index) => (
    <div> data.hits[index].title </div>
  ))}; */

  useEffect(() => {
    getData();
  }, []);

  return (
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
  );
}
