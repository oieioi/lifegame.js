import React from 'react';
import './Cell.css';

function Cell({x, y, alive, onChange, aliveChar = 'o', deadChar = '_'}) {
  const onClick = () => {
    onChange(x, y, !alive)
  };

  return <span className={`Cell ${alive ? 'alive' : 'dead'}`} onClick={onClick} >{alive ? aliveChar : deadChar}</span>
}

export default React.memo(Cell, (prevProps, nextProps) => {
  if(prevProps.x !== nextProps.x) return false
  if(prevProps.y !== nextProps.y) return false
  if(prevProps.alive !== nextProps.alive) return false

  return true;
})
