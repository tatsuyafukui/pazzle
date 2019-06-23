import React, { Component } from 'react';
import Header from '../organisms/header/header';
import Main from '../organisms/main/main';

class Top extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <h1>image</h1>
        <h1>upload</h1>
        <h1>selection</h1>
      </div>
    );
  }
}

export default Top;
