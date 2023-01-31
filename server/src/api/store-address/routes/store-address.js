'use strict';

/**
 * store-address router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::store-address.store-address', {
  config: {
    findOne: {
      auth: false
    },
    find: {
      auth: false
    }
  }
});
