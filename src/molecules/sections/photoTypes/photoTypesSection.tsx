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

  const images = [
    {background: styles.circleBackgroundBlue, image:  viewing},
    {background: styles.circleBackgroundPeople, image:  cat},
    {background: styles.circleBackgroundOrange, image:  sara},
    {background: styles.circleBackgroundBlue, image:  design},
    {background: styles.circleBackgroundPeople, image:  fuji},
  ].map((item, i) => (
    <div key={i} className={styles.picturesSectionIconsItem}>
      <div className={styles.square}>
        <img src={item.image} id={'test'} />
        <div className={`${styles.circleBackground} ${item.background}`} />
      </div>
    </div>
  ));

  return (
    <section className={styles.picturesSection}>
      <div className={styles.picturesSectionContainer}>
        <h2>Photo types ...</h2>
        <div className={styles.picturesSectionIcons}>
          {images}
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
