import React from 'react'

function UserThumbnail (props) {
  return (
    <div className="user-thumbnail">
      <img src={props.Image} alt={props.Alt}/>
    </div>
  )
}
export default UserThumbnail
