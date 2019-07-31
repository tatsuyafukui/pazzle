import React, { useState } from 'react';
import * as styles from './uploadForm.css';
import Button from '../../../atoms/Button/button';
import buttonStyles from '../../../atoms/Button/button.css';
import inputStyles from '../../../atoms/Form/Input/input.css';
import { storage, db } from '../../../config/firebase';
import { useSelector } from 'react-redux';
const userSelector = (state: any) => state.user;

const UploadForm: React.FC = () => {
  const [file, setFileName] = useState();
  const user = useSelector(userSelector);

  const changeFileHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files === null) return;
    setFileName(event.currentTarget.files[0]);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const task = storage.ref(`pazzle/${user.uid}/${file.name}`).put(file);

    task.on(
      'state_changed',
      () => {},
      e => {},
      () => {
        task.snapshot.ref.getDownloadURL().then(downloadURL => {
          db.collection('users')
            .doc(user.uid)
            .collection('images')
            .add({
              name: file.name,
              path: downloadURL,
              user_id: user.uid,
            })
            .then(() => {
              // setState images;
              console.log('Document successfully written!');
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
      <Button type={'submit'} className={buttonStyles.button}>
        アップロード
      </Button>
    </form>
  );
};

export default UploadForm;
