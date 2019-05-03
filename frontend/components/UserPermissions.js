import React, { Component } from 'react';
import styled from 'styled-components';

import PermissionsCheckboxList from './PermissionsCheckboxList';

const DropdownStyled = styled.div`
  .dropdown {
    box-sizing: border-box;
    box-shadow: 0 0 0rem 0.07rem ${props => props.theme.black};
    border-radius: 0.2rem;
    margin-bottom: 1rem;
    padding: 0 1rem 0 1rem;
  }
  .dropdown:hover {
    z-index: 300;
    border: none;
    box-shadow: 0 0 0.2rem 0.1rem ${props => props.theme.red};
  }

  .dropdown__details {
    padding: 0 0 1.5rem 0;
  }

  h4 {
    margin: 0 0;
    padding: 1rem 0;
  }

  i {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.25rem;
  margin-right: 1rem;
  }

  .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
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
  state = {
    showPermissions: false,
  }

  togglePermissions = () => {
    this.setState({
      showPermissions: !this.state.showPermissions
    })
  }

  render() {
    return (
      <DropdownStyled>
        <div className='dropdown'>
          <h4  onClick={() => this.togglePermissions()}>
            {this.state.showPermissions ? <i className='up'></i> : <i className='down'></i>}
            {this.props.user.name}
          </h4>
          {this.state.showPermissions && 
            <div className='dropdown__details'> 
              <PermissionsCheckboxList user={this.props.user} />
            </div>
          }
        </div> 
      </DropdownStyled>
    );
  }
}

export default UserPermissions;

// <><label><input type='checkbox' checked></input>{permission}</label><br></br></>