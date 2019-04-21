function createDescription(languageField) {
  const dbFields = {
    chineseLong_zh_cn: 'Chinese Long Description (PRC)',
    chineseShort_zh_cn: 'Chinese Description (PRC)',
    chineseTLong_zh_tw: 'Chinese Long Description (Taiwan)',
    chineseTShort_zh_tw: 'Chinese Description (Taiwan)',
    danishLong_da: 'Danish Long Description',
    danishShort_da: 'Danish Description',
    dutchLong_nl: 'Dutch Long Description',
    dutchShort_nl: 'Dutch Description',
    englishLong_en: 'English Long Description',
    englishShort_en: 'English Description',
    frenchLong_fr: 'French Long Description',
    frenchShort_fr: 'French Description',
    germanLong_de: 'German Long Description',
    germanShort_de: 'German Description',
    italianLong_it: 'Italian Long Description',
    italianShort_it: 'Italian Description',
    japaneseLong_ja: 'Japanese Long Description',
    japaneseShort_ja: 'Japanese Description',
    koreanLong_ko: 'Korean Long Description',
    koreanShort_ko: 'Korean Description',
    portugeseLong_pt: 'Portugese Long Description',
    portugeseShort_pt: 'Portugese Description',
    spanishLong_es: 'Spanish Long Description',
    spanishShort_es: 'Spanish Description',
  };

  return dbFields[languageField]
}

export default createDescription;