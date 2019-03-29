import React, { Component } from 'react';
import FormStyle from './styles/FormStyle';

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
      <FormStyle
        method='POST'
        onSubmit={async e => {
          e.preventDefault();
          // add login here!
          // await login();
        }}
      >
        <label htmlFor='email'>email</label>
        <input
          type='email'
          name='email'
          placeholder='email'
          value={this.state.email}
          onChange={this.saveToState}
        />
        <label htmlFor='password'>password</label>
        <input
          type='password'
          name='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.saveToState}
        />
        <input type='submit' className='submit-button' />
      </FormStyle>
    );
  }
}

export default LoginForm;