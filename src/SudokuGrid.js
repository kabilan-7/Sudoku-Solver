import React from 'react'

const SudokuGrid = ({board,handleChange}) => {
  return (
    <div className="sudoku-grid">
      {board.map((row, i) => (
        <div key={i} className="sudoku-row">
          {row.map((cell, j) => (
            <input
              key={j}
              type="number"
              min="0"
              max="9"
              value={cell !== 0 ? cell : ''}
              onChange={(e) => handleChange(i, j, e.target.value ? parseInt(e.target.value) : 0)}
              className={cell === 0 ? 'empty' : ''}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default SudokuGrid