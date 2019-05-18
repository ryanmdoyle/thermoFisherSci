import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';

import DropdownStyled from './styles/DropdownStyled';
import MarkdownView from './MarkdownView';

const PartStyled = styled.div`
  .part-container {
    box-sizing: border-box;
    box-shadow: 0 0 0rem 0.07rem ${props => props.theme.black};
    border-radius: 0.2rem;
    margin-bottom: 1rem;
    padding: 0 1rem 0 1rem;
    transition: transform 0.2s;
  }
  .part-container:hover {
    z-index: 300;
    border: none;
    box-shadow: 0 0 0.2rem 0.1rem ${props => props.theme.red};
    transform: scale(1.01);
    transition: transform 0.2s;
  }

  h4 {
    margin: 0 0;
    padding: 1rem 0;
  }

  .part-header {
    display: flex;
  }
  .part-header__number {
    width: 20%;
    transition: width 1s;
  }
  .part-header__description {
    width: 80%;
    transition: width 1s;
  }
  @media screen and (max-width:600px) {
    .part-header__number {
      width: 30%;
      transition: width 1s;
    }
    .part-header__description {
      width: 70%;
      transition: width 1s;
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
  state = {
    showPermissions: false,
  }

  togglePermissions = () => {
    this.setState({
      showPermissions: !this.state.showPermissions
    })
  }

  render() {
    return (
      <Query query={PARTS_QUERY} variables={{ "$partNumber": "0001" }}>
        {({ loading, data }) => {
          if (loading) return <p>Loading...</p>
          return (
            <div>
              <h1>Parts</h1>
              {data.parts.map((part, index) => (
                <div key={part.id}>
                  <PartStyled key={part.id}>
                    <div className='part-container'>
                      <div className='part-header'>
                        {/* <MarkdownView html={part.englishLong_en} /> */}
                        <h4 className='part-header__number'>{part.partNumber}</h4>
                        <p className='part-header__description'>{part.englishShort_en}</p>
                        <Link href={{ pathname: '/part', query: { id: part.id } }}>
                          <a>{part.id}</a>
                        </Link>
                      </div>
                    </div>
                  </PartStyled>
                </div>
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