// turno del jugador
// true = x
// false = o
let turno = true;
let gameBoard = 
[['','',''],
 ['','',''],
 ['','','']]
const board = document.getElementById('board').querySelectorAll('div');
console.log(board);

function checkWin() {

}

board.forEach((cell, index) => {
  cell.addEventListener('click', (event) => {
    turno = !turno;
    let row = index;
    let cellIndex;
    console.log(index, row)
    if(event.target.textContent !== '') {return}
    event.target.textContent = turno ? 'x' : 'o';
  });

})

