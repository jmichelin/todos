import React from 'react';
//import the components you want to use
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const App = () => ( /* defines main app */
  <div>
    <AddTodo /> /* addTodo component, see components/AddTodo.js */
    <VisibleTodoList /> /* VisibleTodoList component, see components/VisibleTodoList.js */
    <Footer /> /* Footer component, see components/Footer.js */
  </div>
);

export default App;
