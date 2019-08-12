import React, { useState } from 'react';
import * as styles from './uploadForm.css';
import Button from '../../../atoms/Button/button';
import buttonStyles from '../../../atoms/Button/button.css';
import inputStyles from '../../../atoms/Form/Input/input.css';
import { storage, db } from '../../../config/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { addCollection } from '../../../modules/collection';
const userSelector = (state: any) => state.authReducer.user;
const collectionSelector = (state: any) => state.collectionReducer.images;

const UploadForm: React.FC = () => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const images = useSelector(collectionSelector);

  const changeFileHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files === null) return;
    const imageObject = event.currentTarget.files[0];
    const canvas: any = document.getElementById('canvas');
    const image = new Image();
    const reader = new FileReader();
    image.crossOrigin = 'Anonymous';
    reader.addEventListener('load', (event: any) => {
      image.addEventListener('load', () => {
        if (!canvas) return;
        const dstWidth = 900;
        const dstHeight = 900;
        canvas.width = dstWidth;
        canvas.height = dstHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, dstWidth, dstHeight);
        const base64 = canvas.toDataURL();
        // base64からBlobデータを作成
        const bin = atob(base64.split('base64,')[1]);
        const len = bin.length;
        const barr = new Uint8Array(len);
        let i = 0;
        while (i < len) {
          barr[i] = bin.charCodeAt(i);
          i++;
        }
        const blob = new Blob([barr], { type: 'image/jpeg' });
        setFile({
          data: blob,
          name: imageObject.name,
        });
      });
      image.src = event.target.result;
      console.log(event.target.result);
    });
    reader.readAsDataURL(event.currentTarget.files[0]);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const uuid = require('uuid/v1')();
    const task = storage.ref(`pazzle/${user.uid}/${uuid}/${file.name}`).put(file.data);

    task.on(
      'state_changed',
      () => {},
      e => {},
      () => {
        task.snapshot.ref.getDownloadURL().then(downloadURL => {
          const newImage = {
            name: file.name,
            path: downloadURL,
            user_id: user.uid,
          };
          db.collection('users')
            .doc(user.uid)
            .collection('images')
            .add(newImage)
            .then(addDoc => {
              // setState images;
              console.log('Document successfully written!');
              dispatch(
                addCollection(images, {
                  ...newImage,
                  id: addDoc.id,
                })
              );
            })
            .catch(e => {
              console.error('Error writing document: ', e);
            });
        });
      }
    );
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <canvas style={{ maxWidth: '300px', maxHeight: '300px' }} id="canvas" width="0" height="0" />
      <label className={styles.label}>
        写真を選ぶ
        <input
          type={'file'}
          className={inputStyles.upload}
          name={'image'}
          onChange={changeFileHandler}
          accept="image/png,image/jpg,image/bmp"
        />
      </label>
      <Button type={'submit'}>
        アップロード
      </Button>
    </form>
  );
};

export default UploadForm;
