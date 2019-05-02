import React, { Component } from 'react';
import styled from 'styled-components';

const DropdownStyled = styled.div`
  .user__container {
    box-sizing: border-box;
    box-shadow: 0 0 0rem 0.07rem ${props => props.theme.black};
    border-radius: 0.2rem;
    margin-bottom: 1rem;
    padding: 0.2rem 1rem 0.5rem 1rem;
  }
  .user__container:hover {
    border: none;
    box-shadow: 0 0 0.2rem 0.1rem ${props => props.theme.red};
  }

  .user__permissions {
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 0.2rem;
    margin-bottom: 1rem;
    padding: 0.2rem 1rem 0.5rem 1rem;
  }

  @media screen and (max-width:600px) {
    .part-header__number {
      width: 25%;
    }
    .part-header__description {
      width: 75%;
    }
  }
`;

class UserPermissions extends Component {
  render() {
    return (
      <DropdownStyled>
        <div className='user__container'>
          <h4>This is the user name</h4>
        </div>
        <div className='user__permissions'>
          <ul>
            <li>Permission 1</li>
            <li>Permission 2</li>
            <li>Permission 3</li>
          </ul>
        </div>
        
      </DropdownStyled>
    );
  }
}

export default UserPermissions;