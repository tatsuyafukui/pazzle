import React, { Component } from 'react';
import * as styles from './uploadForm.css';

class UploadForm extends Component {
  render() {
    return (
      <form className={styles.form}>
        <input type={'file'} />
        <button type={'submit'}>送信</button>
      </form>
    );
  }
}

export default UploadForm;
