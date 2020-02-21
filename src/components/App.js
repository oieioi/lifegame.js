import React from 'react';
import './App.css';
import Lifegame from './Lifegame';

function App() {
  const [x, setX] = React.useState(50);
  const [y, setY] = React.useState(50);
  const [destroy, setDestroy] = React.useState(false);

  React.useEffect(() => {
    if (destroy) {
      setTimeout(() => { setDestroy(false) }, 10)
    }
  })

  function resize() {
    setDestroy(true)
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="virus">🦠</span><a href="https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B2%E3%83%BC%E3%83%A0" target="_blank" rel="noopener noreferrer">ライフゲーム</a><span role="img" aria-label="virus">🦠</span>
      </h1>
      <a href="https://github.com/oieioi/lifegame.js" target="_blank" rel="noopener noreferrer" className="ribbon">
        <img width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_red_aa0000.png?resize=149%2C149" alt="Fork me on GitHub" data-recalc-dims="1" />
      </a>
      <div>
        <button onClick={resize}>初期化</button> 
        <label>x:<input name="x" onChange={(event) => setX(Number(event.target.value))} type="number" value={x} /></label>
        <label>y:<input name="y" onChange={(event) => setY(Number(event.target.value))} type="number" value={y} /></label>
      </div>
      {destroy ? null : (<Lifegame x={x} y={y} />) }
    </div>
  );
}

export default App;
