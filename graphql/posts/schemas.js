const { gql } = require("apollo-server-lambda");

module.exports = gql`
  type Post {
    id: Int
    userId: Int
    title: String
    body: String
  }

  type Query {
    post(id: Int!): Post
    posts: [Post]
  }
`
