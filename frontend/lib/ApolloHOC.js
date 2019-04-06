import withApollo from 'next-with-apollo'; // package to create HOC
import ApolloClient, { InMemoryCache } from 'apollo-boost'; // bundle of Apollo packages
import { createHttpLink } from 'apollo-link-http';
import { endpoint } from '../config';

<<<<<<< HEAD
function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => { //like a middleware that passes credentials and headers to all requests
      operation.setContext({
        // fetchOptions: {
        //   credentials: 'include',
        // },
        headers,
      });
    },
  });
}
=======
const link = createHttpLink({
  uri: '/',
  credentials: 'include'
});
>>>>>>> parent of 31f8a90... Rewite of Apollo Client HOC

export default withApollo(({ ctx, headers, initialState }) => (

  new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache().restore(initialState || {}),
    link
  })
))