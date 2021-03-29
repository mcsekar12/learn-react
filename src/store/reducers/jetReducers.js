import uniqueId from 'lodash/uniqueId';

const initialState = {
  items: [
    { value: 'Pants', id: uniqueId(), packed: false },
    { value: 'Jacket', id: uniqueId(), packed: false },
    { value: 'iPhone Charger', id: uniqueId(), packed: false },
    { value: 'MacBook', id: uniqueId(), packed: false },
    { value: 'Sleeping Pills', id: uniqueId(), packed: true },
    { value: 'Underwear', id: uniqueId(), packed: false },
    { value: 'Hat', id: uniqueId(), packed: false },
    { value: 'T-Shirts', id: uniqueId(), packed: false },
    { value: 'Belt', id: uniqueId(), packed: false },
    { value: 'Passport', id: uniqueId(), packed: true },
    { value: 'Sandwich', id: uniqueId(), packed: true },
  ],
  filter: {
    packedItemFilter: '',
    unpackedItemFilter: '',
  },
  newItemValue: '',
};

export const jetReducers = (state = initialState, action) => {
  if (action.type === 'TOGGLE_ITEM') {
    let items = state.items;
    let id = action.payload.id;
    let newItems = items.map((item) => {
      if (id === item.id) {
        item.packed = action.payload.value;
      }

      return item;
    });

    return { ...state, items: newItems };
  } else if (action.type === 'REMOVE_ITEM') {
    let items = state.items;
    let id = action.payload;
    let newItems = items.filter((item) => {
      return id !== item.id;
    });

    return { ...state, items: newItems };
  }

  if (action.type === 'ADD_NEW_ITEM') {
    return { ...state, items: [...state.items, action.item] };
  }
  if (action.type === 'UPDATE_ALL_ITEMS') {
    return { ...state, items: [...action.items] };
  }
  return state;
};
