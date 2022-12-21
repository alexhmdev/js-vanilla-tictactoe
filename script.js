// turno del jugador
// true = x
// false = o
let turno = true;
let gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];
const board = document.getElementById('board').querySelectorAll('div');
console.log(board);

function checkWin() {}

board.forEach((cell, index) => {
  cell.addEventListener('click', (event) => {
    turno = !turno;
    let row = Math.floor(index / 3);
    let col = index % 3;
    console.log(`Row: ${row}, Column: ${col}`);
    if (event.target.textContent !== '') {
      return;
    }
    event.target.textContent = turno ? 'x' : 'o';
  });
});
