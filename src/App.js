import Shape from "./components/Shape";
import styles from "./App.module.css";
import Board from "./components/Board";

const SHAPE = [
  ["0", "0", "0"],
  ["0", "0", "0"],
  ["1", "1", "1"],
];


const SHAPE2 = [
  ["1", "1", "1"],
  ["1", "1", "1"],
  ["1", "1", "1"],
];

const SHAPE3 = [
  ["1", "0", "0"],
  ["1", "0", "0"],
  ["1", "0", "0"],
];

const SHAPE4 = [
  ["0", "0", "0"],
  ["0", "0", "0"],
  ["1", "0", "0"],
];

function App() {
  return (
    <div className={styles.Container}>
      <div className={styles.Board}>
        <Board />
      </div>
      <div className={styles.Shapes}>
        <Shape shapeArray={SHAPE} />
        <Shape shapeArray={SHAPE2} />
        <Shape shapeArray={SHAPE3} />
        <Shape shapeArray={SHAPE4} />
      </div>
    </div>
  );
}

export default App;
