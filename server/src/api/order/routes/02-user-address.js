module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/users/me/address',
      handler: 'order.getDefaultAddress',
      config: {
        auth: false
      }
    },
    {
      method: 'PUT',
      path: '/users/me/address',
      handler: 'order.findOne',
      config: {
        auth: false
      }
    }
  ]
}
