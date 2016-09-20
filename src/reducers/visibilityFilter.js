const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER': //if we want to set a filter
      return action.filter; //set the filter
    default:
      return state;
  }
};

export default visibilityFilter;
