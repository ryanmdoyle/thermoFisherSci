import React, { Component } from 'react';
import { markdown } from 'markdown';
import styled from 'styled-components';

const MarkdownTextField = styled.div`
  textarea {
    width: 50%;
    min-height: 250px;
  }
  div {
    width: 50%;
    padding-left: 50px;
  }
`;

class MarkdownField extends Component {
  state = {
    input: '',
    markdown: '',
  };

  inputToState = (e) => {
    this.setState({[e.target.name]: e.target.value });
  };

  render() {
    return (
      <MarkdownTextField>
        <h2>Label here</h2>
        <textarea
          type='text'
          name='chineseLong_zh_cn'
          placeholder='chineseLong_zh_cn'
          onChange={this.inputToState}
        ></textarea>
      </MarkdownTextField>
    );
  }
}

export default MarkdownField;