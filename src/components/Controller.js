import React from 'react';
import './Controller.css';

function Controller({x, y, generation, nextGeneration, autoPlaying, autoPlay, autoPlaySpeed, setAutoPlaySpeed, randomize}) {
  const [frequency, setFrequency] = React.useState(0.7);

  return (
    <div className="Controller">
      <div>generation:<span>{generation}</span></div>
      <label>オートモードの速さ:<input type="number" value={autoPlaySpeed} onChange={(e) => { setAutoPlaySpeed(e.target.value) }} /></label>
      <button name="autoPlay" onClick={() => autoPlay(!autoPlaying)}>{ autoPlaying ? 'stop' : 'start'}</button>
      <button name="next" onClick={nextGeneration}>next</button>
      <label>ランダムの死にセル頻度: <input type="number" value={frequency} onChange={(e) => { setFrequency(e.target.value) }} /></label>
      <button name="random" onClick={() => randomize(frequency)}>randomize</button>
    </div>
  );
}

export default React.memo(Controller);
