import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

// Place parts query here
class Parts extends Component {
  render() {
    return (
      // <Query query={PARTS_QUERY}>
      //   {() => (
      //     <div>the parts here</div>
      //   )}
      // </Query>
      <div>I'm the parts</div>
    );
  }
}

export default Parts;