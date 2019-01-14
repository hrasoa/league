import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.INITIAL_STATE.data),
  uri: '/api',
});

export default client;
