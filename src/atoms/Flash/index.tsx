import React, { useEffect } from 'react';
import styles from './styles.css';
import { useDispatch } from 'react-redux';
import { hiddenFlash } from '../../modules/ui';

interface IProps extends React.AllHTMLAttributes<HTMLElement> {
  count: number;
}

const Flash: React.FC<IProps> = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(hiddenFlash());
    }, props.count);
  }, [dispatch, props.count]);

  return <div className={styles.root}>{props.children}</div>;
};

export default Flash;
