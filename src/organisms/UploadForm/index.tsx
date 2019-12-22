import React, { useEffect, useState } from 'react';
import * as styles from './styles.css';
import Button from '../../atoms/Button';
import { storage, db } from '../../config/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { showFlash, toggleUploadModal } from '../../modules/ui';
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
  const displaySize = (navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0 ? 300 : 600;
  const blobSize = 600;
  useEffect(() => {
    const canvas: any = document.getElementById('cvs');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, blobSize, blobSize);
    const resetImage = new Image();
    resetImage.addEventListener('load', () => {
      context.drawImage(resetImage, 0, 0, resetImage.width, resetImage.height, 0, 0, blobSize, blobSize);
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
        cvs.style.cursor = 'grab';
        const cw = blobSize;
        const ch = blobSize;
        const oh = blobSize;
        const ow = blobSize;
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
        /**
         * ここからSP event
         * @param _ev
         */
        cvs.ontouchstart = function(_ev: any) {
          console.log('start',_ev.touches[0].pageX)
          sx = _ev.touches[0].pageX;
          sy = _ev.touches[0].pageY;
          return false; // イベントを伝搬しない
        };
        cvs.ontouchmove = function(_ev: any) {
          draw_canvas(ix + (sx - _ev.touches[0].pageX) / v, iy + (sy - _ev.touches[0].pageY) / v);
          return false; // イベントを伝搬しない
        };
        cvs.ontouchend = function(_ev: any) {
          console.log('end',_ev)

          draw_canvas((ix += (sx - _ev.changedTouches[0].pageX) / v), (iy += (sy - _ev.changedTouches[0].pageY) / v));
          return false; // イベントを伝搬しない
        };
        /**
         * ここからPC event
         * @param _ev
         */
        cvs.onmousedown = function(_ev: any) {
          // canvas ドラッグ開始位置
          cvs.style.cursor = 'grabbing';
          mouse_down = true;
          sx = _ev.pageX;
          sy = _ev.pageY;
          return false; // イベントを伝搬しない
        };
        cvs.onmousemove = function(_ev: any) {
          // canvas ドラッグ中
          if (!mouse_down) return;
          draw_canvas(ix + (sx - _ev.pageX) / v, iy + (sy - _ev.pageY) / v);
          return false; // イベントを伝搬しない
        };
        cvs.onmouseout = cvs.onmouseup = function(_ev: any) {
          // canvas ドラッグ終了位置
          if (!mouse_down) return;
          cvs.style.cursor = 'grab';
          mouse_down = false;
          draw_canvas((ix += (sx - _ev.pageX) / v), (iy += (sy - _ev.pageY) / v));
          return false; // イベントを伝搬しない
        };
        cvs.onmousewheel = function(_ev: any) {
          // canvas ホイールで拡大縮小
          let scl = newScale + _ev.wheelDelta * 0.05;
          if (scl < 10) scl = 10;
          if (scl > 400) scl = 400;

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
    const storagePath = `puzzle/${process.env.NODE_ENV}/${user.uid}/${uuid}/${fileName}`;
    const task = storage.ref(storagePath).put(blob);
    task.on(
      'state_changed',
      () => {},
      (e: any) => {},
      () => {
        task.snapshot.ref.getDownloadURL()
          .then((downloadURL: string) => {

            const newImage = {
              name: fileName,
              path: downloadURL,
              user_id: user.uid,
              created_at: new Date(),
              easyTime: '--:--:--',
              normalTime: '--:--:--',
              hardTime: '--:--:--',
            };
            db.collection('env').doc(process.env.NODE_ENV).collection('images')
              .add(newImage)
              .then((addDoc: any) => {
                dispatch(toggleUploadModal(props.hasUploadModal));
                dispatch(showFlash('パズルを作成しました！'));
                const canvas: any = document.getElementById('cvs');
                const context = canvas.getContext('2d');
                context.clearRect(0, 0, canvas.width, canvas.height);
                const resetImage = new Image();
                resetImage.addEventListener('load', () => {
                  context.drawImage(resetImage, 0, 0, blobSize, blobSize, 0, 0, blobSize, blobSize);
                  setFileName('');
                });
                resetImage.src = preview;
              })
              .catch(e => {
                console.error('Error writing document: ', e);
              });

            // axios.post('/categoryJudgment', {
            //   imagePath: `gs://${process.env.REACT_APP_STORAGE_BUCKET}/${storagePath}`,
            // }).then((response: any) => {
            //   console.log(response);
            //
            //   const category = response.data[0].labelAnnotations[0].description;
            //
            //   const descriptions = response.data[0].labelAnnotations.map((item: any) => {
            //     return item.description;
            //   });




            // category追加
            // const categoryRef = db.collection('categorys').doc(response.data[0].labelAnnotations[0].description);
            //
            // categoryRef.get()
            //   .then((doc) => {
            //
            //     if(doc.exists) {
            //       console.error('already exists Category');
            //       return;
            //     }
            //     categoryRef
            //       .set({name: category}, {merge: true})
            //       .then((addDoc: any) => {
            //         console.log('new Category!');
            //       })
            //       .catch(e => {
            //         console.error('Error writing document: ', e);
            //       });
            //   })
          // });
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
        <canvas
          id="cvs"
          width={`${blobSize}`}
          height={`${blobSize}`}
          style={{width: `${displaySize}px`,height: `${displaySize}px`}}
        />
        <div className={styles.buttonContainer}>
          <label className={styles.label}>
            写真を選ぶ
            <input type={'file'} name={'image'} onChange={changeFileHandler} accept="image/png,image/jpg,image/bmp" />
          </label>
          <Button type={'submit'} className={fileName ? styles.submitButton : styles.disableButton} disabled={!fileName}>
            アップロード
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default UploadForm;
