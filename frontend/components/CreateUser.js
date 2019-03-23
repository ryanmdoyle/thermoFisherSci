import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { createSignalIfSupported } from 'apollo-link-http-common';

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

class CreateUser extends Component {
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
            <form
              method='POST'
              onSubmit={async e => {
                e.preventDefault();
                await addUser();
                this.setState({ name: '', email: '', password: '' });
              }}
            >
              <label htmlFor='name'>
                name
                <input
                  type='text'
                  name='name'
                  placeholder='name'
                  value={this.state.name}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor='email'>
                email
                <input
                  type='email'
                  name='email'
                  placeholder='email'
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor='password'>
                password
                <input
                  type='password'
                  name='password'
                  placeholder='password'
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
              <input type='submit' />
            </form>
          )
        }}
      </Mutation>

    );
  }
}

export default CreateUser;