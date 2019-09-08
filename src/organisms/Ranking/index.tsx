import React from 'react';
import styles from './styles.css';
import Section from '../../molecules/Section';
import Heading from '../../atoms/Heading';

const Ranking: React.FC = () => {

  return (
    <Section className={styles.root}>
      <div className={styles.rootInner}>
        <div>
          <Heading>自己ベスト</Heading>

        </div>
        <div>hard</div>
        <div>3</div>
      </div>
    </Section>
  );
};

export default Ranking;
