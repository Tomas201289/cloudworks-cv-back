"use strict";

module.exports = {
  async allMembers(ctx, next) {
    try {
      const data = await strapi.service("api::members.members").allMembers();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Members report controller error", { moreDetails: err });
    }
  },

  async findMember(ctx, next) {
    try {
      const data = await strapi.service("api::members.members").findMember(ctx);
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Members report controller error", { moreDetails: err });
    }
  },
};
