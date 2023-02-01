'use strict';

module.exports = {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/page-size",
      handler: "reviews.getPageSize",
      config: {
        policies: []
      }
    },
    {
      method: "GET",
      path: "/reviews/:slug",
      handler: "reviews.find",
      config: {
        policies: [],
        auth: false
      }
    },
    {
      method: "GET",
      path: "/reviews/:slug/count",
      handler: "reviews.count",
      config: {
        policies: [],
        auth: false
      }
    },
    {
      method: "GET",
      path: "/reviews/:slug/user-review",
      handler: "reviews.getUserReview",
      config: {
        policies: []
      }
    },
    {
      method: "GET",
      path: "/reviews/:slug/stats",
      handler: "reviews.getStats",
      config: {
        policies: [],
        auth: false
      }
    },
    {
      method: "POST",
      path: "/reviews/:slug",
      handler: "reviews.create",
      config: {
        policies: []
      }
    },
    {
      method: "PUT",
      path: "/comment/:id",
      handler: "reviews.update",
      config: {
        policies: []
      }
    },
    {
      method: "DELETE",
      path: "/comment/:id",
      handler: "reviews.delete",
      config: {
        policies: []
      }
    },
    {
      method: "POST",
      path:"/reviews",
      handler: "reviews.statsByList",
      config: {
        policies: [],
        auth: false
      }
    }
  ]
}
