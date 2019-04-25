import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import FormStyle from './styles/FormStyle';
import createDescription from '../lib/createDescription';
import ReactMarkdown from 'react-markdown/with-html';
import sanitize from 'sanitize-html';

const CREATE_PART_MUTATION = gql`
  mutation CREATE_PART_MUTATION(
    $partNumber: String!
    $chineseLong_zh_cn: String
    $chineseShort_zh_cn: String
    $chineseTLong_zh_tw: String
    $chineseTShort_zh_tw: String
    $danishLong_da: String
    $danishShort_da: String
    $dutchLong_nl: String
    $dutchShort_nl: String
    $englishLong_en: String
    $englishShort_en: String
    $frenchLong_fr: String
    $frenchShort_fr: String
    $germanLong_de: String
    $germanShort_de: String
    $italianLong_it: String
    $italianShort_it: String
    $japaneseLong_ja: String
    $japaneseShort_ja: String
    $koreanLong_ko: String
    $koreanShort_ko: String
    $portugeseLong_pt: String
    $portugeseShort_pt: String
    $spanishLong_es: String
    $spanishShort_es: String
  ) {
    createPart(
      partNumber: $partNumber
      chineseLong_zh_cn: $chineseLong_zh_cn
      chineseShort_zh_cn: $chineseShort_zh_cn
      chineseTLong_zh_tw: $chineseTLong_zh_tw
      chineseTShort_zh_tw: $chineseTShort_zh_tw
      danishLong_da: $danishLong_da
      danishShort_da: $danishShort_da
      dutchLong_nl: $dutchLong_nl
      dutchShort_nl: $dutchShort_nl
      englishLong_en: $englishLong_en
      englishShort_en: $englishShort_en
      frenchLong_fr: $frenchLong_fr
      frenchShort_fr: $frenchShort_fr
      germanLong_de: $germanLong_de
      germanShort_de: $germanShort_de
      italianLong_it: $italianLong_it
      italianShort_it: $italianShort_it
      japaneseLong_ja: $japaneseLong_ja
      japaneseShort_ja: $japaneseShort_ja
      koreanLong_ko: $koreanLong_ko
      koreanShort_ko: $koreanShort_ko
      portugeseLong_pt: $portugeseLong_pt
      portugeseShort_pt: $portugeseShort_pt
      spanishLong_es: $spanishLong_es
      spanishShort_es: $spanishShort_es
    ) {
      partNumber
    }
  }
`;

const initialState = {
  partNumber: '',
  chineseLong_zh_cn: '',
  chineseShort_zh_cn: '',
  chineseTLong_zh_tw: '',
  chineseTShort_zh_tw: '',
  danishLong_da: '',
  danishShort_da: '',
  dutchLong_nl: '',
  dutchShort_nl: '',
  englishLong_en: '',
  englishShort_en: '',
  frenchLong_fr: '',
  frenchShort_fr: '',
  germanLong_de: '',
  germanShort_de: '',
  italianLong_it: '',
  italianShort_it: '',
  japaneseLong_ja: '',
  japaneseShort_ja: '',
  koreanLong_ko: '',
  koreanShort_ko: '',
  portugeseLong_pt: '',
  portugeseShort_pt: '',
  spanishLong_es: '',
  spanishShort_es: '',
};
class CreatePart extends Component {
  state = { // contains db fields for all languages.  Builds form using this as template
    partNumber: '',
    chineseLong_zh_cn: '',
    chineseShort_zh_cn: '',
    chineseTLong_zh_tw: '',
    chineseTShort_zh_tw: '',
    danishLong_da: '',
    danishShort_da: '',
    dutchLong_nl: '',
    dutchShort_nl: '',
    englishLong_en: '',
    englishShort_en: '',
    frenchLong_fr: '',
    frenchShort_fr: '',
    germanLong_de: '',
    germanShort_de: '',
    italianLong_it: '',
    italianShort_it: '',
    japaneseLong_ja: '',
    japaneseShort_ja: '',
    koreanLong_ko: '',
    koreanShort_ko: '',
    portugeseLong_pt: '',
    portugeseShort_pt: '',
    spanishLong_es: '',
    spanishShort_es: '',
  };

  saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <Mutation mutation={CREATE_PART_MUTATION} variables={this.state}>
        {(createPart, { loading, error }) => (
          <React.Fragment>
            <h1>Create a New Part</h1>
            <FormStyle //Styles the form component with styled-components
              method='POST'
              onSubmit={
                async e => {
                  e.preventDefault();
                  createPart();
                  this.setState({ ...initialState })
                }
              }
              >
              <label htmlFor='partNumber'>
                Part Number
              </label>
              <input
                type='text'
                name='partNumber'
                key='partNumber'
                placeholder='partNumber'
                value={this.state.partNumber}
                onChange={this.saveToState}
                />
              {Object.keys(this.state).map(key => {
                const fieldName = key.toString();
                const fieldDescription = createDescription(fieldName);
                return (
                  <div key={key}>
                    <label htmlFor={fieldName}>
                      {fieldDescription}
                    </label>
                    {fieldName.includes('Short') && // Renders inputs for short descriptions
                      <input
                      type='text'
                      name={fieldName}
                      placeholder={fieldName}
                      value={this.state[key]}
                      onChange={this.saveToState}
                      />
                    }
                    {key.toString().includes('Long') && // Renders textareas and markdown prrview for long descriptions
                      <div>
                        <textarea
                          type='text'
                          name={fieldName}
                          placeholder={fieldName}
                          value={this.state[fieldName]}
                          onChange={this.saveToState}
                          />
                        <ReactMarkdown
                          source={sanitize(this.state[fieldName])}
                          escapeHtml={false}
                          />
                      </div>
                    }
                  </div>
                )
              })
            }
              <input className='submit-button' type='submit' value='Create Part' key='submit-button' />
            </FormStyle>
          </React.Fragment>
        )}
      </Mutation>
    );
  }
}

export default CreatePart;