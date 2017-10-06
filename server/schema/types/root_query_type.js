const { GraphQLObjectType, GraphQLID } = require('graphql')
const CategoryType = require('./category_type')

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    category: {
      type: CategoryType,
      resolve(parentValue, args, req) {
        return req.data
      }
    } 
  }
})

module.exports = RootQueryType