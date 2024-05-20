let currentPlayer = "X";

let gameEnded = false;

let board = ["", "", "", "", "", "", "", "", ""];

const winPattens = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

let restart = document.getElementById('reset')
let screenPlayer = document.querySelector('.screen');
function cellClicked(cellIndex) {
    console.log('!')
    if (!gameEnded && board[cellIndex] === "") {
        const cell = document.getElementById(`cell${cellIndex}`);
        cell.textContent = currentPlayer;
        cell.setAttribute('data-value', currentPlayer);
        board[cellIndex] = currentPlayer;

        if (checkWinner(currentPlayer)) {
            document.getElementById("message").textContent = `Игрок ${currentPlayer} победил!`;
            gameEnded = true;
        } else if (isBoardFull()) {
            document.getElementById("message").textContent = "Ничья!";
            gameEnded = true;
        } else {
            screenPlayer.classList.remove(`player${currentPlayer}`);
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            screenPlayer.innerText = currentPlayer;
            screenPlayer.classList.add(`player${currentPlayer}`);
        }
    }
}
function checkWinner(player) {
    for (const pattern of winPattens) {
        const [a, b, c] = pattern;
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false;
}
function isBoardFull() {
    return board.every(cell => cell !== "");
}

function reset() {
    window.location.reload();
}
restart.addEventListener("click", reset);