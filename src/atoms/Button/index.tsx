import React from 'react';
import styles from './styles.css';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  return (
    <button {...props} className={[styles.button, props.className].join(' ')}>
      {props.children}
    </button>
  );
};



export default Button;
