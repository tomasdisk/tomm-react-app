import React, { Component } from 'react'
import TodoContent from './TodoContent'
import TodoAuthor from './TodoAuthor'

class TodoItem extends Component {
  render () {
    return (
      <div className="todo-item">
        <TodoContent {...this.props.TodoContent}/>
        <TodoAuthor {...this.props.TodoAuthor}/>
      </div>
    )
  }
}
export default TodoItem
