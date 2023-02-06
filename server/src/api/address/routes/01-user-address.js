module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/users/me/addresses',
      handler: 'address.findByUser',
      config: {
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/users/me/addresses/:id',
      handler: 'address.findOne',
      config: {
        auth: false
      }
    },
    {
      method: 'POST',
      path: '/users/me/addresses',
      handler: 'address.create',
      config: {
        auth: false
      }
    },
    {
      method: 'PUT',
      path: '/users/me/addresses/:id',
      handler: 'address.update',
      config: {
        auth: false
      }
    },
    {
      method: 'DELETE',
      path: '/users/me/addresses/:id',
      handler: 'address.delete',
      config: {
        auth: false
      }
    }]
}
