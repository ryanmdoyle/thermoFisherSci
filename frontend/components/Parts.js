import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

const PARTS_QUERY = gql`

  query($partNumber: String) {
    parts(
      where: {partNumber_contains: $partNumber}
    ) {
      id
      partNumber
      chineseLong_zh_cn
      chineseShort_zh_cn
      chineseTLong_zh_tw
      chineseTShort_zh_tw
      danishLong_da
      danishShort_da
      dutchLong_nl
      dutchShort_nl
      englishLong_en
      englishShort_en
      frenchLong_fr
      frenchShort_fr
      germanLong_de
      germanShort_de
      italianLong_it
      italianShort_it
      japaneseLong_ja
      japaneseShort_ja
      koreanLong_ko
      koreanShort_ko
      portugeseLong_pt
      portugeseShort_pt
      spanishLong_es
      spanishShort_es
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
            {data.parts.map((part, index) => (
              <div key={part.id}>
                <h3>{part.partNumber}</h3>
                <p>{part.englishShort_en}</p>
                <p>{part.englishLong_en}</p>
              </div>
            ))}
            <hr></hr>
          </div>
        )}
      </Query>
    );
  }
}

export default Parts;
export { PARTS_QUERY };