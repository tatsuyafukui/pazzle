import React from 'react';
import Img from '../../atoms/Img';
import profileImage from '../../public/images/dammy.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.css';
import Heading from '../../atoms/Heading';

interface IProps extends React.AllHTMLAttributes<HTMLElement> {
  username?: string;
  profileURL: string;
  twitterLink?: string;
  email?: string;
}
const Profile: React.FC<IProps> = props => {
  return (
    <div className={styles.root}>
      <div className={styles.rootContainer}>
        <div className={styles.imgContainer}>
          <Img
            style={{
              borderRadius: '50%',
              width: 'auto',
              height: '80%',
            }}
            src={props.profileURL.split('_normal').join('')}
          />
        </div>
        <section className={styles.txtContainer}>
          <div style={{ display: 'flex' }}>
            <Heading>{props.username}</Heading>
            <a href={props.twitterLink} target={'__blank'}>
              <FontAwesomeIcon
                style={{
                  backgroundColor: 'rgba(85, 172, 238, 1)',
                  color: 'white',
                  padding: '5px',
                  borderRadius: '50%',
                  marginLeft: '15px',
                }}
                icon={faTwitter}
              />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  profileURL: profileImage,
};

export default Profile;
