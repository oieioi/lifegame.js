import React from 'react';
import Cell from './Cell';
import Controller from './Controller';
import logic from '../lib/LifegameLogic';

function Lifegame({x, y}) {
  const initialCells = logic.twoDArray(x, y, false);
  const [cells, setCells] = React.useState(initialCells);
  const [generation, setGeneration] = React.useState(0);

  const nextGeneration = () => {
    const newCells = logic.nextCells(cells);
    setGeneration(generation + 1)
    setCells(newCells);
  }

  const setCell = (x, y, value) => {
    const newCells = cells.slice();
    const newLine = newCells[x].slice();
    newLine[y] = value;
    newCells[x] = newLine
    setCells(newCells)
  }

  const [autoPlayMode, setAutoPlayMode] = React.useState(false)

  React.useEffect(()=>{
    if (!autoPlayMode) return;

    const timer = setInterval(() => {
      nextGeneration();
    }, 500)
    return () => { clearInterval(timer) }
  })

  const lines = cells.map((line, x) => {
    const cells = line.map((alive, y) => <Cell key={`${x},${y}`} x={x} y={y} alive={alive} onChange={setCell} />)
    cells.push(<br />)
    return cells;
  })

  return (<>
    <Controller
      x={x}
      y={y}
      generation={generation}
      nextGeneration={nextGeneration}
      autoPlay={setAutoPlayMode}
    />
      {lines}
    </>);
}

export default Lifegame;
