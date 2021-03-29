import { connect } from 'react-redux';

import { updatePackedItemsFilter } from '../../store/actions/jetActions';
import Filter from '../Filter';

const mapStateToProps = (store) => {
  return {
    value: store.jet.filter.unpackedItemsFilter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateFilter(value) {
    dispatch(updatePackedItemsFilter(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
