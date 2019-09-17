import React from 'react';
import Heading from '../../atoms/Heading';
import styles from './styles.css';

const DisplayTime: React.FC<React.AllHTMLAttributes<HTMLElement>> = props => {
  return (
    <div className={styles.root}>
      <div className={styles.timeHeader}>
        <Heading visualLevel={3}>TIME</Heading>
      </div>
      <div className={styles.timeBody}>
        <div className={styles.timeBest}>
          <Heading level={6} visualLevel={5}>最高記録</Heading>
          <Heading>--:--:--</Heading>
        </div>
        <div className={styles.timePlay}>
          <Heading level={6} visualLevel={5}>タイム</Heading>
          <Heading>--:--:--</Heading>
        </div>
      </div>
    </div>
  );
};

export default DisplayTime;
