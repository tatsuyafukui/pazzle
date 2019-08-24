import React from 'react';
import * as styles from './Loading.css';

const Loading: React.FC = () => {
  return (
    <div className={styles['loader-holder']}>
      <div className={styles['leaf-special-loader']}>
        <div className={styles.circle} />
        <div className={styles.triangle} />
        <div className={styles.rectangle} />
      </div>
    </div>
  );
};

export default Loading;
