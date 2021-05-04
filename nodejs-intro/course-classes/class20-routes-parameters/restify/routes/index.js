const users = require('./users/controller')

const routes = [
  {
    path: '/users',
    method: 'get',
    handler: users.list,
  },
  {
    path: '/users',
    method: 'post',
    handler: users.save,
  },
  {
    path: '/users/:id',
    method: 'put',
    handler: users.update,
  },
  {
    path: '/users/:id',
    method: 'get',
    handler: users.remove,
  },
]

module.exports = routes
