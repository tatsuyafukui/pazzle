import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { collectionCheck } from '../../../modules/collection';
import Spinner from '../../../atoms/Spinner/Spinner';
import styles from './imageList.css';
import { Link } from 'react-router-dom';

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

  let imageElements = images.map((image: any, i: number) => {
    return (
      <div
        key={i}
        className={(i + 1) % 3 === 0 ? styles.lastImageCollectionContainer : styles.imageCollectionContainer}
      >
        <div className={styles.imageCollection}>
          <Link to={`/play/${image.id}`}>
            <img src={image.path} alt={image.name} />
          </Link>
        </div>
      </div>
    );
  });

  let lineElements = [];
  const finalElements = [];
  for (let i = 1; i <= imageElements.length; i++) {
    lineElements.push(imageElements[i - 1]);

    if (i % 3 === 0) {
      finalElements.push(
        <div key={i} className={styles.imageCollectionLine}>
          {lineElements}
        </div>
      );
      lineElements = [];
    } else if (i === imageElements.length) {
      // dammy が必要な数
      [...Array(3 - (i % 3))].forEach((_, i, arr) => {
        let pushElement = (
          <div key={i} className={styles.imageCollectionContainer}>
            <div className={styles.imageCollection}></div>
          </div>
        );
        if (arr.length === 1 || i === 1) {
          pushElement = (
            <div key={i} className={styles.lastImageCollectionContainer}>
              <div className={styles.imageCollection} />
            </div>
          );
        }
        lineElements.push(pushElement);
      });
      finalElements.push(
        <div key={i} className={styles.imageCollectionLine}>
          {lineElements}
        </div>
      );
    }
  }
  console.log(images);
  return (
    <div className={styles.imageList}>
      <div className={styles.typeTab}>
        <ul>
          <li>collection</li>
          <li>playing</li>
        </ul>
      </div>
      <div className={styles.collectionContainer}>{finalElements}</div>
    </div>
  );
};

export default ImageList;
