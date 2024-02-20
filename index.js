require('dotenv').config()


const express = require('express')

const app = express()
const port = 3000

const githubData={
  "login": "snehapatel2712",
  "id": 112930775,
  "node_id": "U_kgDOBrsv1w",
  "avatar_url": "https://avatars.githubusercontent.com/u/112930775?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/snehapatel2712",
  "html_url": "https://github.com/snehapatel2712",
  "followers_url": "https://api.github.com/users/snehapatel2712/followers",
  "following_url": "https://api.github.com/users/snehapatel2712/following{/other_user}",
  "gists_url": "https://api.github.com/users/snehapatel2712/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/snehapatel2712/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/snehapatel2712/subscriptions",
  "organizations_url": "https://api.github.com/users/snehapatel2712/orgs",
  "repos_url": "https://api.github.com/users/snehapatel2712/repos",
  "events_url": "https://api.github.com/users/snehapatel2712/events{/privacy}",
  "received_events_url": "https://api.github.com/users/snehapatel2712/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2022-09-06T07:14:17Z",
  "updated_at": "2024-02-20T15:03:42Z"
}
app.get('/login',(req,res) => {
  res.send('<h1>Please login at my website</h1>')
})

app.get('/github',(req,res) => {
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})