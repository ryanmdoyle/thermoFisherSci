import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import UserPermissions from "./UserPermissions";

const USERS_QUERY = gql`

  query {
    users {
      id
      name
      permissions
    }
}

`;
class Users extends Component {
  render() {
    return (
      <Query query={USERS_QUERY}>
        {({ data: data }) => (
          <div>
            <h1>Users</h1>
            {data.users.map((user, index) => (
              <div key={user.id}>
                <UserPermissions name={user.name} permissions={user.permissions} />
              </div>
            ))}
          </div>
        )}
      </Query>
    );
  }
}

export default Users;