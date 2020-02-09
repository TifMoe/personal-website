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
                    <span class="image left"><img src={pic11} alt="Cloudflare Logo" /></span>
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
                </div>
            </section>

            <section id="two">
                <div className="inner">
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
                </div>
            </section>

            <section id="three">
                <div className="inner">
                    <h2>How I built this blog</h2>
                        <p>
                            This blog is a Gatsby react app deployed directly to Cloudflare's edge - and it only took three steps!
                        </p>
                        <ol>
                            <li class="tab">
                                <a href="#step1">Build a react app with Gatsby framework</a>
                            </li>

                            <li class="tab">
                                <a href="#step2">Get a domain name and configure Cloudflare DNS (optional)</a>
                            </li>

                            <li class="tab">
                                <a href="#step3">Configure Wrangler CLI to deploy worker</a>
                            </li>
                        </ol>

                        <h4>Assumptions</h4>
                        <p>This tutorial assumes that you already have the following:
                            <ul>
                                <li class="tab">A <a href="https://dash.cloudflare.com/login"> Cloudflare account </a> - this is free!</li>
                                <li class="tab">A <a href="https://workers.cloudflare.com/"> Workers Unlimited subscription </a> - this is just $5/mo!</li>
                                <li class="tab">Access to and familiarity with your computer's command line</li>
                                <li class="tab">Ability to install Gatsby CLI and Wrangler CLI (1.4.0 or above)</li>
                            </ul>
                        </p>
                    </div>
            </section>

            <section id="four">
                <div className="inner">
                    <h3><a name="step1">1) Build a react app with Gatsby framework</a></h3>
                        <p>
                            This section is pretty straightforward. You'll have to know a little bit about node and be comfortable in your terminal but it should be really easy to get started!
                            <ul>
                                <li class="tab">
                                    First, make sure you have the Gatsby CLI installed - I recommend looking through their <a href="https://www.gatsbyjs.org/docs/quick-start/">Quick Start documentation</a>.
                                </li>
                                <li class="tab">
                                    Next, pick your starter/theme! I found mine <a href="https://www.gatsbyjs.org/starters/?v=2">here</a> and then could just install locally by running:
                                    <code>gatsby new tiffany-moeller https://github.com/codebushi/gatsby-starter-forty</code> <br/>
                                    <i>Note: Replace "tiffany-moeller" above with whatever you want your project name to be</i>
                                </li>
                                <li class="tab">
                                    Finally, you only have to be able to run <code>gatsby develop</code> from the root of your new project to be ready to deploy.
                                    If everything goes well, you should be able to open a browser and go to <a href="http://localhost:8000">localhost:8000</a> to see your new site!
                                    Don't feel like you need to make it perfect now - you can always come back and update your site after the "hello world" version is deployed!
                                </li>
                            </ul>
                        </p>
                    <h3><a name="step2">2) Get a domain name and configure Cloudflare DNS (optional)</a></h3>
                        <div class="box">
                            <p>
                                This step is optional because you can technically deploy your static site as a <code>workers.dev</code> subdomain if you don't 
                                care about having your own domain name. The rest of this tutorial will assume that you have purchased a domain name and can switch over the nameservers to your
                                Cloudflare account. At the end, I'll share what I could have done differently to just deploy to the workers.dev subdomain like <a href="https://tiffany-moeller.tifmoe.workers.dev/">this.</a>
                            </p>
                        </div>
                        <p>
                            I noticed that <code>tiffanymoeller.com</code> was available on <a href="https://porkbun.com/"> porkbun.com </a> and wanted to use my name :)
                            The first step was to purchase my domain name from <a href="https://porkbun.com/"> porkbun.com </a> and log into my free 
                            <a href="https://dash.cloudflare.com/login"> Cloudflare account.</a>
                        </p>
                        <p>
                            In my Cloudflare dashboard, I just add to click to add a new site and then I could copy the two Cloudflare nameservers assigned to my site
                            and replace my domain's existing nameservers in porkbun with these two new Cloudflare nameservers! For more info on this part 
                            see the <a href="https://support.cloudflare.com/hc/en-us/articles/205195708"> Cloudflare Support Docs </a>
                        </p>

                    <h3><a name="step3">3) Configure Wrangler CLI to deploy worker</a></h3>
                    <p>
                        Now that you have your app, domain name and Cloudflare account ready, you can deploy with Wrangler. 
                        <a href="https://developers.cloudflare.com/workers/tooling/wrangler/">Wrangler</a> is a Cloudflare CLI built 
                        to help improve the developer experience with workers. We'll use it to automate tasks like
                        creating a new KV namespace, uploading our static assets and deploying our new site.
                    </p>
                    <p>
                        First, initialize Wrangler in the root of your project directory. 
                        This will automatically generate two things:<br />
                        <ol>
                            <li class="tab">A <code>wrangler.toml</code> configuration file</li>
                            <li class="tab">A workers-site folder in your project</li>
                        </ol>
                    </p>
                    <p>
                        Your <code>wrangler.toml</code> file might look pretty sparse initially, but we'll add configuration to tell Wrangler 
                        which build file contains our site's static assets (<code>./public</code> for my Gatsby project) and which Cloudflare account, zone and even route
                        to deploy the deploy the worker to. For example, my configuration looked like:
                        <br/>
                        <pre>{`
    name = "tiffany-moeller"
    type = "webpack"
    account_id = "< ACCOUNT ID >"
    zone_id = "< ZONE ID >"
    workers_dev = false
    route = "tiffanymoeller.com/*"

    [site]
    bucket = "./public"
    entry-point = "workers-site"
                        `}</pre>
                    </p>
                    <div class="box">
                        <p>
                            <b>Pro Tip: </b>You don't <i>need</i> to deploy to a specific zone and route if you don't have a domain name. <br/>
                            You can always deploy your site as a subdomain of <code>workers.dev</code> by:<br/> 
                            <ul>
                                <li>Make <code>workers_dev = true</code> above</li>
                                <li>Remove the <code>zone_id</code> and <code>route</code>
                            fields</li>
                            </ul>
                        </p>
                    </div>
                    <p>
                        You'll want to follow the <a href="https://developers.cloudflare.com/workers/quickstart/#configure"> Configure Quick Setup </a> steps for Wrangler to configure everything before deploying. 
                        In my case, I just needed to do the following:
                        <ol>
                            <li class="tab">Create an API Token with the "Edit Cloudflare Worker Template"</li>
                            <li class="tab">Register the API token with Wrangler by running <code>wrangler config</code></li>
                        </ol>
                    </p>
                    <p>
                        The final step is to build your site with yarn and publish with Wrangler. I added a shortcut for this in my
                        project's <code>package.json</code> file, in the scripts section:
                        <pre><code class="diff">{`
    "scripts": {
        "build": "gatsby build",
        "develop": "gatsby develop",
    +    "deploy": "yarn run build && wrangler publish",

                        `}</code></pre>
                        After this was in place, I just had to run my new command <code>yarn deploy</code> to publish this new site!
                    </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic