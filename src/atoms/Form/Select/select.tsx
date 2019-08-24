import React, { ChangeEvent } from 'react';
import * as styles from './select.css';
import { IOption } from '../../../types';

interface IProps {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: IOption[];
  color: string;
}

const Select: React.FC<IProps> = props => {
  const options = props.options.map((option, index) => {
    return (
      <option key={index} value={option.value}>
        {option.content}
      </option>
    );
  });

  return (
    <select onChange={props.onChange} className={`${styles.select} ${props.color}`}>
      {options}
    </select>
  );
};

export default Select;
