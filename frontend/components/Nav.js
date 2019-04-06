import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import User from './User';
import SignoutButton from './SignoutButton';

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
        <User>
          {data => {
            console.log(data)
            return <p>User here!</p>
          }}
        </User>
      </NavStyled>
    );
  }
}

export default Nav;