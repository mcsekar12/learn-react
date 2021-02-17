import React, { useState } from 'react';
import './recursive.css';
const Tree = ({ items, selectedOptions, onChange }) => {
  const handleCheckboxClicked = (selectedId) => {
    if (selectedOptions[selectedId]) {
      delete selectedOptions[selectedId];
    } else {
      selectedOptions[selectedId] = {};
    }

    onChange(selectedOptions);
  };

  const handleSubOptionClicked = (selectedId, subSelection) => {
    selectedOptions[selectedId] = subSelection;

    onChange(selectedOptions);
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div>
            <input
              type="checkbox"
              value={selectedOptions[item.name]}
              onChange={() => {
                handleCheckboxClicked(item.name);
              }}
            />
            {item.name}

            {selectedOptions[item.name] && (
              <div className="sub__tree">
                {item.subOptions && item.subOptions.length > 0 && (
                  <Tree
                    items={item.subOptions}
                    selectedOptions={selectedOptions[item.name]}
                    onChange={() => {
                      handleSubOptionClicked(
                        item.name,
                        selectedOptions[item.name]
                      );
                    }}
                  ></Tree>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Tree;
