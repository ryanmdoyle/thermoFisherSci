import React from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

// const LOGIN_MUTATION = gql`
//   mutation LOGOUT_MUTATION {
//     logout() {
//     }
//   }
// `;

const SignoutButton = () => {
  return (
    <Mutation mutation={LOGOUT_MUTATION}>
      {signout => <button onClick={signout}>Signout</button>}
    </Mutation>
  );
};

export default SignoutButton;