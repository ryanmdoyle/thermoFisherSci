function permissionDescription(permission) {
  const permissions = {
    ADMIN: 'ADMIN Permissions',
    USER: 'User Permissions (Can read part descriptions)',
    CREATE: 'Create Parts',
    UPDATE: 'Update All Part Descriptions',
    DELETE: 'Delete Parts',
    EXPORT: 'Export Part Data',
    PERMISSIONUPDATE: 'Update User Permissions',
    CHINESELONG_ZH_CN: 'Edit Chinese Long Description (PRC)',
    CHINESESHORT_ZH_CN: 'Edit Chinese Description (PRC)',
    CHINESETLONG_ZH_TW: 'Edit Chinese Long Description (Taiwan)',
    CHINESETSHORT_ZH_TW: 'Edit Chinese Description (Taiwan)',
    DANISHLONG_DA: 'Edit Danish Long Description',
    DANISHSHORT_DA: 'Edit Danish Description',
    DUTCHLONG_NL: 'Edit Dutch Long Description',
    DUTCHSHORT_NL: 'Edit Dutch Description',
    ENGLISHLONG_EN: 'Edit English Long Description',
    ENGLISHSHORT_EN: 'Edit English Description',
    FRENCHLONG_FR: 'Edit French Long Description',
    FRENCHSHORT_FR: 'Edit French Description',
    GERMANLONG_DE: 'Edit German Long Description',
    GERMANSHORT_DE: 'Edit German Description',
    ITALIANLONG_IT: 'Edit Italian Long Description',
    ITALIANSHORT_IT: 'Edit Italian Description',
    JAPANESELONG_JA: 'Edit Japanese Long Description',
    JAPANESESHORT_JA: 'Edit Japanese Description',
    KOREANLONG_KO: 'Edit Korean Long Description',
    KOREANSHORT_KO: 'Edit Korean Description',
    PORTUGESELONG_PT: 'Edit Portugese Long Description',
    PORTUGESESHORT_PT: 'Edit Portugese Description',
    SPANISHLONG_ES: 'Edit Spanish Long Description',
    SPANISHSHORT_ES: 'Edit Spanish Description',
  };

  return permissions[permission] || permission;
}

export default permissionDescription;