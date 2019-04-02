import withApollo from 'next-with-apollo'; //for next-js server-side rendering
import ApolloClient from 'apollo-boost'; //boost is all the essential packages in one
import { endpoint } from '../config'; //the apollo api endpoint

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => { //like a middleware that passes credentials and headers to all requests
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);
