import React from 'react';
import * as styles from './styles.css';

const Section: React.FC<React.AllHTMLAttributes<HTMLElement>> = props => {
  return (
    <section className={styles.root} {...props}>
      <div className={styles.rootContainer}>{props.children}</div>
    </section>
  );
};

export default Section;
