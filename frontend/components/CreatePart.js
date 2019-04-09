import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import FormStyle from './styles/FormStyle';

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
class CreatePart extends Component {
  state = {
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
    spanishShort_es: ''
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Mutation mutation={CREATE_PART_MUTATION} variables={this.state}>
        {(createPart, { loading, error }) => (
          <React.Fragment>
            <h1>Create a New Part</h1>
            <FormStyle
              method='POST'
              onSubmit={
                async e => {
                  e.preventDefault();
                  console.log(this.state);
                  createPart();
                  this.setState({})
                }
              }
            >
              <label htmlFor='partNumber'>
                Part Number
            </label>
              <input
                type='text'
                name='partNumber'
                placeholder='partNumber'
                value={this.state.partNumber}
                onChange={this.saveToState}
              />
              <label htmlFor='chineseLong_zh_cn'>
                chineseLong_zh_cn
            </label>
              <textarea
                type='text'
                name='chineseLong_zh_cn'
                placeholder='chineseLong_zh_cn'
                value={this.state.chineseLong_zh_cn}
                onChange={this.saveToState}
              />
              <label htmlFor='chineseShort_zh_cn'>
                chineseShort_zh_cn
            </label>
              <input
                type='text'
                name='chineseShort_zh_cn'
                placeholder='chineseShort_zh_cn'
                value={this.state.chineseShort_zh_cn}
                onChange={this.saveToState}
              />
              <label htmlFor='chineseTLong_zh_tw'>
                chineseTLong_zh_tw
            </label>
              <input
                type='text'
                name='chineseTLong_zh_tw'
                placeholder='chineseTLong_zh_tw'
                value={this.state.chineseTLong_zh_tw}
                onChange={this.saveToState}
              />
              <label htmlFor='chineseTShort_zh_tw'>
                chineseTShort_zh_tw
            </label>
              <input
                type='text'
                name='chineseTShort_zh_tw'
                placeholder='chineseTShort_zh_tw'
                value={this.state.chineseTShort_zh_tw}
                onChange={this.saveToState}
              />
              <label htmlFor='danishLong_da'>
                danishLong_da
            </label>
              <input
                type='text'
                name='danishLong_da'
                placeholder='danishLong_da'
                value={this.state.danishLong_da}
                onChange={this.saveToState}
              />
              <label htmlFor='danishShort_da'>
                danishShort_da
            </label>
              <input
                type='text'
                name='danishShort_da'
                placeholder='danishShort_da'
                value={this.state.danishShort_da}
                onChange={this.saveToState}
              />
              <label htmlFor='dutchLong_nl'>
                dutchLong_nl
            </label>
              <input
                type='text'
                name='dutchLong_nl'
                placeholder='dutchLong_nl'
                value={this.state.dutchLong_nl}
                onChange={this.saveToState}
              />
              <label htmlFor='dutchShort_nl'>
                dutchShort_nl
            </label>
              <input
                type='text'
                name='dutchShort_nl'
                placeholder='dutchShort_nl'
                value={this.state.dutchShort_nl}
                onChange={this.saveToState}
              />
              <label htmlFor='englishLong_en'>
                englishLong_en
            </label>
              <input
                type='text'
                name='englishLong_en'
                placeholder='englishLong_en'
                value={this.state.englishLong_en}
                onChange={this.saveToState}
              />
              <label htmlFor='englishShort_en'>
                englishShort_en
            </label>
              <input
                type='text'
                name='englishShort_en'
                placeholder='englishShort_en'
                value={this.state.englishShort_en}
                onChange={this.saveToState}
              />
              <label htmlFor='frenchLong_fr'>
                frenchLong_fr
            </label>
              <input
                type='text'
                name='frenchLong_fr'
                placeholder='frenchLong_fr'
                value={this.state.frenchLong_fr}
                onChange={this.saveToState}
              />
              <label htmlFor='frenchShort_fr'>
                frenchShort_fr
            </label>
              <input
                type='text'
                name='frenchShort_fr'
                placeholder='frenchShort_fr'
                value={this.state.frenchShort_fr}
                onChange={this.saveToState}
              />
              <label htmlFor='germanLong_de'>
                germanLong_de
            </label>
              <input
                type='text'
                name='germanLong_de'
                placeholder='germanLong_de'
                value={this.state.germanLong_de}
                onChange={this.saveToState}
              />
              <label htmlFor='germanShort_de'>
                germanShort_de
            </label>
              <input
                type='text'
                name='germanShort_de'
                placeholder='germanShort_de'
                value={this.state.germanShort_de}
                onChange={this.saveToState}
              />
              <label htmlFor='italianLong_it'>
                italianLong_it
            </label>
              <input
                type='text'
                name='italianLong_it'
                placeholder='italianLong_it'
                value={this.state.italianLong_it}
                onChange={this.saveToState}
              />
              <label htmlFor='italianShort_it'>
                italianShort_it
            </label>
              <input
                type='text'
                name='italianShort_it'
                placeholder='italianShort_it'
                value={this.state.italianShort_it}
                onChange={this.saveToState}
              />
              <label htmlFor='japaneseLong_ja'>
                japaneseLong_ja
            </label>
              <input
                type='text'
                name='japaneseLong_ja'
                placeholder='japaneseLong_ja'
                value={this.state.japaneseLong_ja}
                onChange={this.saveToState}
              />
              <label htmlFor='japaneseShort_ja'>
                japaneseShort_ja
            </label>
              <input
                type='text'
                name='japaneseShort_ja'
                placeholder='japaneseShort_ja'
                value={this.state.japaneseShort_ja}
                onChange={this.saveToState}
              />
              <label htmlFor='koreanLong_ko'>
                koreanLong_ko
            </label>
              <input
                type='text'
                name='koreanLong_ko'
                placeholder='koreanLong_ko'
                value={this.state.koreanLong_ko}
                onChange={this.saveToState}
              />
              <label htmlFor='koreanShort_ko'>
                koreanShort_ko
            </label>
              <input
                type='text'
                name='koreanShort_ko'
                placeholder='koreanShort_ko'
                value={this.state.koreanShort_ko}
                onChange={this.saveToState}
              />
              <label htmlFor='portugeseLong_pt'>
                portugeseLong_pt
            </label>
              <input
                type='text'
                name='portugeseLong_pt'
                placeholder='portugeseLong_pt'
                value={this.state.portugeseLong_pt}
                onChange={this.saveToState}
              />
              <label htmlFor='portugeseShort_pt'>
                portugeseShort_pt
            </label>
              <input
                type='text'
                name='portugeseShort_pt'
                placeholder='portugeseShort_pt'
                value={this.state.portugeseShort_pt}
                onChange={this.saveToState}
              />
              <label htmlFor='spanishLong_es'>
                spanishLong_es
            </label>
              <input
                type='text'
                name='spanishLong_es'
                placeholder='spanishLong_es'
                value={this.state.spanishLong_es}
                onChange={this.saveToState}
              />
              <label htmlFor='spanishShort_es'>
                spanishShort_es
            </label>
              <input
                type='text'
                name='spanishShort_es'
                placeholder='spanishShort_es'
                value={this.state.spanishShort_es}
                onChange={this.saveToState}
              />
              <input className='submit-button' type='submit' value='Create Part' />
            </FormStyle>
          </React.Fragment>
        )}
      </Mutation>
    );
  }
}

export default CreatePart;