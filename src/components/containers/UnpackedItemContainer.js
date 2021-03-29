import { connect } from 'react-redux';

import { toggleItem, removeItem } from '../../store/actions/jetActions';
import Items from '../Items';

const mapStateToProps = (store) => {
  return {
    items: store.jet.items.filter(
      (item) =>
        !item.packed &&
        (item.value.includes(store.jet.filter.unpackedItemsFilter) ||
          !store.jet.filter.unpackedItemsFilter)
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
