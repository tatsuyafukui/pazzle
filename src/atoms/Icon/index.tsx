import React from 'react';
import styles from './styles.css';

interface IProps extends React.HTMLAttributes<HTMLElement>{
  width?: number;
  height?: number;
  iconname: string;
}

const IconPresenter: React.FC<IProps> = (props) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/icons/${props.iconname}.svg`}
      width={props.width}
      height={props.height}
      alt={''}
      {...props}
    />
  );
};


IconPresenter.defaultProps = {
  width: 20,
  height: 20,
};


interface IContainerProps extends React.HTMLAttributes<HTMLElement>{
  presenter: (presenterProps: any) => any;
  iconname: string;
}

export const IconContainer: React.FC<IContainerProps> = ({presenter,...props}) => {
  if(props.onClick) props.className += ` ${styles.clickable}`;
  return presenter({...props});
};

export const iconFactory = (iconname: string) => (props: any) => {
  return (
    <IconContainer
      presenter={(presenterProps) =>  <IconPresenter {...presenterProps}/>}
      {...{...props, iconname}}
    />
  )
};

export const Icon = iconFactory('icon');

