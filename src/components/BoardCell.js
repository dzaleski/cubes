import React from 'react';
import styles from "./Board.module.css";

const BoardCell = ({cellId}) => {
    return <div id={cellId} className={styles.BoardCell}></div>;
}

export default BoardCell;