import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from './footer.css';
import charactor from '../../public/images/charactor.jpg';

import { useDispatch, useStore } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

interface IProps {
  title: string;
}

const Footer: React.FC = props => {
  const dispatch = useDispatch();

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
            <p>by Tatsuya Fukui</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
