// Royal Match Board Helper - Score & Combo Calculator
// Description: Pure JS logic to simulate matrix combinations for grid games.

const BOARD_SIZE = 9;

function generateRandomBoard() {
    const items = ['👑', '🛡️', '💎', '🏺', '🪙'];
    let board = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
        let row = [];
        for (let j = 0; j < BOARD_SIZE; j++) {
            const randomItem = items[Math.floor(Math.random() * items.length)];
            row.push(randomItem);
        }
        board.push(row);
    }
    return board;
}

function checkMatches(board) {
    let matchCount = 0;
    // Basic horizontal check simulation
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE - 2; j++) {
            if (board[i][j] === board[i][j+1] && board[i][j] === board[i][j+2]) {
                matchCount++;
            }
        }
    }
    return {
        hasMatches: matchCount > 0,
        totalCombos: matchCount,
        estimatedScore: matchCount * 150
    };
}

const currentBoard = generateRandomBoard();
const analysis = checkMatches(currentBoard);

console.log("--- Match-3 Matrix Analysis ---");
console.log(`Board generated successfully (${BOARD_SIZE}x${BOARD_SIZE}).`);
console.log(`Combos found: ${analysis.totalCombos}`);
console.log(`Estimated Move Score: ${analysis.estimatedScore} points.`);
