import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([
    { title: 'exercise', selected: false, id: 0 },
    { title: 'exercisea', selected: false, id: 1 },
    { title: 'exerciseb', selected: false, id: 2 },
    { title: 'exercisec', selected: false, id: 3 },
  ]);
  function onTodoItemClick(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.selected = !todo.selected;
    setTodos(newTodos);
  }
  function delFnc() {
    const newTodos = todos.filter(todo => todo.selected === false);
    setTodos(newTodos);
  }
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onClickItem={onTodoItemClick} />
      ))}
      <button type='button' onClick={delFnc}>
        DEL
      </button>
    </div>
  );
}

export default TodoList;
