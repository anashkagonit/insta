import React from 'react'
import { useNavigate } from 'react-router-dom'

import './style.scss'

const UserBadge = ({ nickName, avatarUrl, id }) => {
  const navigate = useNavigate()

  const onUserBadgeClick = () => {
    navigate(`/${id}`)
  }

  return (
    <div className="badge" onClick={onUserBadgeClick}>
      {avatarUrl ? (
        <img src={avatarUrl} alt={nickName} className="badge__avatar" />
      ) : (
        <div className="badge__userPlaceholder" />
      )}
      <span className="badge__nickName">{nickName}</span>
    </div>
  )
}

export default UserBadge
