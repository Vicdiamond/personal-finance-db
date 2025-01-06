const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json') // Update this path if needed
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 5000

server.use(middlewares)
server.use(router)

server.listen(port)
