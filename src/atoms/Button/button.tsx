import React from 'react';
import styles from './button.css';

interface IProps {
  type: 'submit' | 'button';
}

const Button: React.FC<IProps> = props => {
  return (
    <button type={props.type} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
