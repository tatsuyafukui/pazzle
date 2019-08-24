import React from 'react';
import * as styles from './animation.css';
import { clickLogin } from '../../../modules/auth';
import { useDispatch } from 'react-redux';

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
            <div className={styles.sectionOrangeMessageBlockButton}>
              <button onClick={() => dispatch(clickLogin())}>
                Get Started
                <div />
              </button>
            </div>
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
