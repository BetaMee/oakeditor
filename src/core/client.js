import ApolloClient from 'apollo-boost'
import { defaults, resolvers, typeDefs } from './graphql/clientSate'

export default new ApolloClient({
  uri: 'http://oakserver-dev.ap-northeast-1.elasticbeanstalk.com/graphql/entry',
  clientState: {
    defaults,
    resolvers,
    typeDefs
  }
})
