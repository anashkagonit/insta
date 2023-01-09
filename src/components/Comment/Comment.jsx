import React from 'react'

import './style.scss'

const Comment = ({ nickname, text }) => {
  return (
    <div className="comment">
      <span className="comment__name">{nickname} :</span>
      <span className="comment__text">{text}</span>
    </div>
  )
}

export default Comment
