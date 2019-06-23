import React, { Component } from 'react';
import * as styles from './header.css';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div>
          <h1>パズル</h1>
        </div>
      </div>
    );
  }
}

export default Header;
