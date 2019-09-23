import React, { useEffect } from 'react';
import * as styles from './styles.css';
import moment from 'moment';
import 'moment/locale/ja';

interface IProps extends React.AllHTMLAttributes<HTMLTimeElement> {
  format?: string;
}

export const TimePresenter: React.FC<IProps> = props => <time {...props} />;

export const TimeContainer: React.FC<IProps & { presenter: (props: any) => any }> = props => {
  if (props.children === null || props.children === undefined) return;
  const value = parseInt(props.children.toString(), 10);

  let children;
  if (!isValid(value)) {
    children = '有効な値ではありません';
  } else {
    children = formatDatetime(value);
  }

  if (!props.dateTime) {
    props.dateTime = formatDatetime(value);
  }

  return props.presenter({ children, ...props });
};

const Time: React.FC<IProps> = props => (
  <TimeContainer presenter={presenterProps => <TimePresenter {...presenterProps} />} {...props} />
);

export default Time;

moment.locale();

const isValid = (unixTime: number) => {
  return moment(unixTime, 'x', true).isValid();
};

const formatDatetime = (dateTime: number, format = 'YYYY-MM-DDTHH:mm') => {
  return moment(dateTime).format(format);
};
