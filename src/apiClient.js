import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.INITIAL_STATE.data),
  fetch,
  uri: 'http://localhost:4000/graphql',
});

export default client;
