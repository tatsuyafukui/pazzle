import React from 'react';
import Header from '../organisms/Header';
import Main from '../organisms/main/main';

const NotFoundErrorPage: React.FC = () => {
  return (
    <div>
      <Main>
        <h1>404</h1>
        <h1>このページは見つかりませんでした</h1>
      </Main>
    </div>
  );
};

export default NotFoundErrorPage;
