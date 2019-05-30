import React, { Component } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';

import MarkdownView from './MarkdownView';

const DescriptionsStyled = styled.div`
  box-sizing: border-box;
  background-color: #efefef;
  margin-left: 2rem;
  padding: 1rem;
`;

const SINGLE_PART_QUERY = gql`
  query SINGLE_PART_QUERY($id: ID!) {
    part(where: { id: $id }) {
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

class Part extends Component {
  render() {
    return (
      <Query query={SINGLE_PART_QUERY} variables={{ id: this.props.props.query.id }}>
        {({ data: { part } }) => {
          return (
            <div>
              <h1>{`Part - ${part.partNumber}`}</h1>
              <hr></hr>
              <h2>English Descriptions</h2>
              <DescriptionsStyled>
                <p>{part.englishShort_en}</p>
                <MarkdownView html={part.englishLong_en} />
              </DescriptionsStyled>

              <h2>Chinese Descriptions</h2>
              <DescriptionsStyled>
                <p>{part.chineseShort_zh_cn}</p>
                <MarkdownView html={part.chineseLong_zh_cn} />
              </DescriptionsStyled>

              <h2>Chinese (Taiwan) Descriptions</h2>
              <DescriptionsStyled>
                <p>{part.chineseShort_zh_tw}</p>
                <MarkdownView html={part.chineseLong_zh_tw} />
              </DescriptionsStyled>

              <h2>Danish Descriptions</h2>
              <DescriptionsStyled>
                <p>{part.danishShort_da}</p>
                <MarkdownView html={part.danishLong_da} />
              </DescriptionsStyled>

              <h2>Dutch Descriptions</h2>
              <DescriptionsStyled>
                <p>{part.dutchShort_nl}</p>
                <MarkdownView html={part.dutchLong_nl} />
              </DescriptionsStyled>

              <h2>French Descriptions</h2>
              <DescriptionsStyled>
                <p>{part.frenchShort_fr}</p>
                <MarkdownView html={part.frenchLong_fr} />
              </DescriptionsStyled>

              <h2>German Descriptions</h2>
              <DescriptionsStyled>
                <p>{part.germanShort_de}</p>
                <MarkdownView html={part.germanLong_de} />
              </DescriptionsStyled>

              <h2>Italian Descriptions</h2>
              <DescriptionsStyled>
                <p>{part.italianShort_it}</p>
                <MarkdownView html={part.italianLong_it} />
              </DescriptionsStyled>

              <h2>Japanese Descriptions</h2> <DescriptionsStyled>
                <p>{part.japaneseShort_ja}</p>
                <MarkdownView html={part.japaneseLong_ja} />
              </DescriptionsStyled>

              <h2>Korean Descriptions</h2>
              <DescriptionsStyled>
                <p>{part.koreanShort_ko}</p>
                <MarkdownView html={part.koreanLong_ko} />
              </DescriptionsStyled>

              <h2>Portugese Descriptions</h2>
              <DescriptionsStyled>
                <p>{part.portugeseShort_pt}</p>
                <MarkdownView html={part.portugeseLong_pt} />
              </DescriptionsStyled>

              <h2>Spanish Descriptions</h2>
              <DescriptionsStyled>
                <p>{part.spanishShort_es}</p>
                <MarkdownView html={part.spanishLong_es} />
              </DescriptionsStyled>
            </div>
          )
        }}
      </Query>
    );
  }
}

export default Part;