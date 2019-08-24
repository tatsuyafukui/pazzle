import React from 'react';
import * as styles from './animation.css';
import { clickLogin } from '../../../modules/auth';
import { useDispatch } from 'react-redux';
import getStartedStyle from '../../../atoms/Button/getStartedButton/index.css';
import GetStartedButton from '../../../atoms/Button/getStartedButton';

const AnimationSection: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <section className={styles.sectionOrange}>
      <div className={styles.sectionOrangeContainer}>
        <div className={styles.sectionOrangeBackground}>
          <div className={styles.sectionOrangeMessageBlock}>
            <div>
              <p>
                没頭する時間。
                <br />
                作り上げる達成感。
              </p>
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
      </div>
    </section>
  );
};

export default AnimationSection;
