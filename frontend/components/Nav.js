import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  a {
    margin: 0 0.75rem;
  }
`

class Nav extends Component {
  render() {
    return (
      <NavStyled>
        <a>Link 1</a>
        <a>Link 2</a>
        <a>Link 3</a>
        <a>Link 4</a>
        <a>Login</a>
      </NavStyled>
    );
  }
}

export default Nav;