import React from 'react';
import styles from './button.css';

interface IProps {
  type: 'submit' | 'button';
  color?: 'red' | 'blue' | 'yellow' | 'facebook' | 'default';
  onClick?: (event: any) => void;
}

const Button: React.FC<IProps> = props => {
  let color = styles.default;
  if(props.color === 'red')color = styles.red;
  if(props.color === 'blue')color = styles.blue;
  if(props.color === 'yellow')color = styles.yellow;
  if(props.color === 'facebook')color = styles.facebook;

  return (
    <button type={props.type} className={`${styles.button} ${color}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  color: 'default',
};



export default Button;
