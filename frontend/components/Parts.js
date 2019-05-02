import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const PartStyled = styled.div`
  .part-container {
    box-sizing: border-box;
    box-shadow: 0 0 0rem 0.07rem ${props => props.theme.black};
    border-radius: 0.2rem;
    margin-bottom: 1rem;
    padding: 0.2rem 1rem 0.5rem 1rem;
  }
  .part-container:hover {
    border: none;
    box-shadow: 0 0 0.2rem 0.1rem ${props => props.theme.red};
  }
  .part-header {
    display: flex;
  }
  .part-header__number {
    width: 15%;
  }
  .part-header__description {
    width: 85%;
  }
  @media screen and (max-width:600px) {
    .part-header__number {
      width: 25%;
    }
    .part-header__description {
      width: 75%;
    }
  }
  
`;

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
        {({ loading, data }) => {
          if (loading) return <p>Loading...</p>
          return (
            <div>
              <h1>Parts</h1>
              {data.parts.map((part, index) => (
                <PartStyled key={part.id}>
                  <div className='part-container'>
                    <div className='part-header'>
                      <h4 className='part-header__number'>{part.partNumber}</h4>
                      <h4 className='part-header__description'>{part.englishShort_en}</h4>
                    </div>
                  </div>
                </PartStyled>
              ))}
            </div>
          )
        }}
      </Query>
    );
  }
}

export default Parts;
export { PARTS_QUERY };