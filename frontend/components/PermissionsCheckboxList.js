import React, { Component } from 'react';
import styled from 'styled-components';

import hasPermission from '../lib/hasPermission';
import permissionDescription from '../lib/permissionDescription';

const UlStyled = styled.ul`
  border-top: 1px solid black;
  padding: 1rem 0.2rem 0.2rem 2rem;
`;

const ButtonStyled = styled.button`
  height: 50px;
  width: 300px;
  margin-left: 2rem;
  background-color: ${props => props.theme.red};
  color: white;
  border: none;
`;

class PermissionsCheckboxList extends Component {
  state = {
    ADMIN: false,
    USER: false,
    CREATE: false,
    UPDATE: false,
    DELETE: false,
    EXPORT: false,
    PERMISSIONUPDATE: false,
    CHINESELONG_ZH_CN: false,
    CHINESESHORT_ZH_CN: false,
    CHINESETLONG_ZH_TW: false,
    CHINESETSHORT_ZH_TW: false,
    DANISHLONG_DA: false,
    DANISHSHORT_DA: false,
    DUTCHLONG_NL: false,
    DUTCHSHORT_NL: false,
    ENGLISHLONG_EN: false,
    ENGLISHSHORT_EN: false,
    FRENCHLONG_FR: false,
    FRENCHSHORT_FR: false,
    GERMANLONG_DE: false,
    GERMANSHORT_DE: false,
    ITALIANLONG_IT: false,
    ITALIANSHORT_IT: false,
    JAPANESELONG_JA: false,
    JAPANESESHORT_JA: false,
    KOREANLONG_KO: false,
    KOREANSHORT_KO: false,
    PORTUGESELONG_PT: false,
    PORTUGESESHORT_PT: false,
    SPANISHLONG_ES: false,
    SPANISHSHORT_ES: false,
  }

  componentWillMount() {
    Object.keys(this.state).map(permission => {
      if (hasPermission(this.props.user, permission)) {
        this.setState({
          [permission]: !this.state[permission]
        })
      }
    })
  }

  checkboxToggle = (permission) => {
    this.setState({
      [permission]: !this.state[permission]
    })
  }

  // accepts the prop 'user', which contains the user, id, name, permissons
  render() {

    return (
      <>
      <UlStyled>
        {Object.keys(this.state).map(permission => {
          if (this.state[permission]) {
            return <><label key={permission}><input type='checkbox' checked onClick={() => {this.checkboxToggle(permission)}}></input>{permissionDescription(permission)}</label><br></br></>
          } else {
            return <><label key={permission}><input type='checkbox' onClick={() => {this.checkboxToggle(permission)}}></input>{permissionDescription(permission)}</label><br></br></>
          }
        })} 
      </UlStyled>
      <ButtonStyled onClick={console.log('do the update')}>Update</ButtonStyled>
      </>
    );
  }
}

export default PermissionsCheckboxList;