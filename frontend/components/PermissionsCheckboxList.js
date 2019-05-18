import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import styled from 'styled-components';
import gql from 'graphql-tag';

import hasPermission from '../lib/hasPermission';
import permissionDescription from '../lib/permissionDescription';

const UlStyled = styled.ul`
  margin-top: 0;
  border-top: 1px solid black;
  padding: 1rem 0.2rem 0.2rem 2rem;
  input {
    height:1.2rem;
  }
`;

const ButtonStyled = styled.button`
  height: 50px;
  width: 300px;
  margin-left: 2rem;
  background-color: ${props => props.theme.red};
  color: white;
  border: none;
  font-size: 1rem;
`;

//permissions must be conveted to string and parsed on server into object.
const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation UPDATE_PERMISSIONS_MUTATION($permissions: [Permission!]) {
    updateUserPermissions(permissions: $permissions) {
      id
    }
  }
`;

const possiblePermissions = [
  'ADMIN',
  'USER',
  'CREATE',
  'UPDATE',
  'DELETE',
  'EXPORT',
  'PERMISSIONUPDATE',
  'CHINESELONG_ZH_CN',
  'CHINESESHORT_ZH_CN',
  'CHINESETLONG_ZH_TW',
  'CHINESETSHORT_ZH_TW',
  'DANISHLONG_DA',
  'DANISHSHORT_DA',
  'DUTCHLONG_NL',
  'DUTCHSHORT_NL',
  'ENGLISHLONG_EN',
  'ENGLISHSHORT_EN',
  'FRENCHLONG_FR',
  'FRENCHSHORT_FR',
  'GERMANLONG_DE',
  'GERMANSHORT_DE',
  'ITALIANLONG_IT',
  'ITALIANSHORT_IT',
  'JAPANESELONG_JA',
  'JAPANESESHORT_JA',
  'KOREANLONG_KO',
  'KOREANSHORT_KO',
  'PORTUGESELONG_PT',
  'PORTUGESESHORT_PT',
  'SPANISHLONG_ES',
  'SPANISHSHORT_ES',
];

class PermissionsCheckboxList extends Component {

  state = {
    permissions: this.props.user.permissions,
  };

  checkboxToggle = (e) => {
    const permissionCheckbox = e.target;
    let updatedPermissions = [...this.state.permissions];
    if (permissionCheckbox.checked) {
      updatedPermissions.push(permissionCheckbox.value);
    } else {
      updatedPermissions = updatedPermissions.filter(permission => permission !== permissionCheckbox.value);
    }
    this.setState({
      permissions: updatedPermissions,
    })
  }

  // accepts the prop 'user', which contains the user, id, name, permissons
  render() {

    return (
      <>
        <Mutation mutation={UPDATE_PERMISSIONS_MUTATION} variables={{ permissions: this.state.permissions, id: this.props.user.id }}>
          {(update, { data }) => (
            <>
              <UlStyled>
                {possiblePermissions.map(permission => {
                  return (
                    <div key={permission}>
                      <label>
                        <input
                          type='checkbox'
                          value={permission}
                          checked={this.state.permissions.includes(permission)}
                          onClick={this.checkboxToggle}></input>
                        {/* permissionsDescription transforms the DB name to readable description */}
                        {permissionDescription(permission)}
                      </label>
                      <br></br>
                    </div>
                  )
                })}
              </UlStyled>
              <ButtonStyled onClick={() => { update() }}>Update Permissions</ButtonStyled>
            </>
          )}
        </Mutation>
      </>
    );
  }
}

export default PermissionsCheckboxList;