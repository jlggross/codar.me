const users = require('./users/controller')

const routes = {
  '/users': {
    GET: users.list,
    POST: users.save,
  },
}

module.exports = routes
