import React from 'react'

import './style.scss'

const Comment = ({ nickName, text }) => {
  return (
    <div className="comment">
      <span className="comment__name">{nickName} :</span>
      <span className="comment__text">{text}</span>
    </div>
  )
}

export default Comment
