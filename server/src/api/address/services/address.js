'use strict';

/**
 * address service
 */

const { createCoreService } = require('@strapi/strapi').factories;
const createError = require('http-errors');
module.exports = createCoreService('api::address.address', ({ strapi }) => ({
  calculateShipping: async (item,client_address,shop_address) => {
    // let total = 0;
    //
    // for (let i = 0; i < item.length; i++) {
    //   const cartItem = await strapi.db.query('api::cart.cart').delete({
    //     where: {id: parseInt(item[i]), user: user.id, product: {show: true}},
    //     populate: {product: true}
    //   });
    //   if (!cartItem) {
    //     throw createError(404, "Cart item not found");
    //   }
    //   if (!cartItem.product.price) {
    //     continue;
    //   }
    //   switch (cartItem.product.unit) {
    //     case "kg": total += parseFloat(cartItem.product.quantity); break;
    //     case "g": total += parseFloat(cartItem.product.quantity) / 1000; break;
    //     case "quả": total += parseFloat(cartItem.product.quantity) / 1000; break;
    //   }
    // }

  }
}) );

