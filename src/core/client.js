import ApolloClient from 'apollo-boost'

export default new ApolloClient({
  uri: 'http://oakserver-dev.ap-northeast-1.elasticbeanstalk.com/graphql/entry'
})
