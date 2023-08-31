export default function SingleNews({ data, item, index }) {
  return (
    <>
      <div className="news_container" key={index}>
        <a href={data[index].url} target="_blank">
          <h2>
            {index + 1} | {item.title}
          </h2>
        </a>
        <p id="inside_p">{data[index].url}</p>
        <div className="sub_infos">
          <div>
            <p>
              {index + 34} Points by <a>User</a>
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
              <a target="blank" href="http://millionpainter.de/">
                Comments
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
