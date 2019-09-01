import React from 'react';
import styles from './styles.css';

interface IProps extends React.HTMLAttributes<HTMLElement>{
  level?: number;
  visualLevel?: number;
}

const Heading:  React.FC<IProps> = (props) => {

  return (
    <HeadingContainer
      presenter={(presenterProps: any) => <HeadingPresenter{...presenterProps}/>}
      {...props}
    />
  );

};
Heading.defaultProps = {
  level:2,
  className: '',
  visualLevel: 2,
};
export default Heading;


export const HeadingPresenter = ({Tag, visualLevel,className, ...props} :any) => (
  <Tag {...props} className={[styles.h, checkVisualLevel(`h${visualLevel}`), className].join(' ')}>
    { props.children }
  </Tag>
);

export const HeadingContainer = ({presenter, ...props}: any) => {
  const level = Math.max(0, Math.min(6, props.level));
  const visualLevel: number  = (typeof props.visualLevel !== 'undefined')  ? props.visualLevel : level;

  const Tag = `h${level}`;

  const className = props.className;
  return presenter({Tag, visualLevel, className, ...props});
};

const checkVisualLevel = (visualLevel: string): string => {
  if(visualLevel === 'h1') return styles.h1;
  if(visualLevel === 'h2') return styles.h2;
  if(visualLevel === 'h3') return styles.h3;
  if(visualLevel === 'h4') return styles.h4;
  if(visualLevel === 'h5') return styles.h5;
  if(visualLevel === 'h6') return styles.h6;
  return styles.h;
};
