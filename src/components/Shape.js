import React, { useState } from "react";
import { atom } from "recoil";
import Draggable from "react-draggable";
import InnerShapeBox, { getElements } from "./InnerShapeBox";
import styles from "./Shape.module.css";

export const currCorrdinates = atom({ key: "currCorrdinates", default: null });

const Shape = ({ shapeArray }) => {
  const [cords, setCords] = useState();
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (e, data) => {
    setCords(data);
  };

  const handleDragStart = (e, data) => {
    setIsDragging(true);
  };

  const handleDragEnd = (e, data) => {
    setIsDragging(false);
  };

  const checkWin = () => {
    const a = getElements().find((x) => !x.classList.contains("busy"));
    if(a == null) {
        alert("You won!")
    }
  }

  return (
    <Draggable
      onDrag={handleDrag}
      onStart={handleDragStart}
      onStop={handleDragEnd}
      handle=".handle"
    >
      <div className={styles.Container}>
        {shapeArray.map((row, rowIndex) => {
          return row.map((colValue, colIndex) => {
            return (
              <InnerShapeBox
              checkWin={checkWin}
                isDragging={isDragging}
                cords={cords}
                boxId={rowIndex + colIndex}
                key={rowIndex + colIndex}
                coords={{ row: rowIndex, col: colIndex }}
                visible={colValue === "1"}
              />
            );
          });
        })}
      </div>
    </Draggable>
  );
};

export default Shape;
