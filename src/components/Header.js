import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default function Header({ onToggleMenu }) {
  return (
    <header id="header">
    <Link to="/" className="logo">
        <strong>Tiffany</strong> <span>Moeller</span> 
    </Link>
    <nav>
      <a className="menu-link" onClick={onToggleMenu} href="javascript:;">
        Menu
      </a>
    </nav>
  </header>
  )
}
