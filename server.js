const express = require('express')
const parser = require('body-parser')
const axios = require('axios')
const { authenticate } = require('./src/middlewares')
const { users, posts } = require('./src/endpoints')
const app = express()
const port = 3000

app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())

const usersHandlers = users({ axios })
const postsHandlers = posts({ axios })

app.get('/users', usersHandlers.list)
app.post('users/', usersHandlers.post)
app.get('users/:id', usersHandlers.get)
app.put('users/:id', usersHandlers.put)
app.delete('users/:id', usersHandlers.delete)

app.post('/posts', authenticate, postsHandlers.delete)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
