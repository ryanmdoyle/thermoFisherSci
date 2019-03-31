import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from '../components/Meta';
import Header from './Header';

const theme = {
  backgroundColor: '#FFFFFF',
  lightGrey: '#F3F3F3',
  darkGrey: '#4A4A4A',
  black: '#333333',
  red: '#EE3033',
  blue: '#1D8AE7',
  maxWidth: 900
};

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: white;
    font-family: "Helvetica","Roboto","Segoe UI","Arial","sans-serif";
    font-size: 16px;
    color: ${props => props.theme.black}
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h1 {
    font-size: 2.1rem;
    font-weight: 300;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 300;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 300;
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
          <Header />
          <Inner>
            {this.props.children}
          </Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;