import withApollo from 'next-with-apollo'; // package to create HOC
import ApolloClient, { InMemoryCache } from 'apollo-boost'; // bundle of Apollo packages
import { createHttpLink } from 'apollo-link-http';
import { endpoint } from '../config';

const link = createHttpLink({
  uri: '/',
  credentials: 'include'
});

export default withApollo(({ ctx, headers, initialState }) => (

  new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache().restore(initialState || {}),
    link
  })
))