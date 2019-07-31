import React from 'react';

interface IProps {
  type: 'text' | 'email' | 'password' | 'file' | 'submit';
  name: string;
  className: string;
  changeFileHandler: (event: React.FormEvent<HTMLInputElement>) => void;
  value: string | number | undefined | string[];
}

const Input: React.FC<IProps> = props => {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        className={props.className}
        onChange={props.changeFileHandler}
        value={props.value}
      />
    </>
  );
};

export default Input;
