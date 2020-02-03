import React from 'react';
import './App.css';
import Lifegame from './Lifegame';

function App() {
  return (
    <div className="App">
      <Lifegame
        x={10}
        y={10}
      />
    </div>
  );
}

export default App;
