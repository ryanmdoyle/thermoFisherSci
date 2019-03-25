import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const Form = styled.form`
  label {
    width: 100%;
    display: block;
  }
  input {
    margin-right: 100px;
  }
`;

class CreatePart extends Component {
  state = {
    partNumber: '',
    chineseLong_zh_cn: null,
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
    spanishShort_es:'' 
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  render() {
    return (
      <Form 
        method='POST'
        onSubmit={
          async e => {
            e.preventDefault();
            console.log(this.state);
            //this.setState({})
          }
        }
      >
        <label htmlFor='partNumber'>
          Part Number
          <input
            type='text'
            name='partNumber'
            placeholder='partNumber'
            value={this.state.partNumber}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='chineseLong_zh_cn'>
          chineseLong_zh_cn
          <textarea
            type='text'
            name='chineseLong_zh_cn'
            placeholder='chineseLong_zh_cn'
            value={this.state.chineseLong_zh_cn}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='chineseShort_zh_cn'>
          chineseShort_zh_cn
          <input
            type='text'
            name='chineseShort_zh_cn'
            placeholder='chineseShort_zh_cn'
            value={this.state.chineseShort_zh_cn}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='chineseTLong_zh_tw'>
          chineseTLong_zh_tw
          <input
            type='text'
            name='chineseTLong_zh_tw'
            placeholder='chineseTLong_zh_tw'
            value={this.state.chineseTLong_zh_tw}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='chineseTShort_zh_tw'>
          chineseTShort_zh_tw
          <input
            type='text'
            name='chineseTShort_zh_tw'
            placeholder='chineseTShort_zh_tw'
            value={this.state.chineseTShort_zh_tw}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='danishLong_da'>
          danishLong_da
          <input
            type='text'
            name='danishLong_da'
            placeholder='danishLong_da'
            value={this.state.danishLong_da}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='danishShort_da'>
          danishShort_da
          <input
            type='text'
            name='danishShort_da'
            placeholder='danishShort_da'
            value={this.state.danishShort_da}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='dutchLong_nl'>
          dutchLong_nl
          <input
            type='text'
            name='dutchLong_nl'
            placeholder='dutchLong_nl'
            value={this.state.dutchLong_nl}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='dutchShort_nl'>
          dutchShort_nl
          <input
            type='text'
            name='dutchShort_nl'
            placeholder='dutchShort_nl'
            value={this.state.dutchShort_nl}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='englishLong_en'>
          englishLong_en
          <input
            type='text'
            name='englishLong_en'
            placeholder='englishLong_en'
            value={this.state.englishLong_en}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='englishShort_en'>
          englishShort_en
          <input
            type='text'
            name='englishShort_en'
            placeholder='englishShort_en'
            value={this.state.englishShort_en}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='frenchLong_fr'>
          frenchLong_fr
          <input
            type='text'
            name='frenchLong_fr'
            placeholder='frenchLong_fr'
            value={this.state.frenchLong_fr}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='frenchShort_fr'>
          frenchShort_fr
          <input
            type='text'
            name='frenchShort_fr'
            placeholder='frenchShort_fr'
            value={this.state.frenchShort_fr}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='germanLong_de'>
          germanLong_de
          <input
            type='text'
            name='germanLong_de'
            placeholder='germanLong_de'
            value={this.state.germanLong_de}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='germanShort_de'>
          germanShort_de
          <input
            type='text'
            name='germanShort_de'
            placeholder='germanShort_de'
            value={this.state.germanShort_de}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='italianLong_it'>
          italianLong_it
          <input
            type='text'
            name='italianLong_it'
            placeholder='italianLong_it'
            value={this.state.italianLong_it}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='italianShort_it'>
          italianShort_it
          <input
            type='text'
            name='italianShort_it'
            placeholder='italianShort_it'
            value={this.state.italianShort_it}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='japaneseLong_ja'>
          japaneseLong_ja
          <input
            type='text'
            name='japaneseLong_ja'
            placeholder='japaneseLong_ja'
            value={this.state.japaneseLong_ja}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='japaneseShort_ja'>
          japaneseShort_ja
          <input
            type='text'
            name='japaneseShort_ja'
            placeholder='japaneseShort_ja'
            value={this.state.japaneseShort_ja}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='koreanLong_ko'>
          koreanLong_ko
          <input
            type='text'
            name='koreanLong_ko'
            placeholder='koreanLong_ko'
            value={this.state.koreanLong_ko}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='koreanShort_ko'>
          koreanShort_ko
          <input
            type='text'
            name='koreanShort_ko'
            placeholder='koreanShort_ko'
            value={this.state.koreanShort_ko}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='portugeseLong_pt'>
          portugeseLong_pt
          <input
            type='text'
            name='portugeseLong_pt'
            placeholder='portugeseLong_pt'
            value={this.state.portugeseLong_pt}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='portugeseShort_pt'>
          portugeseShort_pt
          <input
            type='text'
            name='portugeseShort_pt'
            placeholder='portugeseShort_pt'
            value={this.state.portugeseShort_pt}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='spanishLong_es'>
          spanishLong_es
          <input
            type='text'
            name='spanishLong_es'
            placeholder='spanishLong_es'
            value={this.state.spanishLong_es}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor='spanishShort_es'>
          spanishShort_es
          <input
            type='text'
            name='spanishShort_es'
            placeholder='spanishShort_es'
            value={this.state.spanishShort_es}
            onChange={this.saveToState}
          />
        </label>
        <input type='submit' value='Create Part' />
      </Form>
    );
  }
}

export default CreatePart;