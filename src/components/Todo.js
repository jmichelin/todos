import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => ( //set style for completed todoList items
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

Todo.propTypes = { //set the available props for the ToDoItem
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
