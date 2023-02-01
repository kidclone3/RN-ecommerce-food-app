'use strict';

/**
 * order controller
 */

const {createCoreController} = require('@strapi/strapi').factories;
const createError = require('http-errors');
module.exports = createCoreController('api::order.order', ({strapi}) => ({
  findByUser: async (ctx) => {
    if (!ctx?.request.header.authorization)
      throw createError(403, "Permission denied")
    const user = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
    const page = ctx?.query?.pagination?.start ?? 1;
    const limit = ctx?.query?.pagination?.limit ?? 25
    const filter = ctx?.query?.filters ?? {};
    const data = await strapi.db.query('api::order.order').findWithCount({
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
  orderDetail: async (ctx) => {
    if (!ctx?.request.header.authorization)
      throw createError(403, "Permission denied")
    const user = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
    const order = await strapi.db.query('api::order.order').findOne({
      where: {user: user.id, id: ctx.params.id},
    });
    if (!order) {
      throw createError(404, "Order not found")
    }
    const page = ctx?.query?.pagination?.start ?? 1;
    const limit = ctx?.query?.pagination?.limit ?? 25
    const data = await strapi.db.query('api::order-item.order-item').findWithCount({
      where: {order: order.id},
      populate: {product:true},
      offset: Math.abs(page - 1) * limit,
      limit: limit
    });
    return {
      ...order,
      item:data[0],
      total: data[1],
      page: page,
      limit: limit,
      next: data[1] > page * limit,
      previous: page > 1,
      last: Math.ceil(data[1] / parseInt(limit))
    }
  },
  createOrderWithCartItem: async (ctx) => {

    if (!ctx?.request.header.authorization)
      throw createError(403, "Permission denied")
    const user = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
    if (!Array.isArray(ctx.request.body.item) || !ctx.request.body.address || !ctx.request.body.phone)
      throw createError(400,"Missing required fields")
    const products = [];
    let total = 0;
    const {item, phone, address, shop_id} = ctx.request.body;
    for (let i = 0; i < item.length; i++) {
      const cartItem = await strapi.db.query('api::cart.cart').delete({
        where: {id: parseInt(item[i]), user: user.id, product: {show: true}},
        populate: {product: true}
      });
      if (!cartItem) {
        throw createError(404, "Cart item not found");
      }
      if (!cartItem.product.price) {
        continue;
      }
      products.push({
        product: cartItem.product.id,
        product_name: cartItem.product.name,
        price: cartItem.product.price,
        unit: cartItem.product.unit,
        quantity: cartItem.quantity
      })
      total += parseFloat(cartItem.product.price) * parseInt(cartItem.quantity)
    }
    const shop = await strapi.entityService.findMany('api::store-address.store-address');
    const order = await strapi.db.query('api::order.order').create({
      data: {
        user: user.id,
        address: address,
        phone: phone,
        total_price: total,
        note: ctx?.request?.body?.note ?? "",
        shop_address: shop.address,
      }
    });
    for (let i = 0; i < products.length; i++) {
      await strapi.entityService.create('api::order-item.order-item', {
        data: {
          order: order.id,
          product: products[i].product,
          product_name: products[i].product_name,
          price: products[i].price,
          unit: products[i].unit,
          quantity: parseInt(products[i].quantity)
        }
      })
    }
    return order;
  },
  cancelOrder: async (ctx) => {
    if (!ctx?.request.header.authorization)
      throw createError(403, "Permission denied")
    const user = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
    const order = await strapi.db.query('api::order.order').findOne({
      where: {user: user.id, id: ctx.params.id},
      populate: {order_items: true}
    });
    if (!order) {
      throw createError(404, "Order not found")
    }
    if (order.status !== "chờ duyệt") {
      throw createError(400, "Order can not be canceled")
    }

    return await strapi.db.query('api::order.order').update({where:{id: order.id}, data:{status: "đã hủy"}})
  }
}));
