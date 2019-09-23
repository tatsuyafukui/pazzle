import React from 'react';
import Img from '../../atoms/Img';
import styles from './styles.css';

const DisplayPreview: React.FC<React.AllHTMLAttributes<HTMLElement>> = props => {
  return (
    <div className={styles.root}>
      <Img src={props.src} alt={'preview'} />
    </div>
  );
};

export default DisplayPreview;
