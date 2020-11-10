import React from 'react'
import Scroll from './Scroll';

const Banner = () => {

  return (
    <section id="banner" className="major">
    <div className="inner">
      <div className="content">
        <span>
          <h1>Welcome!!</h1>
          <Scroll type="id" element="blogs" offset={-50}>
            <h3>Click here or scroll on down for blog posts 👇</h3>
          </Scroll>
       </span>
      </div>
    </div>
  </section>
  )
}

export default Banner
