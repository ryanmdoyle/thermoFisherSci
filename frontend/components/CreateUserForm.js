import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import FormStyle from './styles/FormStyle';

const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      name: $name
      email: $email
      password: $password
    ) {
      id
    }
  }
`;

class CreateUserForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (

      <Mutation
        mutation={CREATE_USER_MUTATION}
        variables={this.state}
      >
        {(addUser, { error, loading }) => {
          return (
            <FormStyle
              method='POST'
              onSubmit={async e => {
                e.preventDefault();
                await addUser();
                this.setState({ name: '', email: '', password: '' });
              }}
            >
              <label htmlFor='name'>
                Name
                <input
                  type='text'
                  name='name'
                  value={this.state.name}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor='email'>
                Email
                <input
                  type='email'
                  name='email'
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor='password'>
                Password
                <input
                  type='password'
                  name='password'
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
              <input type='submit' className='submit-button' />
            </FormStyle>
          )
        }}
      </Mutation>

    );
  }
}

export default CreateUserForm;