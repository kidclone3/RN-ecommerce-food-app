module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/users/me/receipts/:id',
      handler: 'order.orderDetail',
      config: {
        auth: false
      }
    },
    {
      method: 'PUT',
      path: '/users/me/receipts/:id',
      handler: 'order.cancelOrder',
      config: {
        auth: false
      }
    }
  ]
}
