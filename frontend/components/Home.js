import React, { Component } from 'react';
import User from './User';
import LoginForm from './LoginForm';
import Parts from './Parts';

class Home extends Component {
  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <>
            {me && (<Parts />)}
            {!me && (<LoginForm />)}
          </>
        )}
      </User>
    );
  }
}

export default Home;