import React, { Component } from 'react';
import { markdown } from 'markdown';
import marked from 'marked';
import styled from 'styled-components';
import sanitizeHTML from 'sanitize-html';

const MarkdownTextField = styled.div`
  .input-output {
    display: flex;
  }

  textarea {
    width: 48%;
    min-height: 150px;
    box-sizing: border-box;
    display: inline-block;
  }
  .md-output {
    width: 50%;
    margin-left: 2%;
    min-height: 150px;
    box-sizing: border-box;
    display: inline-block;
    padding-left: 5px;
    outline: 1px dotted lightgrey;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  }
`;

marked.setOptions({
  sanitize: true,
  sanitizer: sanitizeHTML,
})

class MarkdownField extends Component {
  state = {
    markdown: '',
  };

  inputToState = (e) => {
    this.props.getMarkdownInput(e.target); //passed the event target to the method in parent component to write input to state in parent
    this.setState({
      [e.target.name]: e.target.value,
      markdown: marked(e.target.value),
    });
  };

  displayMD = () => {
    return { __html: this.state.markdown }
  };

  render() {
    return (
      <MarkdownTextField>
        <div className='input-output'>
          <textarea
            type='text'
            name={this.props.name}
            placeholder='Enter long description here. Use markdown to format text. You can preview output to the right.'
            onChange={this.inputToState}
          ></textarea>
          <div dangerouslySetInnerHTML={this.displayMD()} className='md-output'></div>
        </div>
      </MarkdownTextField >
    );
  }
}

export default MarkdownField;