import React from 'react';
import Header from '../organisms/header/header';
import Main from '../organisms/main/main';

const Landing: React.FC = () => {
  return (
    <div>
      <Header />
      <Main>
        <h1>パズルを作ろう</h1>
      </Main>
    </div>
  );
};

export default Landing;
