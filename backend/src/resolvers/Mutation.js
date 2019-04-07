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

  async login(parent, { email, password }, ctx, info) {
    const user = await ctx.db.query.user({ where: { email: email } });
    if (!user) {
      throw new Error(`No such user found for the email ${email}`);
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error(`password is not valid!`);
    }
    const token = jwt.sign({ userId: user.id }, process.env.USER_SECRET);

    ctx.res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 31,
    });
    console.log(user);
    return user;
  },

  logout(parent, args, context, info) {
    context.res.clearCookie('token');
    return { message: "bye!" }
  }
}

module.exports = Mutations;