import React from 'react'
import UserBadge from '../UserBadge/UserBadge'

import './style.scss'

const Navbar = ({ nickName, avatarUrl, id }) => {
  return (
    <div className="navbar__root">
      <div className="navbar__wrapper">
        <span>SOCIAL</span>
        <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
      </div>
    </div>
  )
}

export default Navbar
