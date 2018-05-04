const defaults = {
  article: {
    title: '',
    __typename: 'Article'
  }
}

const typeDefs = `
  type Query {
    article: Article
  }
  type Article {
    title: String!
  }
`

const resolvers = {

}

export {
  defaults,
  typeDefs,
  resolvers
}
