import React, { useState, useEffect } from 'react';
var classNames = require('classnames');
const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (e) => {
    setActiveIndex(e);
  };

  const renderedItems = props.items.map((acc, index) => {
    return (
      <React.Fragment key={acc.question}>
        <div
          className="title active"
          onClick={() => {
            onTitleClick(index);
          }}
        >
          <i
            className={classNames({
              'caret down icon': activeIndex === index,
              'caret right icon': activeIndex !== index,
            })}
          ></i>
          {acc.question}
        </div>
        {activeIndex === index ? (
          <div className="content active">{acc.ans}</div>
        ) : (
          ''
        )}
      </React.Fragment>
    );
  });
  return (
    <div>
      <div className="ui styled accordion">{renderedItems}</div>
      <div>Active:{activeIndex}</div>
    </div>
  );
};

export default Accordion;
