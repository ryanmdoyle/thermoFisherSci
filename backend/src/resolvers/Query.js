const { forwardTo } = require('prisma-binding');

const Query = {
  me(parent, args, context, info) {
    if (!context.req.userId) {
      return null;
    }
    return context.db.query.user({
      where: { id: context.req.userId }
    }, info);
  },

  async parts(parent, args, context, info) {
    return context.db.query.parts()
  },

  async users(parent, args, context, info) {
    // check is user is logged in and has permissions to see all users
    return await context.db.query.users({}, info) //why does info make this work???
  },
};

module.exports = Query;