import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  render() {
    const todos = this.props.todos
    const listItems = todos.map(todo => (
      <li key={todo.TodoID}>
        <TodoItem {...todo} />
      </li>
    ))
    return (
      <div className="todo-list">
        <ul>{listItems}</ul>
      </div>
    )
  }
}
export default TodoList
