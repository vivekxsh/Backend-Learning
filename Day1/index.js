require('dotenv').config()

const express = require('express')
const app = express()

const githubinfo = {
  "login": "vivekxsh",
  "id": 118986548,
  "node_id": "U_kgDOBxeXNA",
  "avatar_url": "https://avatars.githubusercontent.com/u/118986548?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/vivekxsh",
  "html_url": "https://github.com/vivekxsh",
  "followers_url": "https://api.github.com/users/vivekxsh/followers",
  "following_url": "https://api.github.com/users/vivekxsh/following{/other_user}",
  "gists_url": "https://api.github.com/users/vivekxsh/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/vivekxsh/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/vivekxsh/subscriptions",
  "organizations_url": "https://api.github.com/users/vivekxsh/orgs",
  "repos_url": "https://api.github.com/users/vivekxsh/repos",
  "events_url": "https://api.github.com/users/vivekxsh/events{/privacy}",
  "received_events_url": "https://api.github.com/users/vivekxsh/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Vivek Kumar",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": true,
  "bio": null,
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 4,
  "following": 3,
  "created_at": "2022-11-24T13:25:45Z",
  "updated_at": "2025-08-05T18:58:10Z"
}


app.get('/', (req,res) => {
    res.send("Hello world!")
})

app.get('/sharma',(req,res)=>{
    res.send("<i>Sharma is here.</i>")
})

app.get('/login', (req,res)=>{
    res.send('<h1>Login bhai</h1>')
})

app.get('/github',(req,res)=>{
    res.redirect('https://github.com/vivekxsh')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})