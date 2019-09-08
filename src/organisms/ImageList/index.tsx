import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { collectionCheck } from '../../modules/collection';
import Spinner from '../../atoms/Spinner/Spinner';
import styles from './styles.css';
import Img from '../../atoms/Img';
import Anchor from '../../atoms/Anchor';
import Txt from '../../atoms/Txt';
import { ESize } from '../../types';

const userSelector = (state: any) => state.authReducer.user;
const imagesSelector = (state: any) => state.collectionReducer.images;
const loadingSelector = (state: any) => state.collectionReducer.loading;

const ImageList: React.FC = () => {
  const user = useSelector(userSelector);
  const images = useSelector(imagesSelector);
  const loading = useSelector(loadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(collectionCheck(user.uid));
  }, [user, dispatch]);

  if (loading) {
    return <Spinner />;
  }

  const list = images.map((item: any, index: any) => (
      <Anchor to={`/play/${item.id}`} key={index} className={styles.gridItemContainer}>

        <Img className={styles.gridItem} src={item.path} alt={item.name} />
        <div className={styles.gridItemHover}>
          <Anchor to={`/play/${item.id}`} className={styles.startBtn}>
            <Txt fontSize={ESize.l}>スタート</Txt>
          </Anchor>
        </div>
      </Anchor>
    )
  );

  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        {list}
      </div>
    </div>
  );
};

export default ImageList;

