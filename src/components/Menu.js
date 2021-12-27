import React from 'react'
import { Link } from 'gatsby'
import Scroll from './Scroll'

export default function Menu({onToggleMenu, onHomePage}) {

  const navigateTo = (element, offset) => {
    const button = <button className="fit special">
      {element == 'banner' ? 'home' : element}
    </button>

    if (onHomePage) {
      return (
        <Scroll onClick={onToggleMenu} type="id" element={element} offset={offset}>
          {button}
        </Scroll>
      )
    }

    return (
      <Link to={'/#' + element}>
          {button}
      </Link>
    )
  }

  return (
    <nav id="menu">
      <div className="inner">
        <ul className="links">
          <li>
            {navigateTo('banner', 0)}
          </li>
          <li>
            {navigateTo('blogs', -50)}
          </li>
          <li>
            {navigateTo('projects', -50)}
          </li>
        </ul>
      </div>
      <a className="close" onClick={onToggleMenu} href="javascript:;">
        Close
      </a>
    </nav>
  )
}
