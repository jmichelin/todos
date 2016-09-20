let nextTodoId = 0; //set default todoId
export const addTodo = (text) => { //see reducers/todos.js line 3
  return {
    type: 'ADD_TODO',
    id: (nextTodoId++).toString(),
    text,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};
