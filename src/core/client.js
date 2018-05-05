import ApolloClient from 'apollo-boost'
import { defaults, resolvers, typeDefs } from './graphql/clientSate'

export default new ApolloClient({
  uri: 'http://localhost:8080/graphql/entry',
  clientState: {
    defaults,
    resolvers,
    typeDefs
  }
})
