import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import TextArea from './text-area';
import PreviewArea from './preview-area';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      markdownText: ''
    };
  }
  render() {
    return (
      <div>
        <div className="col-xs-6">
          <span>Editor:</span>
          <TextArea onMarkdownChange={(markdownText) => this.setState({markdownText})} />
        </div>
        <div className="col-xs-6">
          <span>Markdown Previewer:</span>
          <PreviewArea  text={this.state.markdownText} />
        </div>
      </div>
    );
  }
}
