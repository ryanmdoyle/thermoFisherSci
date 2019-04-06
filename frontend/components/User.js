// A render prop component that can be reused when user data is needed.
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import propTypes from 'prop-types';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      permissions
    }
  }
`;

import React from 'react';


/*
The Query render prop runs the query, but instead of you directly using the query to render out, you forward the payload into
the props of the child components.  This allow you to reuse the User component as a render prop that will have the user query data
passed into it already. It also get passed to it all the existing props {...props}
<User>
  {payload => {doing stuff with the user data here!}}
</User>
*/
const User = (props) => {
  return (
    <Query {...props} query={CURRENT_USER_QUERY} >
      {payload => props.children(payload)}
    </Query>
  );
};

User.propTypes = {
  children: propTypes.func.isRequired,
}

export default User;
export { CURRENT_USER_QUERY };