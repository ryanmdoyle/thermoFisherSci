const express = require('express');
const { Prisma } = require('prisma-binding');
const { ApolloServer } = require('apollo-server-express');
const { importSchema } = require('graphql-import');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const typeDefs = importSchema('./src/schema.graphql');
const Query = require('./src/resolvers/Query');
const Mutation = require('./src/resolvers/Mutation');

const db = new Prisma({
  typeDefs: './generated/prisma.graphql',
  endpoint: process.env.DB_ENDPOINT,
  secret: process.env.DB_SECRET
});

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Mutation,
    Query
  },
  context: req => ({ ...req, db })
});

const app = express();

var corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true // <-- REQUIRED backend setting
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use((req, res, next) => { // checks for user in cookies and adds userId to the requests
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.USER_SECRET);
    req.userId = userId;
  }
  next();
})

server.applyMiddleware({
  app,
  path: '/',
  cors: false, // disables the apollo-server-express cors to allow the cors middleware use
})

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);