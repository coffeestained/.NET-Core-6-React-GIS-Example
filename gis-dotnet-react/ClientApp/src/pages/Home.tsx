import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import HomeMD from './Home.en.md';

export default class Home extends Component {
  static displayName = Home.name;
  private homeMarkdown = HomeMD;

  constructor(props) {
    super(props)

    this.state = { terms: null }
  }

  componentWillMount() {
    fetch(this.homeMarkdown).then((response) => response.text()).then((text) => {
      console.log(text)
      this.setState({ markdown: text })
    })
  }

  render() {
    return (
      <ReactMarkdown children={this.state.markdown} />
    );
  }
}
