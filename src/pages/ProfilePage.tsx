import React from 'react';
import Header from '../organisms/Header';
import Main from '../organisms/main/main';
import Profile from '../organisms/Profile';
import { useSelector } from 'react-redux';
import Section from '../molecules/Section';
const userSelector = (state: any) => state.authReducer.user;

const ProfilePage: React.FC = props => {
  const user = useSelector(userSelector);

  return (
    <div>
      <Header />
      <Main>
        <Section>
          <div>
            <div>
              <Profile
                username={user.displayName}
                profileURL={user.photoURL}
                email={user.email}
                twitterLink={`https://twitter.com/intent/user?user_id=${user.providerData[0].uid}`}
              />
            </div>
          </div>
        </Section>
      </Main>
    </div>
  );
};

export default ProfilePage;
