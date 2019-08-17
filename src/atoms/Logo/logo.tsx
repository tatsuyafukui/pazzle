import React from 'react';
import * as styles from './logo.css';
import { Link } from 'react-router-dom';
import image from '../../public/images/icon_font2.png';


const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Link to={'/'}>
        <img src={image} alt={'logo'} />
      </Link>
    </div>
  );
};

export default Logo;
