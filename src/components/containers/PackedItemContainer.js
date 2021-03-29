import { connect } from 'react-redux';

import { toggleItem, removeItem } from '../../store/actions/jetActions';
import Items from '../Items';

const mapStateToProps = (store) => {
  debugger;
  return {
    items: store.jet.items.filter(
      (item) =>
        item.packed &&
        (item.value.includes(store.jet.filter.packedItemsFilter) ||
          !store.jet.filter.packedItemsFilter)
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateItem(id, value) {
    dispatch(toggleItem({ id: id, value: value }));
  },
  removeItem(id) {
    dispatch(removeItem(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
