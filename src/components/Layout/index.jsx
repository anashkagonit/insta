import React from 'react'
import Navbar from '../Navbar'

import './style.scss'

const Layout = ({ nickName, avatarUrl, id, children }) => {
  return (
    <div className="cnLayout__root">
      <Navbar nickName={nickName} avatarUrl={avatarUrl} id={id} />
      <div className="cnLayout__body">{children}</div>
    </div>
  )
}

export default Layout
