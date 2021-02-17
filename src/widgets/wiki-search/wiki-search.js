import React, { useState, useEffect } from 'react';

import axios from 'axios';

const WikiSearch = () => {
  const [term, setTerm] = useState('Programming');
  const [result, setResult] = useState([]);

  const search = () => {
    axios
      .get(`https://en.wikipedia.org/w/api.php`, {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      })
      .then((res) => {
        setResult(res.data.query.search);
      });
  };
  useEffect(() => {
    let timeoutId;
    if (term && !result.length) {
      search();
    } else {
      timeoutId = setTimeout(() => {
        search();
      }, 500);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  let searchResults = result.map((item) => {
    return (
      <div className="item" key={item.pageid}>
        <a
          target="_blank"
          className="header"
          href={`https://en.wikipedia.org?curid=${item.pageid}`}
        >
          {item.title}
        </a>
        <div className="description">
          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />

          <div>Found: {result.length} Results</div>
          <div className="ui list">{searchResults}</div>
        </div>
      </div>
    </div>
  );
};

export default WikiSearch;
