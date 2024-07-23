import React from 'react'
import SudokuGrid from './SudokuGrid'
import { useState } from 'react'
import { solve } from './solvesudoku'
import './style.css'
const App = () => {
  const creatEmptyBoard = ()=>{
    const board = Array(9).fill().map(() => Array(9).fill(0));
    return board;

  }
  const [board,setboard]=useState(creatEmptyBoard())
  const handleChange = (row,col,value)=>{
    const newBoard = board.map((r,i)=>r.map((cell,j)=>(i==row && j==col?value:cell)))
    setboard(newBoard)
  }
  const solveBoard = ()=>{
    const newBoard = board.map((row)=>row.slice())
    if(solve(newBoard)){
      setboard(newBoard)
    }else{
      alert('No solution exists!')
    }
    
  }
  const resetBoard = ()=>{
    setboard(creatEmptyBoard())
  }
  return (
    <div className='App'>
      <h1>Sudoku Solver</h1>
      <SudokuGrid board={board} handleChange={handleChange} />
      <button onClick={solveBoard}>Solve</button>
      <button onClick={resetBoard}>Reset</button>
    </div>
  )
}

export default App
