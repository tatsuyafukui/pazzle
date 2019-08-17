import React from 'react';
import Header from '../organisms/header/header';
import Main from '../organisms/main/main';
import Loading from '../atoms/Loading/Loading';
import LandingMain from '../organisms/main/landingMain/landingMain';

const Landing: React.FC = () => {
  return (
    <div>
      <Header />
      <LandingMain/>
      <Main>

      </Main>
    </div>
  );
};

export default Landing;
