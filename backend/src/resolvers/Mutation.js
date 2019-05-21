const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const marked = require('marked');
const sanitizeHTML = require('sanitize-html');
const fs = require('fs');

require('dotenv').config();

marked.setOptions({
  sanitize: true,
  sanitizer: sanitizeHTML,
})

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

  async updateUserPermissions(parent, args, ctx, info) {
    const { permissions } = args;
    const userId = ctx.req.userId;
    console.log(permissions);
    const updatedUser = await ctx.db.mutation.updateUser(
      {
        data: { permissions: { set: permissions } },
        where: { id: userId }, // this data type is already defined in Prisma and needs to be used there.
      }, info
    );
    return updatedUser;
  },

  async createPart(parent, args, context, info) {
    const data = { ...args };
    // get list/array of keys & use keys to convert all data to md
    const keys = Object.keys(data);
    keys.map(key => {
      if (key !== 'partNumnber' && key.includes('Long')) {
        data[key] = marked(data[key]);
      }
    })
    //create part using data formatted in html
    const part = await context.db.mutation.createPart({
      data: { ...data }
    }, info);
    return part;
  },

  async editPart(parent, args, context, info) {
    let data = 'header1, header2, header3/ndata1, data2, data3/n';
    const readStream = fs.createReadStream()
    return data;
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