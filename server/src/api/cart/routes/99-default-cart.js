'use strict';

/**
 * cart router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cart.cart', {
    config: {
        create: {
            auth: false,
        },
        update: {
            auth: false,
        },
        delete: {
            auth: false,
        },
        findOne: {
            auth: false,
        },
    },
});
