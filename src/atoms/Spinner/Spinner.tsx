import React from 'react';
import * as styles from './Spinner.css';

const Spinner: React.FC = () => {
  return (
    <div className={styles.loadContainer}>
      <div className={styles.ldsSpinner}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
