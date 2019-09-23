import React from 'react';
import * as styles from './select.css';
import { IOption } from '../../types';

interface IProps extends React.AllHTMLAttributes<HTMLSelectElement> {
  options: IOption[];
  color: string;
}

const Select: React.FC<IProps> = props => {
  const { options } = props;

  const optionList = props.options.map((option, index) => {
    return (
      <option key={index} value={option.value}>
        {option.content}
      </option>
    );
  });

  return (
    <select {...props} onChange={props.onChange} className={`${styles.select} ${props.className}`}>
      {optionList}
    </select>
  );
};

export default Select;
