import api from '../../lib/api';

export const toggleItem = (payload) => {
  return {
    type: 'TOGGLE_ITEM',
    payload: payload,
  };
};

export const removeItem = (payload) => {
  return {
    type: 'REMOVE_ITEM',
    payload: payload,
  };
};

export const addNewItem = (payload) => {
  const item = {
    packed: false,
    value: payload,
  };
  return (dispach) => {
    api.add(item).then((item) => {
      dispach({
        type: 'ADD_NEW_ITEM',
        item: item,
      });
    });
  };
};

export const getAllItems = () => {
  return (dispatch) => {
    api.getAll().then((items) => {
      dispatch({
        type: 'UPDATE_ALL_ITEMS',
        items: items,
      });
    });
  };
};
export const updatePackedItemsFilter = () => {};
