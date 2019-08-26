import React from 'react';

interface IMyComponentProps extends React.HTMLAttributes<HTMLImageElement> {
  customProp: string;
}

const Img: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img {...props} />
);

export default Img;
