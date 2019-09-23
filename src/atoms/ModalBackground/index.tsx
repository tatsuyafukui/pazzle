import React from 'react';
import styles from './styles.css';

const ModalBackground: React.FC<React.AllHTMLAttributes<HTMLElement>> = props => (
  <div className={styles.root} {...props} />
);

export default ModalBackground;
