import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Canvas from '../../atoms/Canvas';
import { EMode } from '../../types';
import styles from './styles.css';

interface ICanvas {
  url: string;
  id: number;
  isCorrect: boolean;
}
interface IProps {
  column: number;
  mode: number;
  canvasList: any;
}

const Column: React.FC<IProps> = props => {
  let size: any;
  if (props.mode === EMode.easy) size = '200px';
  if (props.mode === EMode.normal) size = '100px';
  if (props.mode === EMode.hard) size = '60px';

  let height: any;
  if (props.mode === EMode.easy) height = styles.easy;
  if (props.mode === EMode.normal) height = styles.normal;
  if (props.mode === EMode.hard) height = styles.hard;

  const canvasList = props.canvasList.map((item: ICanvas, i: number) => {
    const columnId = i * props.mode + props.column;
    item.isCorrect = columnId === item.id;

    return <Canvas key={i} item={item} index={i} size={size} />;
  });

  return (
    <div style={{ margin: '0' }}>
      <Droppable droppableId={`${props.column}`}>
        {provided => (
          <div
            ref={provided.innerRef}
            style={{
              paddingBottom: '100px',
            }}
            className={height}
          >
            {canvasList.length !== 0 ? (
              canvasList
            ) : (
              <div
                style={{
                  minWidth: size,
                  minHeight: '600px',
                  width: size,
                  height: '600px',
                }}
              />
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
