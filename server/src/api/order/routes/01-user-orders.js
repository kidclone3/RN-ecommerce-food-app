module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/users/me/receipts',
            handler: 'order.findByUser',
            config: {
                auth: false,
            },
        },
        {
            method: 'POST',
            path: '/users/me/receipts',
            handler: 'order.createOrderWithCartItem',
            config: {
                auth: false,
            },
        },
    ],
};
