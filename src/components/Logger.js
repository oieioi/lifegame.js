import React from 'react';
import './Logger.css';

const Logger = ({numbers, display}) => {
  if (!display) return null;

  return <div className="Logger">
    {numbers.map((number, index) => <div key={index} className="LoggerItem" style={{height: number + "px"}}>{number}</div>)}
  </div>
}

export default Logger;
