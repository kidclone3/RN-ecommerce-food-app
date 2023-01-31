'use strict';

/**
 * address router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::address.address',
  {
    config: {
      create: {
        auth: false
      },
      update: {
        auth: false
      },
      delete: {
        auth: false
      },
      findOne: {
        auth: false
      }
    }
  });
