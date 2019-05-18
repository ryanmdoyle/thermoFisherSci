import React from 'react';
import sanitize from 'sanitize-html';

const MarkdownView = (props) => {
  function getHTML() {
    const html = sanitize(props.html, {
      allowedTags: sanitize.defaults.allowedTags.concat(['h1', 'h2'])
    });
    return { __html: html }
  }

  return (
    <div dangerouslySetInnerHTML={getHTML()}></div>
  );
};

export default MarkdownView;