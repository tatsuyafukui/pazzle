import React, { createElement, useEffect, useState } from 'react';
import * as styles from './styles.css';
import Button from '../../atoms/Button';
import Img from '../../atoms/Img';

import { storage, db } from '../../config/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { addCollection, collectionCheck } from '../../modules/collection';
import { showFlash, toggleModal, toggleUploadModal } from '../../modules/ui';
import preview from '../../public/images/preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import Modal from '../../atoms/Modal';
const userSelector = (state: any) => state.authReducer.user;

interface IProps extends React.AllHTMLAttributes<HTMLElement> {
  hasUploadModal: boolean;
}
const image = new Image();
let v = 1.0;
let ix = 0; // 中心座標
let iy = 0;

const UploadForm: React.FC<IProps> = props => {
  const [fileName, setFileName] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  useEffect(() => {
    const canvas: any = document.getElementById('cvs');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    const resetImage = new Image();
    resetImage.addEventListener('load', () => {
      context.drawImage(resetImage, 0, 0, 600, 600, 0, 0, 600, 600);
    });

    resetImage.src = preview;
  }, []);

  const changeFileHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files === null) return;
    const imageObject = event.currentTarget.files[0];
    const reader = new FileReader();
    image.crossOrigin = 'Anonymous';
    reader.addEventListener('load', (event: any) => {
      image.addEventListener('load', () => {
        const cvs: any = document.getElementById('cvs');
        const cw = 600;
        const ch = 600;
        const oh = 600;
        const ow = 600;
        let newScale = 1.0;
        ix = image.width / 2;
        iy = image.height / 2;
        scaling((cw / image.width) * 100);

        function scaling(_v: any) {
          // スライダーが変った
          v = _v * 0.01;
          draw_canvas(ix, iy); // 画像更新
        }

        function draw_canvas(_x: any, _y: any) {
          // 画像更新
          const ctx = cvs.getContext('2d');
          ctx.fillStyle = 'rgb(200, 200, 200)';
          ctx.fillRect(0, 0, cw, ch); // 背景を塗る
          ctx.drawImage(
            image,
            0,
            0,
            image.width,
            image.height,
            cw / 2 - _x * v,
            ch / 2 - _y * v,
            image.width * v,
            image.height * v
          );
          ctx.strokeStyle = 'rgba(200, 0, 0, 0.8)';
          ctx.strokeRect((cw - ow) / 2, (ch - oh) / 2, ow, oh); // 赤い枠
        }

        let mouse_down = false; // canvas ドラッグ中フラグ
        let sx = 0; // canvas ドラッグ開始位置
        let sy = 0;
        cvs.ontouchstart = cvs.onmousedown = function(_ev: any) {
          // canvas ドラッグ開始位置
          mouse_down = true;
          sx = _ev.pageX;
          sy = _ev.pageY;
          return false; // イベントを伝搬しない
        };
        cvs.ontouchend = cvs.onmouseout = cvs.onmouseup = function(_ev: any) {
          // canvas ドラッグ終了位置
          if (!mouse_down) return;
          mouse_down = false;
          draw_canvas((ix += (sx - _ev.pageX) / v), (iy += (sy - _ev.pageY) / v));
          return false; // イベントを伝搬しない
        };
        cvs.ontouchmove = cvs.onmousemove = function(_ev: any) {
          // canvas ドラッグ中
          if (!mouse_down) return;
          draw_canvas(ix + (sx - _ev.pageX) / v, iy + (sy - _ev.pageY) / v);
          return false; // イベントを伝搬しない
        };
        cvs.onmousewheel = function(_ev: any) {
          // canvas ホイールで拡大縮小
          let scl = newScale + _ev.wheelDelta * 0.05;
          if (scl < 10) scl = 10;
          if (scl > 400) scl = 400;
          console.log(scl);

          newScale = scl;
          scaling(newScale);
          return false; // イベントを伝搬しない
        };
        setFileName(imageObject.name);
      });
      image.src = event.target.result;
    });
    reader.readAsDataURL(event.currentTarget.files[0]);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const output: any = document.createElement('canvas');
    output.width = 600;
    output.height = 600;
    const oh = output.height;
    const ow = output.width;
    const ctx = output.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, ow, oh); // 背景を塗る
    ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      ow / 2 - ix * v,
      oh / 2 - iy * v,
      image.width * v,
      image.height * v
    );
    // const canvas: any = document.getElementById('cvs');
    const base64 = output.toDataURL();
    // base64からBlobデータを作成
    const bin = atob(base64.split('base64,')[1]);
    const len = bin.length;
    const barr = new Uint8Array(len);
    let i = 0;
    while (i < len) {
      barr[i] = bin.charCodeAt(i);
      i++;
    }
    const blob = new Blob([barr], { type: 'image/png' });
    const uuid = require('uuid/v1')();
    const task = storage.ref(`puzzle/${user.uid}/${uuid}/${fileName}`).put(blob);

    task.on(
      'state_changed',
      () => {},
      (e: any) => {},
      () => {
        task.snapshot.ref.getDownloadURL().then((downloadURL: string) => {
          const newImage = {
            name: fileName,
            path: downloadURL,
            user_id: user.uid,
            created_at: new Date(),
            easyTime: '--:--:--',
            normalTime: '--:--:--',
            hardTime: '--:--:--',
          };
          db.collection('images')
            .add(newImage)
            .then((addDoc: any) => {
              console.log('Document successfully written!');
              dispatch(toggleUploadModal(props.hasUploadModal));
              dispatch(showFlash('パズルを作成しました！'));
              const canvas: any = document.getElementById('cvs');
              const context = canvas.getContext('2d');
              context.clearRect(0, 0, canvas.width, canvas.height);
              const resetImage = new Image();
              resetImage.addEventListener('load', () => {
                context.drawImage(resetImage, 0, 0, 600, 600, 0, 0, 600, 600);
                setFileName('');
              });

              resetImage.src = preview;
            })
            .catch(e => {
              console.error('Error writing document: ', e);
            });
        });
      }
    );
  };

  return (
    <Modal
      hasShow={props.hasUploadModal}
      onClick={() => {
        dispatch(toggleUploadModal(props.hasUploadModal));
      }}
    >
      <div
        onClick={() => {
          dispatch(toggleUploadModal(props.hasUploadModal));
        }}
      >
        <FontAwesomeIcon icon={faTimesCircle} className={styles.closeBtn} />
      </div>
      <form className={styles.root} onSubmit={submitHandler}>
        <canvas id="cvs" width="600" height="600" />
        <label className={styles.label}>
          写真を選ぶ
          <input type={'file'} name={'image'} onChange={changeFileHandler} accept="image/png,image/jpg,image/bmp" />
        </label>
        <Button type={'submit'} className={fileName ? styles.submitButton : styles.disableButton} disabled={!fileName}>
          アップロード
        </Button>
      </form>
    </Modal>
  );
};

export default UploadForm;
