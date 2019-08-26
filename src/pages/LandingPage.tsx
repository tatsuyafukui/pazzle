import React from 'react';
import Header from '../organisms/header/header';
import Footer from '../organisms/footer/footer';
import Main from '../organisms/main/main';
import TopSection from '../molecules/sections/top/top';
import PhotoTypesSection from '../molecules/sections/photoTypes/photoTypesSection';
import AnimationSection from '../molecules/sections/animation/animationSection';
import PuzzleSection from '../molecules/sections/puzzle/puzzleSection';
import UnderSection from '../molecules/sections/under/underSection';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Main>
        <TopSection/>
        <PhotoTypesSection/>
        <AnimationSection/>
        <PuzzleSection/>
        <UnderSection/>
      </Main>
      <Footer />
    </div>
  );
};

export default LandingPage;
