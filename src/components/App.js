import React from 'react';
import './App.css';
import Lifegame from './Lifegame';

function App() {
  const [x, setX] = React.useState(20);
  const [y, setY] = React.useState(20);
  const [destroy, setDestroy] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => { setDestroy(false) }, 10)
  })

  function resize() {
    setDestroy(true)
  }

  return (
    <div className="App">
      <label>x:<input name="x" onChange={(event) => setX(Number(event.target.value))} type="number" value={x} /></label>
      <label>y:<input name="y" onChange={(event) => setY(Number(event.target.value))} type="number" value={y} /></label>
      <button onClick={resize}>resize</button>
      {destroy ? null : (<Lifegame x={x} y={y} />) }
    </div>
  );
}

export default App;
