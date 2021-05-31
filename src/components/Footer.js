import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://github.com/TifMoe" className="icon alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tiffanymoeller1/"
            className="icon alt fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Made with ❤️ by Tiffany Moeller</li>
        <li>
          Built using <a href="https://www.gatsbyjs.org/"> Gatsby</a>
        </li>
        <li>
          Deployed using{' '}
          <a href="https://workers.cloudflare.com/">Cloudflare Workers</a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
