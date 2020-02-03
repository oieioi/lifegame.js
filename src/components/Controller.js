import React from 'react';
import './Controller.css';

function Controller({x, y, generation, nextGeneration, autoPlay}) {
  return (
    <div className="Controller">
      <button name="start" onClick={() => autoPlay(true)}>start</button>
      <button name="stop" onClick={() => autoPlay(false)}>stop</button>
      <button name="next" onClick={nextGeneration}>next</button>
      <label>generation:<input name="generation" type="number" readOnly value={generation} /></label>
    </div>
  );
}

export default React.memo(Controller);
