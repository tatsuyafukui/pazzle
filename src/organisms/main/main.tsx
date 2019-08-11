import React from 'react';
import styles from './main.css';

interface IProps {
  title: string;
}

const Main: React.FC = props => {
  return <main className={styles.main}>{props.children}</main>;
};

export default Main;
