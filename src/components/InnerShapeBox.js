import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom'
import styles from "./Shape.module.css";

const isCollidingWithAnotherElement = (rect1, rect2) => {
  return rect1.top <= rect2.bottom && rect1.bottom >= rect2.top && rect1.left <= rect2.right && rect1.right >= rect2.left;
}

export const getElements = () => {
  const boardCells = []

  for (let i = 0; i < 16; i++) {
    if(document.getElementById(`cell${i}`) == null) return boardCells;

    boardCells.push(document.getElementById(`cell${i}`));
  }

  return boardCells;
}

const InnerShapeBox = ({ visible, cords, isDragging, checkWin, boxId }) => {
const [isColliding, setIsColliding] = useState(false);
const [collideWith, setCollideWith] = useState();
const boxRef = useRef();

useEffect(() => {
  if(isDragging) return;

  if(collideWith == null) return;

  if(collideWith.classList.contains("busy")) {
    console.log("This cell is busy!")
    return;
  }

  collideWith.classList.add("busy")
  collideWith.appendChild(ReactDOM.findDOMNode(boxRef.current))

  checkWin()
}, [isDragging, collideWith, checkWin])

useEffect(() => {
  if(boxRef.current == null) return;
  for (let i = 0; i < 16; i++) {
    const element = getElements()[i];
    const collide = isCollidingWithAnotherElement(element.getBoundingClientRect(), boxRef.current.getBoundingClientRect());
    if(collide) {
      setCollideWith(element)
      setIsColliding(collide)
      break;
    }
    setCollideWith(null)
    setIsColliding(collide)
  }
},[cords])

const handleTouchEnd = () => {
  
}

  return (
    <div>
      {visible ? (
        <div onTouchEnd={handleTouchEnd} ref={boxRef} className={`${isColliding ? styles.ColoredBoxCollide : styles.ColoredBox}` + " handle"} />
      ) : (
        <div  className={styles.TransparentBox} />
      )}
    </div>
  );
};

export default InnerShapeBox;
