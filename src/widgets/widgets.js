import Accordion from './accordion/accordian';
import React, { useState } from 'react';
import Dropdown from './dropdown';
import './widgets.css';
const questions = [
  { question: 'What is React', ans: 'React is a library' },
  { question: 'What is Angular', ans: 'Angular is a JS Framework' },
];
const Widgets = () => {
  const [selected, setSelected] = useState('');

  let options = [
    { lable: 'Green', value: 'g' },
    { lable: 'Blue', value: 'b' },
    { lable: 'Red', value: 'r' },
  ];
  return (
    <div className="ui container cont__div">
      <Accordion items={questions}></Accordion>
      <Dropdown
        selected={selected}
        setSelected={setSelected}
        options={options}
      ></Dropdown>
    </div>
  );
};

export default Widgets;
