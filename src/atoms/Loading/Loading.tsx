import React from 'react';
import * as styles from './Loading.css';

const Loading: React.FC = () => {
  // return (
  //   <div className={styles['loader-holder']}>
  //     <div className={styles['leaf-special-loader']}>
  //       {/*<div className={styles.circle} />*/}
  //       {/*<div className={styles.triangle} />*/}
  //       {/*<div className={styles.rectangle} />*/}
  //       <div className={styles.piece1} />
  //       <div className={styles.piece2} />
  //       <div className={styles.piece3} />
  //       <div className={styles.piece4} />
  //     </div>
  //   </div>
  // );
  return (
      <div className={styles['leaf-special-loader']}>
        <div className={styles.piece1} />
        <div className={styles.piece2} />
        <div className={styles.piece3} />
        <div className={styles.piece4} />
      </div>
  );
};

export default Loading;
