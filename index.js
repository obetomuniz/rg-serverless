const { ApolloServer } = require("apollo-server-lambda");

const { typeDefs, resolvers } = require("./graphql/posts");

const server = new ApolloServer({ typeDefs, resolvers });

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: false
  },
  endpointURL: "/graphql"
});