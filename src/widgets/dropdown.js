import React, { useState, useEffect } from 'react';
var classNames = require('classnames');

const Dropdown = ({ options, selected, setSelected }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      console.log(event);
      setVisible(false);
    });
    return () => {
      document.body.removeEventListener('click');
    };
  });

  let renderedOptions = options.map((opt) => {
    return (
      <div
        className="item"
        onClick={(e) => {
          setSelected(opt.lable);
          setVisible(false);
          e.stopPropagation();
        }}
      >
        {opt.lable}
      </div>
    );
  });
  return (
    <div className="cont__div">
      <div className="ui form">
        <div className="field">
          <label htmlFor="" className="label">
            Select a Color
          </label>
          <div
            className="ui selection dropdown visible active"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected ? selected : 'Select a Color'}</div>
            <div
              className={classNames({
                'menu visible transition': visible,
                menu: !visible,
              })}
            >
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
