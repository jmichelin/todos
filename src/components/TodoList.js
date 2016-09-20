import React, { PropTypes } from 'react';
//get the Todo function to handle a  click response
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => //display all of the todoItems
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)} //event listener for todoItems
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ //set all of the defaults for the todos
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
