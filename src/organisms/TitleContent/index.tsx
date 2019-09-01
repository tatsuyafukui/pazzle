import React from 'react';
import * as styles from './styles.css';
import { clickLogin } from '../../modules/auth';
import { useDispatch } from 'react-redux';
import GetStartedButton from '../../molecules/getStartedButton';
import getStartedStyle from '../../molecules/getStartedButton/styles.css';
import Heading from '../../atoms/Heading';

const TitleContent: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <Heading level={1}>SLIDE PUZZLE</Heading>
      <GetStartedButton
        style={{marginTop: '10px'}}
        onClick={() => {dispatch(clickLogin())}}
        className={getStartedStyle.landingLogin}
      />
    </div>
  );
};

export default TitleContent;
