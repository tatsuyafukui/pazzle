import React from 'react';
import Header from '../organisms/Header';
import Main from '../organisms/main/main';
import UploadForm from '../molecules/forms/uploadForm/uploadForm';
import ImageList from '../molecules/lists/imageList/imageList';
import Profile from '../organisms/Profile';
import Heading from '../atoms/Heading';
import { useSelector } from 'react-redux';
const userSelector = (state: any) => state.authReducer.user;

const DashboardPage: React.FC = props => {
  const user = useSelector(userSelector);
  console.log(user.providerData[0].uid)
  console.log(user.uid)

  return (
    <div>
      <Header />
      <Main>
        <Profile
          username={user.displayName}
          profileURL={user.photoURL}
          email={user.email}
          twitterLink={`https://twitter.com/intent/user?user_id=${user.providerData[0].uid}`}
        />
        <Heading level={2} visualLevel={2} className={''} >
          scscsc
        </Heading>
        <UploadForm {...props} />
        <ImageList />
      </Main>
    </div>
  );
};

export default DashboardPage;
