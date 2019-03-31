const { Prisma } = require('prisma-binding');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const typeDefs = importSchema('./src/schema.graphql');
const Query = require('./src/resolvers/Query');
const Mutation = require('./src/resolvers/Mutation');

const db = new Prisma({
  typeDefs: './generated/prisma.graphql',
  endpoint: process.env.DB_ENDPOINT,
  secret: process.env.DB_SECRET
});

const server = new GraphQLServer({
  typeDefs,
  resolvers: {
    Mutation,
    Query
  },
  context: req => ({ ...req, db })
});

server.express.use(cookieParser());

server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // add the user to future requests
    req.userId = userId;
  }
  next();
});

server.start({ //start the GraphQL server
  cors: { // only allow from frontend server (frontend_url)
    credentials: true,
    port: 4000,
    origin: ['http://localhost:3000'],
  },
}, postStart => { //callback once connection is created
  console.log(`🚀 Server now running on http://localhost:${postStart.port}`);
});