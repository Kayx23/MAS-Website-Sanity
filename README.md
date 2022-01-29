# MAS Website Sanity Configuration
MAS Website [sanity studio configuration](https://www.sanity.io/docs/sanity-studio-configuration).

## How to Start
Start studio locally:
```
sanity start
```

Deploy studio config:
```
sanity deploy
```

## Query
Query for `Meet The Team` page: 
```
*[_type=="team"]{name, role, bio, headshot, "headshot": headshot.asset->url, order} | order(order asc)
```
* `| order(order asc)` reflects the doc order
