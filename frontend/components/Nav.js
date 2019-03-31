import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  a {
    margin: 0 0.75rem;
    color: ${props => props.theme.black};
    text-decoration: none;
  }
  a:hover {
    color: ${props => props.theme.red};
  }
`;

class Nav extends Component {
  render() {
    return (
      <NavStyled>
        <Link href='/signup'>
          <a>Sign Up</a>
        </Link>
        <Link href='/login'>
          <a>Login</a>
        </Link>
      </NavStyled>
    );
  }
}

export default Nav;