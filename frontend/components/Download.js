import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Parser } from 'json2csv';
import { PARTS_QUERY } from './Parts';

class Download extends Component {
  download = (parts) => {
    const headers = Object.keys(parts[0]); // gets headers from first object

    const json2csvParser = new Parser({ headers }); //sets column headers
    const csv = json2csvParser.parse(parts); //has data for columns

    // add datatype and encode to URI
    const csvWithDataType = 'data:text/csv;charset=utf-8,' + csv;
    const downloadData = encodeURI(csvWithDataType);

    // create an element that links to the download data as an href
    const link = document.createElement('a');
    link.setAttribute('href', downloadData);
    link.setAttribute('download', 'export.csv');
    link.click();
  }

  render() {
    return (
      <Query query={PARTS_QUERY}>
        {({ data: { parts } }) => {
          return (
            <button onClick={() => { this.download(parts) }}>
              Download!
            </button>
          )
        }}
      </Query>
    );
  }
}

export default Download;