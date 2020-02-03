import React from 'react';

function Cell({x, y, alive, onChange}) {
  const onClick = () => {
    onChange(x, y, !alive)
  };

  return <input
    type="checkbox"
    title={`x: ${x}, y: ${y}, alive: ${alive}`}
    onChange={onClick}
    checked={alive}
  />
}

export default React.memo(Cell, (prevProps, nextProps) => {
  if(prevProps.x !== nextProps.x) return false
  if(prevProps.y !== nextProps.y) return false
  if(prevProps.alive !== nextProps.alive) return false

  return true;
})
