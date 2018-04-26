import React from 'react'
import UserThumbnail from './UserThumbnail'

function TodoAuthor(props) {
  return (
    <div>
      <UserThumbnail {...props.TodoAuthorImage} />
      <div className="todo-author">{props.TodoAuthorName}</div>
    </div>
  )
}
export default TodoAuthor
