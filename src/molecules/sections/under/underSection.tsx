import React from 'react';
import * as styles from './under.css';
import { clickLogin } from '../../../modules/auth';
import { useDispatch } from 'react-redux';
import obsidian from '../../../public/images/puzzle.png';
import GetStartedButton from '../../../atoms/Button/getStartedButton';
import getStartedStyle from '../../../atoms/Button/getStartedButton/index.css';

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
            <GetStartedButton
              onClick={() => {dispatch(clickLogin())}}
              className={getStartedStyle.halfRightTextButton}
            />
          </div>
        </div>
      </div>
      <div className={styles.underSectionEndBlock} />
    </section>
  );
};

export default UnderSection;
