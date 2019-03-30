import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Head = styled.nav`
  display: flex;
  width: 100vw;
  height: 40px;
  margin: 0;
  padding: 1rem;
  background-color: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.darkGrey};
  img {
    height: 35px;
  }
`

class Header extends Component {

  icon = (name) => fs.readFileSync(`./public/${name}`);

  render() {
    return (
      <Head>
        <img src='/static/tfs-logo-color.png' alt='logo'></img>
        <Nav />
      </Head>
    );
  }
}

export default Header;