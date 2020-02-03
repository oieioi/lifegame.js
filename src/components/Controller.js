import React from 'react';
import './Controller.css';

function Controller({x, y, generation, nextGeneration, autoPlay, autoPlaySpeed, setAutoPlaySpeed}) {
  return (
    <div className="Controller">
      <button name="start" onClick={() => autoPlay(true)}>start</button>
      <button name="stop" onClick={() => autoPlay(false)}>stop</button>
      <button name="next" onClick={nextGeneration}>next</button>
      <div>generation:<span>{generation}</span></div>
      <label>auto play speed:<input type="number" value={autoPlaySpeed} onChange={(e) => { setAutoPlaySpeed(e.target.value) }} /></label>
    </div>
  );
}

export default React.memo(Controller);
