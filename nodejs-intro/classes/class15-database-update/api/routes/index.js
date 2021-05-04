const users = require('./users/controller')

const routes = {
  '/users': {
    GET: users.list,
    POST: users.save,
    PUT: users.update,
  },
}

module.exports = routes
