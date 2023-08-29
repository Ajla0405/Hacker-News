import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NewsContainer() {
  return (
    <div className="news_container">
      <h2>01 | News Headline Lorem ipsum sed dolor nunquam in exemplarus</h2>
      <p>URL of original Article</p>
      <div className="sub_infos">
        <div>
          <p>
            Points by <a>User</a>
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
            <a>Comments</a>
          </p>
        </div>
      </div>
    </div>
  );
}
