import React from 'react';
import styles from './styles.css';
import { clickLogin } from '../../modules/auth';


const GetStartedButton: React.FC<React.AllHTMLAttributes<HTMLElement>> = props => {
  return (
    <div className={props.className} {...props}>
      <button type={'button'} onClick={props.onClick}>
        <div />
        Get Started
      </button>
    </div>
  );
};

GetStartedButton.defaultProps = {
  onClick: () => {},
};

export default GetStartedButton;
