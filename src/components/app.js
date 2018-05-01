import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import CommentBox from './comment_box';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CommentBox />
      </div>
    );
  }
}
