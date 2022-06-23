import React from "react";
import styles from "./Board.module.css";
import BoardCell from "./BoardCell";

const Board = () => {
  return (
    <div className={styles.Board}>
      <BoardCell cellId={`cell0`} />
      <BoardCell cellId={`cell1`} />
      <BoardCell cellId={`cell2`} />
      <BoardCell cellId={`cell3`} />
      <BoardCell cellId={`cell4`} />
      <BoardCell cellId={`cell5`} />
      <BoardCell cellId={`cell6`} />
      <BoardCell cellId={`cell7`} />
      <BoardCell cellId={`cell8`} />
      <BoardCell cellId={`cell9`} />
      <BoardCell cellId={`cell10`} />
      <BoardCell cellId={`cell11`} />
      <BoardCell cellId={`cell12`} />
      <BoardCell cellId={`cell13`} />
      <BoardCell cellId={`cell14`} />
      <BoardCell cellId={`cell15`} />
    </div>
  );
};

export default Board;
