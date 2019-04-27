import React, { Component } from 'react';
import Router from 'next/router';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import FormStyle from './styles/FormStyle';
import { CURRENT_USER_QUERY } from './User'

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Mutation mutation={LOGIN_MUTATION} variables={this.state} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
        {(signin, { data, error, loading }) => (
          <FormStyle
            method='POST'
            onSubmit={async e => {
              e.preventDefault();
              await signin();
              Router.push('/parts'); //redirects to parts page after login successful
            }}
          >
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.saveToState}
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.saveToState}
            />
            <input type='submit' className='submit-button' />
          </FormStyle>
        )}
      </Mutation>
    );
  }
}

export default LoginForm;