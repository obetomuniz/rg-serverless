const axios = require('axios');
const DATABASE_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'

module.exports = {
  Query: {
    posts: async () => {
      const { data } = await axios.get(DATABASE_ENDPOINT)
      return data
    },
    post: async (_, { id }) => {
      const { data } = await axios.get(`${DATABASE_ENDPOINT}/${id}`)
      return data
    },
  },
}
