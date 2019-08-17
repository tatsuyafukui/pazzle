import React from 'react';
import Header from '../organisms/header/header';
import Main from '../organisms/main/main';
import UploadForm from '../molecules/forms/uploadForm/uploadForm';
import ImageList from '../molecules/lists/imageList/imageList';



const Top: React.FC = (props) => {
  return (
    <div>
      <Header />
      <Main>
        <h1>パズルを登録</h1>
        <UploadForm {...props} />
        <ImageList />
      </Main>
    </div>
  );
};

export default Top;
