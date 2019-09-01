import React from 'react';
import Img from '../../atoms/Img';
import profileImage from '../../public/images/dammy.jpg'

interface IProps extends React.AllHTMLAttributes<HTMLElement>{
  username?: string;
  profileURL: string;
  twitterLink?: string;
  email?: string;
}
const Profile: React.FC<IProps> = (props) => {

  return (
    <div>
      <div>
        <div>
          <Img src={props.profileURL.split('_normal').join('')} />
        </div>
        <section>
          <div>
            <h2>{props.username}</h2>
            <h2>{props.email}</h2>
            <a href={'https://twitter.com/intent/tweet?text=hello+world'} target={'__blank'}>tweet</a>
            <a href={props.twitterLink} target={'__blank'}>link</a>
            <button>tweet</button>
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

Profile.defaultProps = {
  profileURL: profileImage
};

export default Profile;
