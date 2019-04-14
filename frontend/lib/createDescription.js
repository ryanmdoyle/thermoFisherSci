function createDescription(languageField) {
  const dbFields = {
    chineseLong_zh_cn: 'Chinese Long (PRC)',
    chineseShort_zh_cn: 'Chinese Short (PRC)',
    chineseTLong_zh_tw: 'Chinese Long (Taiwan)',
    chineseTShort_zh_tw: 'Chinese Short (Taiwan)',
    danishLong_da: 'Danish Long',
    danishShort_da: 'Danish Short',
    dutchLong_nl: 'Dutch Long',
    dutchShort_nl: 'Dutch Short',
    englishLong_en: 'English Long',
    englishShort_en: 'English Short',
    frenchLong_fr: 'French Long',
    frenchShort_fr: 'French Short',
    germanLong_de: 'German Long',
    germanShort_de: 'German Short',
    italianLong_it: 'Italian Long',
    italianShort_it: 'Italian Short',
    japaneseLong_ja: 'Japanese Long',
    japaneseShort_ja: 'Japanese Short',
    koreanLong_ko: 'Korean Long',
    koreanShort_ko: 'Korean Short',
    portugeseLong_pt: 'Portugese Long',
    portugeseShort_pt: 'Portugese Short',
    spanishLong_es: 'Spanish Long',
    spanishShort_es: 'Spanish Short',
  };

  return dbFields[languageField]
}

export default createDescription;