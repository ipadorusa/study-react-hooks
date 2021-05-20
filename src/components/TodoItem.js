import React from 'react'

function getClassName(selected) {
  if (selected) {
    return 'TodoItemContainer selected'
  } else {
    return 'TodoItemContainer'
  }
}

function TodoItem({ todo, onClickItem }) {
  return (
    <div
      className={getClassName(todo.selected)}
      onClick={() => onClickItem(todo.id)}
    >
      <p>{todo.title}</p>
    </div>
  )
}

export default TodoItem
