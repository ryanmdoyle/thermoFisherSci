import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

const PART_QUERY = gql`

  query($partNumber: String) {
    parts(
      where: {partNumber_contains: $partNumber}
    ) {
      partNumber
      englishLong_en
    }
}

`;
class Parts extends Component {
  render() {
    return (
      <Query query={PARTS_QUERY} variables={{ "$partNumber": "0001" }}>
        {({ data: { parts } }) => (
          <div>
            <p>check console</p>
            {console.log(parts)}
          </div>
        )}
      </Query>
    );
  }
}

export default Parts;