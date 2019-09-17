import React from 'react';

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
