import React, { Component } from 'react';
import { markdown } from 'markdown';
import marked from 'marked';
import styled from 'styled-components';
import sanitizeHTML from 'sanitize-html';

const MarkdownTextField = styled.div`
  textarea {
    width: 40%;
    min-height: 250px;
    display: inline-block;
  }
  .md-output {
    width: 40%;
    padding-left: 50px;
    display: inline-block;
  }
`;

marked.setOptions({
  sanitize: true,
  sanitizer: sanitizeHTML(),
})

class MarkdownField extends Component {
  state = {
    input: '',
    markdown: '',
  };

  inputToState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      markdown: marked(e.target.value),
    });
  };

  displayMD = () => {
    return { __html: sanitizeHTML(this.state.markdown) }
  };

  render() {
    return (
      <MarkdownTextField>
        <h2>Label here</h2>
        <textarea
          type='text'
          name='input'
          placeholder='input'
          onChange={this.inputToState}
        ></textarea>
        <div dangerouslySetInnerHTML={this.displayMD()}></div>
      </MarkdownTextField >
    );
  }
}

export default MarkdownField;