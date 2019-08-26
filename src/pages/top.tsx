import React from 'react';
import Header from '../organisms/header/header';
import Main from '../organisms/main/main';
import UploadForm from '../molecules/forms/uploadForm/uploadForm';
import ImageList from '../molecules/lists/imageList/imageList';
import Profile from '../organisms/Profile';
import Heading from '../atoms/Heading';

const Top: React.FC = props => {
  return (
    <div>
      <Header />
      <Main>
        <Profile/>
        <Heading level={2} visualLevel={2} className={''} >
          scscsc
        </Heading>

        <UploadForm {...props} />
        <ImageList />
      </Main>
    </div>
  );
};

export default Top;
