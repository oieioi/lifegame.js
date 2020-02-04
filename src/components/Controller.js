import React from 'react';
import './Controller.css';

function Controller({x, y, generation, nextGeneration, autoPlaying, autoPlay, autoPlaySpeed, setAutoPlaySpeed, randomize, aliveCount, loggerMode, setLoggerMode}) {
  const [frequency, setFrequency] = React.useState(0.7);
  const cellSize = React.useMemo(()=> x * y, [x, y]);
  const deadCount = React.useMemo(() => cellSize - aliveCount, [cellSize, aliveCount]);

  return (
    <div className="Controller">
      <div>
        <button name="next" onClick={nextGeneration}>世代を進める</button>
        generation: <span>{generation}</span>,
        all: <span>{cellSize}</span>,
        alive: <span>{aliveCount}</span>,
        dead: <span>{deadCount}</span>,
      </div>
      <div>
        <button name="random" onClick={() => randomize(frequency)}>ランダムにセルを配置</button>
        <label>ランダムの死にセル頻度: <input type="number" value={frequency} onChange={(e) => { setFrequency(e.target.value) }} /></label>
      </div>
      <div>
        <button name="autoPlay" onClick={() => autoPlay(!autoPlaying)}>{ autoPlaying ? '止める' : 'オートモード'}</button>
        <label>オートモードの速さ:<input type="number" value={autoPlaySpeed} onChange={(e) => { setAutoPlaySpeed(e.target.value) }} /></label>
      </div>
      <div>
        <label>生セルのグラフ:<input type="checkbox" onChange={(e) => { setLoggerMode(e.target.checked) }} checked={loggerMode} /></label>
      </div>
 
    </div>
  );
}

export default React.memo(Controller);
