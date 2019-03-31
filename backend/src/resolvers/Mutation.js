const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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
  },

  async createPart(parent, args, context, info) {
    const part = await context.db.mutation.createPart({
      data: { ...args }
    }, info);
    return part;
  },

  async loginUser(parent, { email, password }, context, info) {
    const user = await context.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No user found for ${email}`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid Password');
    }

    const token = await jwt.sign({ userId: user.id }, process.env.COOKIE_SECRET);
    console.log(token);
    context.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 21,
    });
    return user;
  }
}

module.exports = Mutations;