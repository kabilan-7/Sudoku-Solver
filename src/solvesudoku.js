
// Display the board (for debugging purposes)
// export function display(board) {
//     for (let row of board) {
//         console.log(row.join(" | "));
//     }
// }

// Check if placing num in board[row][col] is safe
function isSafe(board, row, col, num) {
    // Check the row
    for (let x = 0; x < board.length; x++) {
        if (board[row][x] === num) {
            return false;
        }
    }

    // Check the column
    for (let y = 0; y < board.length; y++) {
        if (board[y][col] === num) {
            return false;
        }
    }

    // Check the 3x3 sub-grid
    const sqrt = Math.sqrt(board.length);
    const rowStart = row - row % sqrt;
    const colStart = col - col % sqrt;

    for (let r = rowStart; r < rowStart + sqrt; r++) {
        for (let c = colStart; c < colStart + sqrt; c++) {
            if (board[r][c] === num) {
                return false;
            }
        }
    }

    return true;
}

// Solve the Sudoku board using backtracking
export function solve(board) {
    const n = board.length;
    let row = -1;
    let col = -1;
    let emptyLeft = true;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) {
                row = i;
                col = j;
                emptyLeft = false;
                break;
            }
        }
        if (!emptyLeft) {
            break;
        }
    }

    // If no empty space is left, the board is solved
    if (emptyLeft) {
        // display(board);
        return true;
    }

    // Backtracking
    for (let num = 1; num <= n; num++) {
        if (isSafe(board, row, col, num)) {
            board[row][col] = num;
            if (solve(board)) {
                return true;
            } else {
                board[row][col] = 0; // Reset on backtrack
            }
        }
    }
    return false;
}
