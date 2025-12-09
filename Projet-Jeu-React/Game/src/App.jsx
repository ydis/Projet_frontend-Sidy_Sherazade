import { useState } from 'react'
import './App.css'


function App() {
  const [grid] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [score, setScore] = useState(0);

const TileClick = (rowIndex, colIndex) => {
  console.log("Case Cliquée :", rowIndex, colIndex);
  setScore((prev) => prev + 10); // provisoire
};
return (
  <div classname="app">
    <h1>Mon jeu de grille</h1>
    <p>Score : {score}</p>

    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex}
        className='grid-row'>
          {row.map((cell, colIndex) => (
            <button
            key={colIndex}
            className='tile'
            onClick={()=> TileClick(rowIndex,colIndex)}
            >
              {cell}
            </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
