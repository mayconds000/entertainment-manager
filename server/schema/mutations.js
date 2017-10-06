const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql')


const CategoryType = require('./types/category_type')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCategory: {
      type: CategoryType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve( parentValue, { name, description }) {
        return { name, description }
      }
    }
  }
})

module.exports = mutation