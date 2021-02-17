import React, { useState } from 'react';
import Tree from './tree';
const toppingOptions = [
  {
    name: 'pepporoni',
    id: 'peoproni-ui',
    subOptions: [
      {
        name: 'Spicy',
        id: 'spicy-ui',
        subOptions: [],
      },
      {
        name: 'Regular',
        id: 'regular-ui',
        subOptions: [],
      },
    ],
  },
  {
    name: 'Chicken',
    id: 'chicken-ui',
    subOptions: [
      {
        name: 'Buffalo',
        id: 'buffalo-ui',
        subOptions: [
          {
            name: 'Mild',
            id: 'mild-ui',
            subOptions: [],
          },
          {
            name: 'Hot',
            id: 'hot-ui',
            subOptions: [
              {
                name: 'Jalapeno',
                id: 'jalapeno-ui',
                subOptions: [],
              },
              {
                name: 'Cayenne',
                id: 'cayenne-ui',
                subOptions: [],
              },
            ],
          },
        ],
      },
      {
        name: 'BBQ',
        id: 'bbq-ui',
        subOptions: [],
      },
    ],
  },
];
const Recursive = (props) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  return (
    <div>
      {JSON.stringify(selectedOptions)}
      <Tree
        items={toppingOptions}
        selectedOptions={selectedOptions}
        onChange={(e) => {
          setSelectedOptions({ ...e });
        }}
      ></Tree>{' '}
    </div>
  );
};

export default Recursive;
