import React from 'react';
import styles from './styles.css';
import Txt from '../../atoms/Txt';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerInner}>
          <div className={styles.snsListLine}>
            <a href={'https://twitter.com/ingtaTsuya_0801'} target={'_blank'}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href={'https://www.facebook.com/tatsuya.fukui.980'} target={'_blank'}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <div className={styles.profile}>
            <Txt>by Tatsuya Fukui</Txt>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
