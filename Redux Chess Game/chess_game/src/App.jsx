import { useDispatch, useSelector } from "react-redux";
import { toggleColor } from "@redux/slice/chessSlice";
import { style } from "./styles/style";

function App() {
  const dispatch = useDispatch();
  const board = useSelector(state => state.chess.board);

  const handleCellClick = (rowIndex, colIndex) => {
    dispatch(toggleColor({ row: rowIndex, col: colIndex }));
  };

  return (
    <div style={style.container}>
      <header style={style.header}>
        <h1 style={style.heading}>Chess Game using REDUX</h1>
        <p style={style.description}>Click on any square to toggle its color between yellow and red. Enjoy the game!</p>
      </header>

      <div style={style.boardContainer}>
        {board.map((row, rowIndex) => (
          <div style={style.row} key={rowIndex}>
            {row.map((col, colIndex) => (
              <div
                key={colIndex}
                style={{
                  ...style.cell,
                  backgroundColor: col, 
                }}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
