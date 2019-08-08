import React, { ChangeEvent, useEffect, useLayoutEffect, useState } from 'react';
import Header from '../organisms/header/header';
import Main from '../organisms/main/main';
import { useDispatch, useSelector } from 'react-redux';
import { activeImage } from '../modules/collection';
import { RouteComponentProps } from 'react-router-dom';
import Spinner from '../atoms/Spinner/Spinner';
import styles from './playing.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import CanvasList from '../molecules/lists/canvasList/canvasList';
import { changePiece } from '../modules/pieses';
import Canvas from '../molecules/Canvas/canvas';

interface MatchParams {
  id: string;
}
interface Props extends RouteComponentProps<MatchParams> {
}


const idSelector = (state: any) => state.pieceReducer.pieceId;
const userSelector = (state: any) => state.authReducer.user;
const imageSelector = (state: any) => state.collectionReducer.activeImage;
const loadingSelector = (state: any) => state.collectionReducer.loading;

const Playing: React.FC<Props> = (props) => {
  const user = useSelector(userSelector);
  const id = useSelector(idSelector);

  const image = useSelector(imageSelector);
  const loading = useSelector(loadingSelector);
  const [mode, setMode] = useState(3);
  const [canvas, setCanvas]: any = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activeImage(user.uid, props.match.params.id))
  }, []);



  if(loading || image === null) {
    return <Spinner/>;
  }

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const modeNumber = parseInt(event.target.value);
    setMode(modeNumber);
  };

  const startClickHandler = () => {
    var img = new Image();
    img.crossOrigin = "Anonymous";

    img.onload = function() {
      const canvasArr: any = [];
      let size = 0;
      if (mode === 3) size = 300;
      if (mode === 6) size = 150;
      if (mode === 9) size = 100;
      let sy = 0;
      let sx = 0;
      for (let i = 0; i < (mode * mode); i++) {
        // const canvas: any = document.getElementById(`canvas${i}`);
        var canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx: any = canvas.getContext('2d');
        ctx.drawImage(img, sx, sy, size, size, 0, 0, size, size);

        canvasArr.push({
          url: canvas.toDataURL("image/png"),
          id: i
        });
        sx += size;
        if ((i + 1) % mode === 0) {
          sy += size;
          sx = 0;
        }
      }
      setCanvas(canvasArr)
    }
    img.src = image.path;
  };
  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if(!destination) return;
    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    const newCanvasIds = Array.from(canvas);// 1~9


    newCanvasIds.splice(source.index, 1); //元のようぞ削除
    newCanvasIds.splice(destination.index, 0, canvas[source.index]); //移動
    // dispatch(changePiece(newCanvasIds));
    setCanvas(newCanvasIds)
  };

  return (
    <div>
      <Header />
      <Main>
        <h1>GAME</h1>
        <div >
          <img src={image.path} id={'img'} />
          <select id={'mode'} onChange={changeHandler}>
            <option value={3}>easy</option>
            <option value={6}>middle</option>
            <option value={9}>hard</option>
          </select>
          <button onClick={startClickHandler}>スタート</button>
        </div>
        <DragDropContext
          onDragEnd={onDragEnd}
        >
          <div>
            <h1>parts</h1>
            <Droppable droppableId={'test'}>
              {(provided) => (
                <div ref={provided.innerRef}>
                  <CanvasList
                    mode={mode}
                    innerRef={provided.innerRef}
                    {...provided.droppableProps}
                    startClickHandler={canvas}
                  />
                  {/*<Canvas id={} size={} index={}/>*/}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </Main>
    </div>
  );
};

export default Playing;
