import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

const PARTS_QUERY = gql`

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
        {({ data: data }) => (
          <div>
            <h1>Parts</h1>
            {console.log(data)}
            {data.parts.map((part, index) => (
              <div key={part.partNumber}>
                <h3>{part.partNumber}</h3>
                <p>{part.englishLong_en}</p>
              </div>
            ))}
          </div>
        )}
      </Query>
    );
  }
}

export default Parts;