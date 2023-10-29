import React from 'react';
import './squarestyle.css';

function Square({className,value,onSquareClick}) {
  return (
  <button className={`square ${className}`} onClick={onSquareClick}>{value}</button>
  )
}

export default Square
