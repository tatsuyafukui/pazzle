import React from 'react';
import styles from './styles.css'

const Balloon: React.FC<React.AllHTMLAttributes<HTMLSpanElement>> = (props) => (
  <span className={[styles.balloon, props.className].join(' ')} {...props}>
    {props.children}
  </span>
);

export default Balloon;
