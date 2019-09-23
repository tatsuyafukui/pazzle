import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

const Anchor: React.FC<IProps> = props => (
  <AnchorContainer {...props} presenter={(presenterProps: any) => <AnchorPresenter {...presenterProps} />} />
);

export default Anchor;

export const AnchorPresenter: React.FC<IProps> = props => {
  return (
    <Link {...props} className={[styles.Anchor, props.className].join(' ')}>
      {props.children}
    </Link>
  );
};

export const AnchorContainer = ({ presenter, ...props }: any) => {
  return presenter({ ...props });
};
