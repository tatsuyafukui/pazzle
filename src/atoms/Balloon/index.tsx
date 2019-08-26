import React from 'react';
import styles from './styles.css'

const Balloon: React.FC<any> = (props) => (
  <span className={styles.balloon} >{props.children}</span>
);

export default Balloon;
