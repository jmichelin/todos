import { connect } from 'react-redux';
//import actions used
import { setVisibilityFilter } from '../actions';
//import Link component
import Link from './Link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter, //maps the state of the todoItem aka visible or not
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter)); //responds to a click and sets the VisibilityFilter see actions/index.js
    },
  };
};

const FilterLink = connect( //Makes the Redux store available to the connect() calls
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
