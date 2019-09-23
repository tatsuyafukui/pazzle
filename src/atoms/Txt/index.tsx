import React from 'react';
import styles from './styles.css';
import { ESize, ERole } from '../../types';

interface IProps extends React.AllHTMLAttributes<HTMLElement> {
  fontSize?: ESize;
  tag?: 'p' | 'span' | 'div';
}

const txtFactory = (role: ERole): React.FC<IProps> => ({ tag: Tag = 'p', fontSize = ESize.m, ...props }) => {
  return <Tag className={[styles[role], styles[fontSize], props.className].join(' ')} {...props} />;
};

const Txt = txtFactory(ERole.default);
export const InfoTxt = txtFactory(ERole.info);
export const WarningTxt = txtFactory(ERole.warning);
export const WhiteTxt = txtFactory(ERole.white);
export const CreamTxt = txtFactory(ERole.cream);

export default Txt;
