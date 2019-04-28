import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Router from 'next/router';
import nprogress from 'nprogress'

Router.onRouteChangeStart = () => {
  nprogress.start();
}
Router.onRouteChangeComplete = () => {
  nprogress.done();
}
Router.onRouteChangeError = () => {
  nprogress.done();
}

const Head = styled.nav`
  display: flex;
  width: 100vw;
  box-sizing: border-box;
  padding: 0.75rem;
  height: 60px;
  margin: 0;
  background-color: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.darkGrey};
  img {
    height: 35px;
    margin: auto auto 0 0;;
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