import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import ReactMarkdown from 'react-markdown/with-html';
import sanitize from 'sanitize-html';
import styled from 'styled-components';
import Router from 'next/router';

import { SINGLE_PART_QUERY } from './Part';
import { PARTS_QUERY } from './Parts';
import FormStyle from './styles/FormStyle';
import createDescription from '../lib/createDescription';
import User from './User';
import hasPermission from '../lib/hasPermission';

const MarkdownOutputStyled = styled.div`
  box-sizing: border-box;
  padding: 5px 20px;
  background-color: #efefef;
`;

const initialState = {
  partNumber: '',
  chineseShort_zh_cn: '',
  chineseLong_zh_cn: '',
  chineseTShort_zh_tw: '',
  chineseTLong_zh_tw: '',
  danishShort_da: '',
  danishLong_da: '',
  dutchShort_nl: '',
  dutchLong_nl: '',
  englishShort_en: '',
  englishLong_en: '',
  frenchShort_fr: '',
  frenchLong_fr: '',
  germanShort_de: '',
  germanLong_de: '',
  italianShort_it: '',
  italianLong_it: '',
  japaneseShort_ja: '',
  japaneseLong_ja: '',
  koreanShort_ko: '',
  koreanLong_ko: '',
  portugeseShort_pt: '',
  portugeseLong_pt: '',
  spanishShort_es: '',
  spanishLong_es: '',
};
class EditPart extends Component {
  // state contains db fields for all languages. Form is built/ordered based on state object
  state = {
    partNumber: '',
    chineseShort_zh_cn: '',
    chineseLong_zh_cn: '',
    chineseTShort_zh_tw: '',
    chineseTLong_zh_tw: '',
    danishShort_da: '',
    danishLong_da: '',
    dutchShort_nl: '',
    dutchLong_nl: '',
    englishShort_en: '',
    englishLong_en: '',
    frenchShort_fr: '',
    frenchLong_fr: '',
    germanShort_de: '',
    germanLong_de: '',
    italianShort_it: '',
    italianLong_it: '',
    japaneseShort_ja: '',
    japaneseLong_ja: '',
    koreanShort_ko: '',
    koreanLong_ko: '',
    portugeseShort_pt: '',
    portugeseLong_pt: '',
    spanishShort_es: '',
    spanishLong_es: '',
  };

  saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    // console.log(this.props.page.query.id)
    return (
      <User>
        {({ data: { me } }) => (
          <Query query={SINGLE_PART_QUERY} variables={{ id: this.props.page.query.id }}>
            {({ data }) => {
              return (
                <Mutation mutation={EDIT_PART_MUTATION} variables={this.state} refetchQueries={[{ query: PARTS_QUERY }]}>
                  {(createPart, { loading, error }) => {
                    if (loading) return <p>Loading...</p>
                    return (
                      <React.Fragment>
                        <h1>Edit Part - {data.part.partNumber}</h1>
                        <FormStyle //Styles the form component with styled-components
                          method='POST'
                          onSubmit={
                            async e => {
                              e.preventDefault();
                              createPart();
                              this.setState({ ...initialState });
                              Router.push('/parts');
                            }
                          }
                        >
                          {hasPermission(me, 'CREATE') && (
                            <>
                              <label htmlFor='partNumber'>
                                Part Number
                              </label>
                              <input
                                type='text'
                                name='partNumber'
                                key='partNumber'
                                placeholder='partNumber'
                                defaultValue={data.part.partNumber}
                                onChange={this.saveToState}
                              />
                              <hr style={{ margin: '2rem 4rem 1rem 4rem' }}></hr>
                            </>
                          )}
                          {Object.keys(this.state).map(key => {
                            const fieldName = key.toString();
                            const fieldDescription = createDescription(fieldName);
                            return (
                              <div key={key}>
                                {hasPermission(me, fieldName) && (
                                  <label htmlFor={fieldName}>
                                    {fieldDescription}
                                  </label>
                                )}
                                {fieldName.includes('Short') && hasPermission(me, fieldName) && // Renders inputs for short descriptions
                                  <input
                                    type='text'
                                    name={fieldName}
                                    placeholder={fieldName}
                                    defaultValue={data.part[key]}
                                    onChange={this.saveToState}
                                  />
                                }
                                {key.toString().includes('Long') && hasPermission(me, fieldName) && // Renders textareas and markdown prrview for long descriptions
                                  <div style={{ minHeight: '70px' }}>
                                    <textarea
                                      type='text'
                                      name={fieldName}
                                      placeholder={fieldName}
                                      defaultValue={data.part[fieldName]}
                                      onChange={this.saveToState}
                                    />
                                    {this.state[fieldName] && (

                                      <MarkdownOutputStyled>
                                        <ReactMarkdown
                                          source={sanitize(this.state[fieldName])}
                                          escapeHtml={false}
                                        />
                                      </MarkdownOutputStyled>
                                    )}
                                  </div>
                                }
                              </div>
                            )
                          })
                          }
                          <input className='submit-button' type='submit' value='Create Part' key='submit-button' />
                        </FormStyle>
                      </React.Fragment>
                    )
                  }}
                </Mutation>
              )
            }}
          </Query>
        )}
      </User>
    );
  }
}

export const EDIT_PART_MUTATION = gql`
  mutation {
  updatePart(data: {chineseLong_zh_cn: "testing update again!" }, where: {id: "cjv1ax0gk6um00b30ird0ygoa"}) {
    id
    chineseLong_zh_cn
  }
}
`;

export default EditPart;
export { initialState };