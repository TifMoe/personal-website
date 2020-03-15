---
path: "/blog/automate-deploys-with-github-actions"
date: 2020-03-01
title: "Github actions to build automated deployments to production and staging"
tags: ["github actions", "wrangler", "workers", "devops"]
description: "Build automated deployment pipelines for your workers site with github actions! This tutorial shows how I configured the deployment pipeline for a staging and production version of my workers site."
---
If you haven't read my post on how I built this serverless blog running entirely on Cloudflare Workers, check it out [here](/blog/static-sites-using-workers). 

The source code for this blog lives [in github](https://github.com/TifMoe/personal-website) and I wanted to configure a some automated deployment pipelines so that when I push any new code on a branch beginning with `staging/` it will automatically build and deploy the code to a staging environment and when I merge a PR into `master/` it will automatically build and deploy the new version of tiffanymoeller.com you're reading now! 

Leveraging [github actions](https://help.github.com/en/actions), I was able to build out two new continuous deployment pipelines in three steps:

1. [Make a staging subdomain for my website](#step1)
2. [Add new environments to my wrangler.toml configuration](#step2)
3. [Publish two new github actions](#step3)

## Make a staging subdomain <a name=step2></a>
<div class="dark box">
This assumes that you have your worker deployed to your own domain on Cloudflare and are not just using the workers.dev domain. 
</div>

To create a new staging subdomain, all you need to do is add a new CNAME record in your Cloudflare DNS settings to point `staging` to your root domain! This is what it looked like when I configured mine:

![DNS CNAME Setup](./images/dns-cname-setup.png)

Please note that it can sometimes take a few hours for new DNS records to propagate so don't worry if you can't immediately see your site at the staging subdomain you just added! 

