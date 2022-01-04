import { InMemoryCache, ApolloClient } from '@apollo/client'

const apolloClient = new  ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache()
})

export default apolloClient