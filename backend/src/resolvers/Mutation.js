const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutations = {
  async createUser(parent, args, context, info) {
    args.email = args.email.toLowerCase();
    const password = await bcrypt.hash(args.password, 12);

    const user = await context.db.mutation.createUser({
      data: {
        name: args.name,
        email: args.email,
        password: password,
        permissions: { set: ['USER'] }
      }
    }, info);
    return user;
  }
}

module.exports = Mutations;