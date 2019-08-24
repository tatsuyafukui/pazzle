import React from 'react';
import styles from './index.css';
import { clickLogin } from '../../../modules/auth';

interface IProps {
  onClick?: () => void;
  className: string;
}

const GetStartedButton: React.FC<IProps> = props => {
  return (
    <div className={props.className}>
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
