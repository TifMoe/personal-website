---
path: "/blog/software-engineer-by-way-of-data-science"
date: 2020-02-01
title: "Forging a career in analytics, data science and software engineering"
tags: ["career", "resources"]
---

I became a software engineer by way of data science and analytics - managing to leverage myself into a tech career even though I never studied computer science in school! There are tons of excellent resources I found helpful along the way at different stages of my journey and I'm often asked for recommendations from others breaking into the field. Here's what I found helpful at each stage:

1. [**Data Analytics** (SQL, Tableau)](#step1)
2. [**Data Science** (Python, R, machine learning)](#step2)
3. [**Software Engineering** (computer science books and courses)](#step3)

---
## Data Analytics <a name=step1></a>

The year was 2015 and I was working as a customer service rep for a tech company. I had just found out that the only business analyst at the company at that time hadn't studied anything mathy in school either - she had a degree in Spanish! I thought that if she could teach herself enough to transition to an analyst role - then I could too!

### How to data
If you're just starting out as I was then you might not have much experience with different types of data storage - but valuable data can be as easy to access as opening a CSV! Depending on the type of data you need to access you may need to acquire different skills to access the data. 

For example, if you're starting small then you'll probably be fine working with spreadsheets as your primary data source but if you want to access data via an API then you may need to know enough python or another scripting language to query the API for data (which will typically be returned in a [json](https://en.wikipedia.org/wiki/JSON) format). In my case, I needed to access data that lived in my company's relational database which meant that I needed to learn to ask for the data I wanted in [SQL (Structured Query Language)](https://en.wikipedia.org/wiki/SQL)

### Steps I took to become a data analyst
Everyone's data journey is different but this is what the path looked like for me to start driving value at my company by making data insights accessible to business stakeholders through visualization. In my experience, most companies expect data analysts to be proficient in SQL but if you're starting small and only working with spreadsheets then feel free to skip down to #3 below!

#### 1) Learn about relational databases
As I set off to teach myself SQL, the first piece of advice given to me was to build a really solid understanding of relational databases first. So I audited an online Stanford course called [Intro to Databases](https://lagunita.stanford.edu/courses/Engineering/db/2014_1/about). 

#### 2) Learn SQL and start using it! 
Next I taught myself basic SQL syntax using free online resources like [sqlteaching.com](https://www.sqlteaching.com/), affordable online courses and a [General Assembly workshop](https://generalassemb.ly/blog/sql-using-data-science-to-boost-business-and-increase-efficiency/). Some SQL course online you might find interesting include:

- [PluralSight Try SQL](https://www.pluralsight.com/courses/code-school-try-sql)
- [DataCamp Intro to SQL](https://www.datacamp.com/courses/introduction-to-sql)
- [HackerRank SQL challenges (free practice)](https://www.hackerrank.com/domains/sql)
- [SQL Zoo (free practice)](https://sqlzoo.net/)

While the resouces above are helpful in practicing the syntax, I probably wouldn't have stuck with it if I had not started using SQL regularly at work to answer practical questions. If you don't have access to some sort of SQL database already, it's pretty easy to [set up your own Postgres database on your mac](https://www.codementor.io/@engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb). What would you put in this database you ask? Well, my friend - read on!

#### 3) Work on an actual data project
I always caution against spending too much time in the online courses and toy example tutorials but try to move on pretty quickly to actual projects that you are interested in. There is an increasingly large set of public data sets that contain some super interesting stuff! So, **start with a question that you're interested in**
and see if you can get your hands on relevant data! Some public data sources I've found helpful include:

- [Google's Dataset Search Engine](https://datasetsearch.research.google.com/)
- Check if your city has a public data portal like [Chicago](https://data.cityofchicago.org/) (where I lived at the time)
- [Data World](https://data.world/)
- [Awesome list of public datasets on someone's github](https://github.com/awesomedata/awesome-public-datasets)

#### 4) Visualize the results of your analysis and share with the world!

In most contexts, raw data or results of a fancy SQL query are not actionable or valuable in an of themselves. The superpower of an analyst is being able to take data and transform it to something that humans can easily understand. It's an art - storytelling in science - where you're able to paint a picture of the way the world is and empower people with relevant and actionable information.

My tool of choice for data visualization is [Tableau](https://www.tableau.com/learn/training/20201), a visual drag-and-drop interface for composing interactive dashboards - often build off a SQL query when connected to a database backend. Many companies use Tableau, but you can also **use it for free** in personal projects using [Tableau Public](https://public.tableau.com/en-us/s/).

For example, when my husband and I learned we may be moving to London, I wanted to get my arms around the different boroughs and rental prices so I found some open data on [data.london.gov.uk](https://data.london.gov.uk/) and made a [dashboard to explore London rental prices and crime data side by side](https://public.tableau.com/profile/tiffany.moeller#!/vizhome/2017LondonRentalPrices/PricesandCrimeRates)

<div class="dark box">
<h4>Design with your audience in mind</h4>
There are two broad categories of data visualizations - expository and exploratory<br/><br/>

<b>Exploratory:</b> This is helpful when you are just getting to know your data or you want to empower consumers of your viz to explore the data themselves. Typically dashboards which enable interactive filtering/grouping are a great way to let users ask their own questions of the data and dive in deeper to understand different segmentations of the data. All three of the dashboards I have up on Tableau Public are exploratory if you'd like to see a couple of [examples](https://public.tableau.com/profile/tiffany.moeller#!/)<br/>

<b>Expository:</b> This is when you have a specific insight or narrative you want to share with your audience using a typically static data visualization. The best expository data visualizations will make it very extremely easy for the reader to quickly understand the central message of the visualization. Tableau does a social data viz competition every Monday and the winners are usually great examples of expository data visualization - check out the "Makeover Monday" gallery [here](https://www.makeovermonday.co.uk/gallery/).
</div>

As a note, some people prefer to use [Microsoft Power BI](https://powerbi.microsoft.com/en-us/) as an alternative to Tableau.

## Data Science <a name=step2></a>
Coming soon! 

## Software Engineering <a name=step3></a>
Coming soon! 