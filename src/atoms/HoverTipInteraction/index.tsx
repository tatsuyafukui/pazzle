import React from 'react';
import styles from './styles.css';
import { IContainerProps } from '../../types';

const HoverTipInteractionPresenter: React.FC<React.AllHTMLAttributes<HTMLElement>> = props => (
  <span className={[styles.root, props.className].join(' ')} {...props}>
    {props.children}
  </span>
);

const HoverTipInteractionContainer: React.FC<IContainerProps> = props => {
  const children = React.Children.map(props.children, (child: any) => {
    if (child && child.type.displayName === 'Tip') {
      const grandChild = React.Children.only(child.props.children);
      return React.cloneElement(grandChild, {
        className: [styles.tip, grandChild.props.className].join(' '),
      });
    }
    return child;
  });
  return props.presenter({ children, ...props });
};

const HoverTipInteraction: React.FC = props => (
  <HoverTipInteractionContainer
    presenter={(presenterProps: any) => <HoverTipInteractionPresenter {...presenterProps} />}
    {...props}
  />
);

export default HoverTipInteraction;

export const Tip = () => <span>Tip</span>;
