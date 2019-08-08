import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePiece } from '../../../modules/pieses'
import Spinner from '../../../atoms/Spinner/Spinner';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
import styles from '../../../pages/playing.css';

interface IProps {
  mode: number,
  innerRef: any,
  startClickHandler: any
}
const idSelector = (state: any) => state.pieceReducer.pieceId;

const CanvasList: React.FC<IProps> = React.memo((props) => {
  const id = useSelector(idSelector);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const arr = [...Array(props.mode*props.mode)].map((_, i) => {
  //     return i;
  //   });
  //
  //   // for(let i = arr.length - 1; i > 0; i--){
  //   //   const r = Math.floor(Math.random() * (i + 1));
  //   //   const tmp = arr[i];
  //   //   arr[i] = arr[r];
  //   //   arr[r] = tmp;
  //   // }
  //
  //   dispatch(changePiece(arr));
  // }, []);

  const arr = props.startClickHandler.map((item: any, i: any) => {
    let size: any;
    if(props.mode === 3) size = '300px';
    if(props.mode === 6) size = '150px';
    if(props.mode === 9) size = '100px';
    return (
      <Draggable draggableId={`${item.id}`} index={i} key={i}>
        {(provided) => (
          <div
            className={styles.firstLine}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {/*<canvas id={`canvas${item}`} style={{maxWidth: size, maxHeight: size, margin: '1px'}} className="canvas" width={size} height={size} />*/}
            <img src={item.url}
                 style={{width:size, height: size, maxWidth: size, maxHeight: size, margin: '1px'}}
            />
          </div>
        )}
      </Draggable>
    );
  });

  return (
    <>
      {arr}
    </>
  );
});

export default CanvasList;
