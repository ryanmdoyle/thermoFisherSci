import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Parser } from 'json2csv';
import { PARTS_QUERY } from './Parts';

import ButtonStyled from './styles/ButtonStyled';

const EDI_PART_MUTATION = gql`
  mutation EDIT_PART_MUTATION(
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
    editPart(
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

class Upload extends Component {
  parseCSV = (e) => {
    e.preventDefault();
    const file = document.getElementById('csvFile').files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const fileResult = e.target.result;
      // return a string from csv data before the first return (the header row)
      const headersString = fileResult.substring(0, fileResult.indexOf('\n'));
      // removes extra quotes from headers string and return an array of headers
      const headers = headersString.split('').filter(str => str !== '"').join('').split(',');

      const byRow = fileResult.split('\n');


      // const csvText = e.target.result.split('\n')[0];
      console.log(byRow);
    }
    reader.readAsText(file);

  }

  render() {
    return (
      <form onSubmit={this.parseCSV}>
        <input type="file" id="csvFile" name="csvFile" accept='.csv, .CSV'></input>
        <br></br>
        <input type="submit" name="submitMe" value="Process File"></input>
      </form>
    );
  }
}

export default Upload;