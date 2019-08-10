import React from 'react';
import Header from '../organisms/header/header';
import Main from '../organisms/main/main';

const NotFound: React.FC = () => {
  return (
    <div>
      <Header />
      <Main>
        <h1>404</h1>
        <h1>このページは見つかりませんでした</h1>
      </Main>
    </div>
  );
};

export default NotFound;
