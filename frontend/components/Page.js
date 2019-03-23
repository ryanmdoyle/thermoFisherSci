import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from '../components/Meta';

const theme = {
  backgroundColor: '#FFFFFF',
  lightGrey: '#F3F3F3',
  black: '#333333',
  red: '#EE3033',
  blue: '#1D8AE7',
  maxWidth: 900
};

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    background-color: white;
    font-family: 'Helvetica';
  }
`;

const StyledPage = styled.div`
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;
class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <GlobalStyle />
          <Meta />
          {/* Put Header with Nav here */}
          <Inner>
            {this.props.children}
          </Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;