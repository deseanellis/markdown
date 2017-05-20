import React, { Component } from 'react';
import marked from 'marked';

class TextArea extends Component {
  constructor(props){
    super(props);


  }
  onTextAreaChange(event) {
    let markdownConverted = marked(event.target.value);
    this.props.onMarkdownChange(markdownConverted);
  }

  render(){
    return(
        <textarea onChange={(event) => this.onTextAreaChange(event)} />
    );
  }
}

export default TextArea;
