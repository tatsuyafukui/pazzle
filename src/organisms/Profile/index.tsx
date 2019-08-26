import React from 'react';
import Img from '../../atoms/Img';
import profileImage from '../../public/images/dammy.jpg'

const Profile = () => {

  return (
    <div>
      <div>
        <div>
          <Img src={profileImage} />
        </div>
        <section>
          <div>
            <h2>account name</h2>
            <button>edit</button>
            <span>icon</span>
          </div>
          <div>
            <span>clear count</span>
            <span>king count</span>
            <span>king count</span>
          </div>
          <div>
            <h1>user name</h1>
          </div>
        </section>
      </div>
    </div>
  );

};

export default Profile;
