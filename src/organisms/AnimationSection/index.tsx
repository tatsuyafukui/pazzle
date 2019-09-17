import React from 'react';
import * as styles from './styles.css';
import { clickLogin } from '../../modules/auth';
import { useDispatch } from 'react-redux';
import getStartedStyle from '../../molecules/GetStartedButton/styles.css';
import GetStartedButton from '../../molecules/GetStartedButton';
import Heading from '../../atoms/Heading';
import Section from '../../molecules/Section';

const AnimationSection: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <Section>
      <div className={styles.sectionOrangeBackground}>
        <div className={styles.sectionOrangeMessageBlock}>
          <div>
            <Heading level={1} className={styles.heading} >
              没頭する時間
              <br />
              作り上げる達成感
            </Heading>
          </div>
          <GetStartedButton
            onClick={() => {dispatch(clickLogin())}}
            className={getStartedStyle.sectionOrangeMessageBlockButton}
          />
        </div>
        <div className={styles.sectionOrangeAnimationBlock}>
          <div className={styles.near} />
          <div className={styles.middle} />
          <div className={styles.far} />
        </div>
      </div>
    </Section>
  );
};

export default AnimationSection;
