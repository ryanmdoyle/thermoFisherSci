import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavStyled = styled.nav`
  display: flex;
`

class Nav extends Component {
  render() {
    return (
      <NavStyled>
        <a>Link 1</a>
        <a>Link 2</a>
        <a>Link 3</a>
        <a>Link 4</a>
        <a>Link 5</a>
      </NavStyled>
    );
  }
}

export default Nav;