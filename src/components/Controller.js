import React from 'react';
import './Controller.css';

function Controller({x, y, generation, onNextGeneration}) {
  return (
    <div className="Controller">
      <label>x: <input name="x" type="number" readOnly value={x} /></label>
      <label>y:<input name="y" type="number" readOnly value={y} /></label>
      <label>generation:<input name="generation" type="number" readOnly value={generation} /></label>
      <button name="start">start</button>
      <button name="stop">stop</button>
      <button name="next" onClick={onNextGeneration}>next</button>
      <button name="apply">apply</button>
    </div>
  );
}

export default Controller;
