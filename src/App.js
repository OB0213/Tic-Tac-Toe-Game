import logo from './logo.svg';
import './App.css';
import Square from './Components/Square';
import React,{useState} from 'react';

function App() {
  const [squares,setSquares]=useState(Array(9).fill(null));
  const [xisNext,setXisNext]=useState(true);
  let [count,setCount]=useState(0);
  let status;
 let winner=false;
  function CalculateWinner(squares)
  {
    let winnerArray=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i=0;i<winnerArray.length;i++)
    {
      const [a,b,c]=winnerArray[i];
      if(squares[a]&&squares[a]===squares[b]&&squares[b]===squares[c])
      {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i)
  {
    
   
    if(squares[i]||CalculateWinner(squares))
    {
      return;
    }
    let mysquares=squares.slice();
    if(xisNext)
    {
    mysquares[i]='X';
    setCount(count+1);
    }
    else{
      mysquares[i]='O';
      setCount(count+1);
    }
    setSquares(mysquares);
    setXisNext(!xisNext);

  
  }

  let statusvalue=CalculateWinner(squares);
  if(statusvalue&&count<=9)
  {
status="Winner is "+statusvalue;
winner=true;
  }
  else if(count<9){
    status=xisNext?'Turn of X':'Turn of O';
  }
  else if(count===9)
  {
    status='Tied';
    winner=true;
  }

  function reset()
  {
    window.location.reload();
  }

  return (
    <div className="App">
      <div className='titledata'>
        <h1>TIC TAC TOE</h1>
      </div>
  <div className='mygame'>
    <div className='square-row'>
      <Square className={'classData'} value={squares[0]} onSquareClick={()=>handleClick(0)}></Square>
      <Square className={'classData1'} value={squares[1]} onSquareClick={()=>handleClick(1)}></Square>
      <Square className={'classData2'} value={squares[2]} onSquareClick={()=>handleClick(2)}></Square>
    </div>
    <div className='square-row'>
      <Square className={'classData3'} value={squares[3]} onSquareClick={()=>handleClick(3)}></Square>
      <Square className={'classData4'} value={squares[4]} onSquareClick={()=>handleClick(4)}></Square>
      <Square className={'classData5'} value={squares[5]} onSquareClick={()=>handleClick(5)}></Square>
    </div>
    <div className='square-row'>
      <Square className={'classData6'} value={squares[6]} onSquareClick={()=>handleClick(6)}></Square>
      <Square className={'classData7'} value={squares[7]} onSquareClick={()=>handleClick(7)}></Square>
      <Square className={'classData8'} value={squares[8]} onSquareClick={()=>handleClick(8)}></Square>
    </div>
  </div>

  <h2 className={winner?`winner`:`winnerStatus`}>{status}</h2>
  <button onClick={reset} className='reset'>Reset</button>
    </div>
  );
}

export default App;
