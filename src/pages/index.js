import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import profile from '../assets/images/profile.jpeg'
import pic02 from '../assets/images/markus-spiske-unsplash.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Tiffany Moeller"
                    meta={[
                        { name: 'description', content: 'Personal Website' },
                        { name: 'keywords', content: 'tech' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${profile})`}}>
                            <header className="major">
                                <h3>About Me</h3>
                                <p>Coming soon...</p>
                            </header>
                            <Link to="/blog" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Technical Blog</h3>
                                <p>Tutorials, resources, and lessons learned from my personal projects</p>
                            </header>
                            <Link to="/blog" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner dark">
                            <header className="major dark">
                                <h2 className="dark">Projects</h2>
                            </header>
                            <p>Eventually, I'll pop a list of personal projects here.</p>
                            <ul className="actions">
                                <li><Link to="/blog" className="button dark">Check it out!</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex