module.exports = {
  routes: [
    {
      method: "GET",
      path: "/members",
      handler: "members.allMembers",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/members/:id",
      handler: "members.findMember",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
