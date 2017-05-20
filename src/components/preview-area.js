import React, { Component } from 'react';

class PreviewArea extends Component {
  constructor(props) {
    super(props);

  }
  render(){
    return(
      <div dangerouslySetInnerHTML={{__html: this.props.text}} className="preview-area"></div>
    );
  }
}

export default PreviewArea;
