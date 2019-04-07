const Query = {
  me(parent, args, context, info) {
    if (!context.req.userId) {
      return null;
    }
    return context.db.query.user({
      where: { id: context.req.userId }
    }, info);
  }
};

module.exports = Query;