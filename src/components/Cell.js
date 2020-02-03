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
export default React.memo(Cell)
