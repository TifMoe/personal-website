import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerBlog from '../components/BannerBlog'

import pic08 from '../assets/images/pic08.jpg'

const Blog = (props) => (
    <Layout>
        <Helmet>
            <title>Technical Blog</title>
            <meta name="description" content="Tiffany's Technical Blog" />
        </Helmet>

        <BannerBlog />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Why Tutorials?</h2>
                    </header>
                    <p>Apparently I forget most things as soon as I finish doing them and have found it very helpful in my day-job to record how I do certain things as I learn them.
                        So, this is the space where I'll keep track of basic how-to's which will inevitably be a helpful resource for myself, but also hopefully can help others in my position as well!
                    </p>
                    <p>I'm just getting this started, so it's sparse now - but be on the lookout for tutorials regarding:
                        <ul>
                            <li>Deploying serverless static websites with Cloudflare Workers</li>
                            <li>Setting up github actions for continuous deployment of serverless sites</li>
                            <li>Building and deploying a golang API in Kubernetes cluster</li>
                            <li>Configuring your own Airflow instance from the ground up</li>
                        </ul>
                    </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/blog/article/serverless/" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>How I built this serverless website</h3>
                            </header>
                            <p>Gatsby static site, deployed without an origin server using Cloudflare Workers and KV Storage. The whole process was remarkably apparoachable, fast, fun and cheap!</p>
                            <ul className="actions">
                                <li><Link to="/blog/article/serverless/" className="button">Read more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Blog