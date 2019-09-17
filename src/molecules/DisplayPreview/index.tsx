import React from 'react';
import Heading from '../../atoms/Heading';
import Img from '../../atoms/Img';
import styles from './styles.css';

const DisplayPreview: React.FC<React.AllHTMLAttributes<HTMLElement>> = props => {
  return (
    <div className={styles.root}>
      {/*<div className={styles.previewHeader}>*/}
      {/*  <Heading visualLevel={3}>Preview</Heading>*/}
      {/*</div>*/}
      <div className={styles.previewBody}>
          <Img src={props.src} alt={'preview'}/>
      </div>
    </div>
  );
};

export default DisplayPreview;
