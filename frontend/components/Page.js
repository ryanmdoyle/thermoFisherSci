import React, { Component } from 'react';
import { styled, createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  html {
    margin: 0;
    background-color: red;
  }
`

class Page extends Component {
  render() {
    return (
      <div>
        <globalStyle />
        {this.props.children}
      </div>
    );
  }
}

export default Page;