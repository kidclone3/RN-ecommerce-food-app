'use strict';

/**
 * cart controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cart.cart', ({strapi}) => ({
  findByUser: async (ctx) => {
    if (!ctx.request.header.authorization)
      return ctx.throw(403, "Permission denied")
    const user = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
    return await strapi.db.query('api::cart.cart').findWithCount(
      {
        where: {user: user.id},
        populate: {product: true},
        orderBy: {createdAt: 'desc'},
      });
  },

  create: async (ctx) => {
    if (!ctx.request.header.authorization)
      return ctx.throw(403, "Permission denied")
    const user = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
    const {product, quantity} = ctx.request.body;
    if (!product || product < 1 || !quantity || quantity < 1) {
      return ctx.badRequest(null, 'Please provide product and quantity');
    }
    const productEntity = await strapi.entityService.findOne('api::product.product', product);
    if (!productEntity || !productEntity.show) {
      ctx.throw(404, 'Product not found');
    }
    const cart = await strapi.db.query('api::cart.cart').findOne({
      where: {
        user: user.id,
        product: product
      },
      populate: {product: true, user: true}
    });
    if (cart) {
      return await strapi.db.query('api::cart.cart').update({
        where: {id: cart.id},
        data: {quantity: (parseInt(cart.quantity) + parseInt(quantity))},
        populate: {product: true}
      });
    }
    return strapi.db.query('api::cart.cart').create({
      data: {
        user: user.id,
        product: productEntity.id,
        quantity: quantity
      },
      populate: {product: true}
    });
  },
  update: async (ctx) => {
    if (!ctx.request.header.authorization)
      return ctx.throw(403, "Permission denied")
    const user = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
    const {id} = ctx.params;
    const {quantity} = ctx.request.body;
    if (!id || !quantity) {
      return ctx.badRequest(null, 'Please provide id and quantity');
    }
    const cart = await strapi.db.query('api::cart.cart').findOne({
      where: {
        user: user.id,
        id: id
      },
      populate: {product: true}
    });

    if (!cart) {
      return ctx.throw(404, 'Cart not found');
    }
    if (parseInt(quantity) <= 0) {
      return await strapi.db.query('api::cart.cart').delete({where: {id: cart.id},});
    }
    return await strapi.db.query('api::cart.cart').update({
      where: {id: cart.id},
      data: {quantity: quantity},
      populate: {product: true}
    });
  },
  findOne: async (ctx) => {
    if (!ctx.request.header.authorization)
      return ctx.throw(403, "Permission denied")
    const user = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
    const {id} = ctx.params;
    const cart = await strapi.db.query('api::cart.cart').findOne({
      where: {
        user: user.id,
        id: id
      },
      populate: {product: true}
    });

    if (!cart) {
      return ctx.throw(404, 'Cart not found');
    }
    return cart;
  }
}));
