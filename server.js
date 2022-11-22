const express = require('express')
const parser = require('body-parser')
const services = require('./src/services')
const { authenticate } = require('./src/middlewares')
const { users, posts } = require('./src/endpoints')
const app = express()
const port = 3000

app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())

const usersHandlers = users(services)
const postsHandlers = posts(services)

app.get('/users', usersHandlers.list)
app.post('users/', usersHandlers.post)
app.get('users/:id', usersHandlers.get)
app.put('users/:id', usersHandlers.put)
app.delete('users/:id', usersHandlers.delete)

app.post('/posts', authenticate, postsHandlers.post)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app