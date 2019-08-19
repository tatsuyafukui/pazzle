import React from 'react';
import Header from '../organisms/header/header';
import Main from '../organisms/main/main';
import Loading from '../atoms/Loading/Loading';
import LandingMain from '../organisms/main/landingMain/landingMain';
import Footer from '../organisms/footer/footer';

const Landing: React.FC = () => {
  return (
    <div>
      <Header />
      <LandingMain/>
      <Footer/>
    </div>
  );
};

export default Landing;
