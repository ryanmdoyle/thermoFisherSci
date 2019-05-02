import React, { Component } from 'react';
import styled from 'styled-components';

const DropdownStyled = styled.div`
  .user__container {
    box-sizing: border-box;
    box-shadow: 0 0 0rem 0.07rem ${props => props.theme.black};
    border-radius: 0.2rem;
    margin-bottom: 1rem;
    padding: 0 1rem 0 1rem;
  }
  .user__container:hover {
    z-index: 300;
    border: none;
    box-shadow: 0 0 0.2rem 0.1rem ${props => props.theme.red};
  }

  h4 {
    margin: 0 0;
    padding: 1rem 0;
  }

  ul {
    border-top: 1px solid black;
    padding: 1rem 0.2rem 0.2rem 2rem;
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
        <div className='user__container'>
          <h4  onClick={() => this.togglePermissions()}>
            {this.state.showPermissions ? <i className='up'></i>:  <i className='down'></i>}
            {this.props.name}
          </h4>
          {this.state.showPermissions && 
            <ul>
             {this.props.permissions.map(permission => {
               return (
                 <>
                  <label><input type='checkbox'></input>{permission}</label>
                  <br></br>
                 </>
               )
             })}
            </ul>
          }
        </div> 
      </DropdownStyled>
    );
  }
}

export default UserPermissions;