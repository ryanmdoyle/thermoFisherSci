import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import User from './User';
import Logout from './Logout';
import hasPermission from '../lib/hasPermission';

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  a{
    border-bottom: 2px solid white;
    margin: 0 0.75rem;
    color: ${props => props.theme.black};
    text-decoration: none;
  }
  a:hover {
    border-bottom: 2px solid red;
  }
  button {
    border: none;
    border-bottom: 2px solid white;
    color: ${props => props.theme.black};
    font-size: 1rem;
  }
`;

class Nav extends Component {
  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <NavStyled>
            {me && (
              <>
                <Link href='/parts'>
                  <a>Parts</a>
                </Link>
                <Link href='/createPart'>
                  <a>Add Part</a>
                </Link>
                {hasPermission(me, 'ADMIN') && (
                  <>
                    <Link href='/users'>
                      <a>Users</a>
                    </Link>
                    <Link href='/download'>
                      <a>Download</a>
                    </Link>
                  </>
                )}
                <Logout />
              </>
            )}
            {!me && (
              <React.Fragment>
                <Link href='/signup'>
                  <a>Sign Up</a>
                </Link>
                <Link href='/login'>
                  <a>Log In</a>
                </Link>
              </React.Fragment>
            )}
          </NavStyled>
        )
        }
      </User>
    );
  }
}

export default Nav;