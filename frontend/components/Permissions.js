import React, { Component } from 'react';
import { CURRENT_USER_QUERY } from './User';
import {Query} from 'react-apollo'

class Permissions extends Component {
  render() {
    return (
      <Query query={CURRENT_USER_QUERY}>
        {payload => {
          console.log(payload)
          return (
            payload.data.me.permissions.map(permission => {
              {console.log(permission)}
              return <p>{permission}</p>
            })
          )
        }
        }
      </Query>
    );
  }
}

export default Permissions;