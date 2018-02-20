// server.js
const next = require('next')
const routes = require('./routes')
const app = next({
  dir: './dist/functions/',
  dev: process.env.NODE_ENV !== 'production'
})
const handler = routes.getRequestHandler(app)

// Without express
const {createServer} = require('http')
app.prepare().then(() => {
  console.log(app);
  createServer(handler).listen(3000)
})
