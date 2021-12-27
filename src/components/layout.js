import React, { useState } from 'react'
import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false)
  
  const handleToggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div
      className={`body ${
        showMenu ? 'is-menu-visible' : ''
      }`}
    >
      <div id="wrapper">
        <Header onToggleMenu={handleToggleMenu} />
        {children}
        <Footer />
      </div>
      <Menu onToggleMenu={handleToggleMenu} onHomePage={true}/>
    </div>
  )
}