import React, { Component } from 'react'

class TodoList extends Component {
  render () {
    return (
      <div className="todo-list">
        <TodoItem {...this.props}/>
      </div>
    )
  }
}
export default TodoList
