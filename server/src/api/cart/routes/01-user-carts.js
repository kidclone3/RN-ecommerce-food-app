module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/users/me/cart',
            handler: 'cart.findByUser',
            config: {
                auth: false,
            },
        },
    ],
};
