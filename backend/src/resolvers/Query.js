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

  parts(parent, args, context, info) {
    return context.db.query.parts()
  },

  users(parent, args, context, info) {
    return context.db.query.users()
  },
};

module.exports = Query;