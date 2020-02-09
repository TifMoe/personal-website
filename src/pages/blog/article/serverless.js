import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'

import pic11 from '../../../assets/images/cloudflare-logo.png'
import pic12 from '../../../assets/images/serverless-img.png'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Article: Serverless Sites</title>
            <meta 
            name="description" 
            content="Tiffany's Technical Blog" 
            charset="UTF-8"/>
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Static Sites + Serverless = <span role="img">😍</span>
                        <meta charset="UTF-8"/>
                        </h1>
                    </header>
                    <span className="image left"><img src={pic11} alt="Cloudflare Logo" /></span>
                    <p>
                        Full disclosure, I currently work at <a href="https://www.cloudflare.com/"> Cloudflare </a>
                        as an engineer building tools for their Trust and Safety team. 
                        But Cloudflare is a company with loads of different products from core services like our CDN (content delivery network), firewall and ddos mitigation to
                        new products like Cloudflare Workers and Workers KV Storage. 
                    </p>
                    <p>
                        Up until last weekend, I am sad to say that I had not done anything with
                        Cloudflare workers... but that all changed when I discovered how quick and easy it is to deploy static, serverless sites using Cloudflare Workers and KV.
                        It's worth noting that deployment of static sites is not the only use case for workers, check out their
                        <a href="https://developers.cloudflare.com/workers/"> developer docs </a> for other cool use-cases like
                        localization, bulk redirects, and even applications like slack bots!
                    </p>

                    <h2>What is Cloudflare Workers and KV?</h2>
                    <span className="image right"><img src={pic12} alt="Cloudflare Worker; Credit:https://www.cloudflare.com/learning/serverless/serverless-javascript/" /></span>
                    <p>
                        Cloudflare Workers are basically just javascript functions which run at the edge. When I say <b>"edge"</b>, 
                        I just mean the collection of over 200 Cloudflare data centers across the world which comprise our global network.
                        Workers KV storage is a light key-value cloud storage solution which lets you store static assets in the cloud which
                        are then accessible to workers running at the "edge".
                    </p>
                    <p>
                        This means that if you have a static site that you want to run super fast, you don't need to stand up your own origin server somewhere
                        to host your content - you can just deploy it using Cloudflare Workers + KV and make your worker respond to requests from the edge directly.
                    </p>

                    <h2>How I built this blog</h2>
                    <p>
                        This blog is a Gatsby react app deployed directly to Cloudflare's edge - and it only took five steps. Most of this, I got from a co-worker's 
                        <a href="https://ianspivey.com/static-site-with-workers/"> really excellent blog post </a> on the same topic.
                        <ul>
                            <li>Build a react app with Gatsby framework</li>
                            <li>Create Cloudflare Workers KV namespace</li>
                            <li>Write a script to deploy the static assets to Workers KV</li>
                            <li>Write a worker to intercept requests and serve static files</li>
                            <li>Build and deploy worker</li>
                        </ul> 
                    </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic