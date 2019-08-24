import React, { useEffect } from 'react';
import * as styles from './photoTypes.css';
import viewing from '../../../public/images/viewing.jpg';
import cat from '../../../public/images/cat.jpg';
import sara from '../../../public/images/sara.jpeg';
import design from '../../../public/images/design.jpg';
import fuji from '../../../public/images/fuji.jpg';
import ScrollReveal, { photoTypes } from '../../../config/scrollReveal';

const PhotoTypesSection: React.FC = () => {
  useEffect(() => {
    photoTypes()
    return () => {
      ScrollReveal().destroy()
    };
  }, []);
  return (
    <section className={styles.picturesSection}>
      <div className={styles.picturesSectionContainer}>
        <h2>Photo types ...</h2>
        <div className={styles.picturesSectionIcons}>
          <div className={styles.picturesSectionIconsItem}>
            <div className={styles.square}>
              <img src={viewing} id={'test'} />
              <div className={`${styles.circleBackground} ${styles.circleBackgroundBlue}`} />
            </div>
          </div>
          <div className={styles.picturesSectionIconsItem}>
            <div className={styles.square}>
              <img src={cat} id={'test'} />
              <div className={`${styles.circleBackground} ${styles.circleBackgroundPeople}`} />
            </div>
          </div>
          <div className={styles.picturesSectionIconsItem}>
            <div className={styles.square}>
              <img src={sara} id={'test'} />
              <div className={`${styles.circleBackground} ${styles.circleBackgroundOrange}`} />
            </div>
          </div>
          <div className={styles.picturesSectionIconsItem}>
            <div className={styles.square}>
              <img src={design} id={'test'} />
              <div className={`${styles.circleBackground} ${styles.circleBackgroundBlue}`} />
            </div>
          </div>
          <div className={styles.picturesSectionIconsItem}>
            <div className={styles.square}>
              <img src={fuji} id={'test'} />
              <div className={`${styles.circleBackground} ${styles.circleBackgroundPeople}`} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.picturesSectionUnderBody}>
        <div className={styles.picturesSectionUnderBodyContainer}>
          <p id={'test'}>
            景色、動物、模様、絵画、パズルに使う題材は自由自在。
            <br />
            好きな画像をアップしてゲームを楽しもう！
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoTypesSection;
