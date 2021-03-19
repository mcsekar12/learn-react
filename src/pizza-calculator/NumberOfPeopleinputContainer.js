import { connect } from 'react-redux';
import Input from './Input';

const mapStateToProps = (state) => {
  return {
    value: state.numberOfPeople,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
