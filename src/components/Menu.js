import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Scroll from './Scroll'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
            <Scroll onClick={props.onToggleMenu} type="id" element="banner">
              <button className="fit special">
                Home
              </button>
            </Scroll>
        </li>
        <li>
            <Scroll onClick={props.onToggleMenu} type="id" element="blogs" offset={-50}>
              <button className="fit special">
                Blog
              </button>
            </Scroll>
        </li>
        <li>
            <Scroll onClick={props.onToggleMenu} type="id" element="projects" offset={-50}>
              <button className="fit special">
                Projects
              </button>
            </Scroll>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
