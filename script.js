const player1 = "X";
const player2 = "O";
let currentPlayer = player1;
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

function makeMove(index) {
  if (!gameOver && board[index] === "") {
    board[index] = currentPlayer;
    document.getElementById("board").children[index].innerText = currentPlayer;
    checkWin();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === player1 ? player2 : player1;
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] === board[b] && board[a] === board[c] && board[a] !== "") {
      gameOver = true;
      document.getElementById("board").children[a].style.backgroundColor =
        "green";
      document.getElementById("board").children[b].style.backgroundColor =
        "green";
      document.getElementById("board").children[c].style.backgroundColor =
        "green";
      setTimeout(() => {
        alert(`Player ${board[a]} wins!`);
      });
    }
  }
}

function resetGame() {
  gameOver = false;
  currentPlayer = player1;

  board.forEach((value, index, arr) => {
    arr[index] = "";
    document.getElementById("board").children[index].innerText = "";
    document.getElementById("board").children[index].style.backgroundColor =
      "#eee";
  });
}
