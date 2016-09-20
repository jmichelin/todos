const todo = (state, action) => { //the action object gets passed in from actions/index.js line 4,5,6
  switch (action.type) { //set in actions/index.js as the type value in the return statements
    case 'ADD_TODO':
      return {
        id: action.id, //set on line 5 in actions/index.js
        text: action.text, //set on line 6 in actions/index.js
        completed: false, //sets default completed state
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state; //return the state for the toggled todoItem
      }
      return {
        ...state,
        completed: !state.completed, //toggle the value between completed/open along with the whole state
      };
    default:
      return state; //if nothing just pass the state
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action), //fire off above function adding in a todoItem
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action) //fire off above function with t as the state of the todoItem
      );
    default:
      return state;
  }
};

export default todos;
