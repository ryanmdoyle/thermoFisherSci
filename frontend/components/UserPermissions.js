import React, { Component } from 'react';
import styled from 'styled-components';

import PermissionsCheckboxList from './PermissionsCheckboxList';
import DropdownStyled from './styles/DropdownStyled';

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
          <h4 onClick={() => this.togglePermissions()}>
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