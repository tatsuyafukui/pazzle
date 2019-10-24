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
      {/*<Header />*/}
      <Main>
        <Section>
          <div>
            <div>
              <Profile
                username={user.displayName}
                profileURL={user.photoURL}
                email={user.email}
                twitterLink={`https://twitter.com/intent/user?user_id=${user.providerData[0].uid}`}
              />https://twitter.com/intent/tweet?source=webclient&%2Ftwitt5A02581%2597%25E3%2581%259F%25EF%25BC%2581%26source%3Dwebclient&hashtags=Progate
            </div>
          </div>
        </Section>
      </Main>
    </div>
  );
};

export default ProfilePage;
