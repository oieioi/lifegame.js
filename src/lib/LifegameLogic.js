function nextCells(cells) {
  return cells.map((line, x)=> {
    return line.map((alive, y) => {
      // 周囲を調べる
      const aliveCount = getAdojoiningPositions(x, y).filter((position) => {
        const [x,y] = position;
        if (!cells[x]) return false;
        return cells[x][y]
      }).length
      if (alive) {
        // 周囲の生き残りが2,3のとき生存
        return aliveCount === 2 || aliveCount === 3;
      } else {
        return aliveCount === 3
      }
    });
  });
}

function getAdojoiningPositions(x, y) {
  return [
    [x - 1, y - 1],
    [x    , y - 1],
    [x + 1, y - 1],
    [x - 1, y],
    // [x    , y],
    [x + 1, y],
    [x - 1, y + 1],
    [x    , y + 1],
    [x + 1, y + 1],
  ];
}

function twoDArray(x, y, value) {
  const isFunc = typeof(value) === "function";
  return [...Array(x)].map((_, x) => {
    return [...Array(y)].map((_, y) => {
      if (isFunc) return value()
      else return value
    })
  });
}

export default { nextCells, twoDArray }
