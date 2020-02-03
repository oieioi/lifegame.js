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
      <h1>
        <a href="https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B2%E3%83%BC%E3%83%A0" target="_blank" rel="noopener noreferrer" >コンウェイのライフゲーム</a>を実施します。
      </h1>
      <div>
        <button onClick={resize}>resize</button>
        <label>x:<input name="x" onChange={(event) => setX(Number(event.target.value))} type="number" value={x} /></label>
        <label>y:<input name="y" onChange={(event) => setY(Number(event.target.value))} type="number" value={y} /></label>
      </div>
      {destroy ? null : (<Lifegame x={x} y={y} />) }
    </div>
  );
}

export default App;
