import React, { useState } from 'react'
import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'

export default function BlogLayout({ children }) {
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
      <div className="blog-wrapper" id="wrapper">
          <Header onToggleMenu={handleToggleMenu} />
          <div className="blog">
            {children}
            <a href="/#blogs" className="button small dark back">
              &larr; Back to Blogs!
            </a>
          </div>
          <Footer />
        </div>
        <Menu onToggleMenu={handleToggleMenu} onHomePage={false}/>
      </div>
  )
}