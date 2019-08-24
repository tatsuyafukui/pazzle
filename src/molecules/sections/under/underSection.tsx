import React from 'react';
import * as styles from './under.css';
import { clickLogin } from '../../../modules/auth';
import { useDispatch } from 'react-redux';
import obsidian from '../../../public/images/puzzle.png';

const UnderSection: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <section className={styles.underSection}>
      <div className={styles.underSectionContainer}>
        <div className={styles.underSectionInner}>
          <div className={styles.halfLeft}>
            <img src={obsidian} alt={obsidian} />
          </div>
          <div className={styles.halfRight}>
            <div className={styles.halfRightText}>
              <h2>さあ、一緒に作ろう!</h2>
            </div>
            <div className={styles.halfRightTextButton}>
              <button  onClick={() => dispatch(clickLogin())}>
                Get Started
                <div />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.underSectionEndBlock} />
    </section>
  );
};

export default UnderSection;
