'use strict';

/**
 * address controller
 */

const {createCoreController} = require('@strapi/strapi').factories;
const createError = require('http-errors');
module.exports = createCoreController('api::address.address', ({strapi}) => ({
    findByUser: async (ctx) => {
      if (!ctx?.request.header.authorization)
        throw createError(403, "Permission denied")
      const user = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
      const page = ctx?.query?.pagination?.start ?? 1;
      const limit = ctx?.query?.pagination?.limit ?? 25
      const filter = ctx?.query?.filters ?? {};
      const data = await strapi.db.query('api::address.address').findWithCount({
        where: {user: user.id, ...filter},
        offset: Math.abs(page - 1) * limit,
        limit: limit
      });
      return {
        data: data[0],
        total: data[1],
        page: page,
        limit: limit,
        next: data[1] > page * limit,
        previous: page > 1,
        last: Math.ceil(data[1] / parseInt(limit))
      }
    },
    findOne: async (ctx) => {
      if (!ctx?.request.header.authorization)
        throw createError(403, "Permission denied")
      const user = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
      const address = await strapi.db.query('api::address.address').findOne({
        where: {user: user.id, id: ctx.params.id},
      });
      if (!address) {
        throw createError(404, "Address not found")
      }
      return address
    },
    create: async (ctx) => {
      if (!ctx?.request.header.authorization)
        throw createError(403, "Permission denied")
      const user = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
      const {name, phone, address} = ctx.request.body;
      if (!name || !phone || !address) {
        throw createError(400, 'Please provide all fields');
      }
      return strapi.db.query('api::address.address').create({
        data: {
          user: user.id,
          name: name,
          phone: phone,
          address: address,
        },
        populate: {user: true}
      });
    },
    update: async (ctx) => {
      if (!ctx?.request.header.authorization)
        throw createError(403, "Permission denied")
      const user = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
      const {name, phone, address} = ctx.request.body;
      if (!name || !phone || !address) {
        throw createError(400, 'Please provide all fields');
      }
      return strapi.db.query('api::address.address').update({
        where: {id: ctx.params.id},
        data: {
          name: name,
          phone: phone,
          address: address,
        },
        populate: {user: true}
      });
    },
    delete: async (ctx) => {
      if (!ctx?.request.header.authorization)
        throw createError(403, "Permission denied")
      const user = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
      const address = await strapi.db.query('api::address.address').findOne({
        where: {user: user.id, id: ctx.params.id},
      });
      if (!address) {
        throw createError(404, "Address not found")
      }
      return strapi.db.query('api::address.address').delete({
        where: {id: ctx.params.id},
        populate: {user: true}
      });
    },
  calculateShipping: async (ctx) => {
    if (!ctx?.request.header.authorization)
      throw createError(403, "Permission denied")
    const user = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
    if (!Array.isArray(ctx.request.body.item) || !ctx.request.body.address || !ctx.request.body.shop_id) {
      throw createError(400,"Missing required fields")
    }
    const {item, address, shop_id} = ctx.request.body;
    const shop = await strapi.db.query('api::shop.shop').findOne({
      where: {id: shop_id},
    });
    if (!shop) {
      throw createError(404, "Shop not found")
    }
    return strapi.services['address'].calculateShipping(item, address, shop.address)
    }
  })
);
