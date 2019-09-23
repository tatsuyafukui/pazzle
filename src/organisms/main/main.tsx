import React from 'react';
import styles from './main.css';

const Main: React.FC<React.AllHTMLAttributes<HTMLElement>> = props => {
  return (
    <main {...props} className={styles.main}>
      {props.children}
    </main>
  );
};

export default Main;
