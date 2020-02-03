import React from 'react';
import Cell from './Cell';
import Controller from './Controller';
import logic from '../lib/LifegameLogic';
import './Lifegame.css';

function Lifegame({x, y}) {
  const initialCells = React.useMemo(() => logic.twoDArray(x, y, false), [x, y]);

  const [cells, setCells] = React.useState(initialCells);
  const setCell = (x, y, value) => {
    setCells((cells) => {
      const newCells = cells.slice();
      const newLine = newCells[x].slice();
      newLine[y] = value;
      newCells[x] = newLine
      return newCells
    })
  }

  const [generation, setGeneration] = React.useState(0);
  const nextGeneration = () => {
    const newCells = logic.nextCells(cells);
    setGeneration(generation + 1)
    setCells(newCells);
  }

  const [autoPlayMode, setAutoPlayMode] = React.useState(false)
  const [autoPlaySpeed, setAutoPlaySpeed] = React.useState(250)

  const randomize = (frequency = 0.3) => {
    const ramdomizeCells = logic.twoDArray(x, y, () => Math.random() > frequency ? true : false);
    setCells(ramdomizeCells)
  }

  React.useEffect(()=>{
    if (!autoPlayMode) return;

    const timer = setInterval(() => {
      nextGeneration();
    }, autoPlaySpeed)
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
      autoPlaying={autoPlayMode}
      autoPlay={setAutoPlayMode}
      autoPlaySpeed={autoPlaySpeed}
      setAutoPlaySpeed={setAutoPlaySpeed}
      randomize={randomize}
    />
    <div className="cells"> {lines} </div>
    </>);
}

export default React.memo(Lifegame);
