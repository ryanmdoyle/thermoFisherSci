function csvToObject(string) {
  const headersString = string.substring(0, string.indexOf('\n'));
  const contentString = string.substring(string.indexOf('\n')+1, string.length);
  
  const headers = headersString.split(',');
  const content = contentString.split('Part\n');
  // creates array with each item in array an individual item (no headers)
  const contentRows = content.map(row => {
    return row.split(',');
  })
  
  // create an object that holds all data
  // create an object that 
}

export default csvToObject;