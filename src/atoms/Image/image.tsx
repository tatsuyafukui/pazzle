import React from 'react';
import styles from './image.css';

interface IProps {
  src: string;
  alt: string;
}

const Image: React.FC<IProps> = props => {
  return (
    <>
      <img {...props} />
    </>
  );
};

export default Image;
