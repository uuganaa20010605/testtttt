import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://news-999.com/graphql",
  cache: new InMemoryCache()
});

export default client;
