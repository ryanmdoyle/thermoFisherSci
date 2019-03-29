import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Head = styled.nav`
  display: flex;
  width: 100vw;
  height: 60px;
  margin: 0;
  padding: 1rem;
  background-color: ${props => props.theme.lightGrey};
  border-bottom: 1px solid ${props => props.theme.darkGrey};
`

class Header extends Component {
  render() {
    return (
      <Head>
        <a>LOGO</a>
        <Nav />
      </Head>
    );
  }
}

export default Header;