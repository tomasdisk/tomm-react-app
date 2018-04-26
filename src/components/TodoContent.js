import React from 'react'

function TodoContent(props) {
  return (
    <div>
      <div className="todo-content">
        <div className="todo-title">{props.TodoTitle}</div>
        <div className="todo-description">{props.TodoDescription}</div>
      </div>
    </div>
  )
}
export default TodoContent
