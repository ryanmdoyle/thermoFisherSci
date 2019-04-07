import { Mutation } from 'react-apollo';
import Link from 'next/link';
import React from 'react';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const LOGOUT_MUTATION = gql`
   mutation LOGOUT_MUTATION {
     logout {
       message
     }
   }
`;

const Logout = (props) => {
  return (
    <Mutation mutation={LOGOUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
      {(logout) => (
        <button onClick={logout}>
          <a>Log Out</a>
        </button>
      )}
    </Mutation>
  );
};

export default Logout;