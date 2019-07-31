import React from 'react';

interface IProps {
  type: 'submit' | 'button';
  className: string;
}

const Button: React.FC<IProps> = props => {
  return (
    <>
      <button type={props.type} className={props.className}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
