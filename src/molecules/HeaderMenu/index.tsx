import React from 'react';
import styles from './styles.css';
import Button from '../../atoms/Button';

interface IProps {
  menuList: React.AllHTMLAttributes<HTMLElement>[];
}

const HeaderMenu: React.FC<IProps> = (props: any) => {
  const menuList = props.menuList.map((item: React.AllHTMLAttributes<HTMLElement>, i: number) => {

    return (
      <li className={styles.li} key={i}>
        <Button className={styles.button} onClick={item.onClick}>
            {item.children}
        </Button>
      </li>
    )
  });

  return (
    <div className={styles.root}>
      <div>
        <div style={{display: 'inherit'}}>
          <nav>
            <ul className={styles.ul}>
              {menuList}
            </ul>
          </nav>
        </div>
      </div>

    </div>
  );
};

export default HeaderMenu;
