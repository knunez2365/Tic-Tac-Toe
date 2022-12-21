'use strict';

const grid = document.querySelectorAll('.grid');

let player1 = {
  status: true,
  Board: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
};

let player2 = {
  status: false,
  Board: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
};

let Numcount = 0;

let Board = [
  [1, 1, 1],
  [0, 0, 0],
  [0, 0, 0],
];

grid.forEach((button) =>
  button.addEventListener('click', function () {
    let playedTurn = button.getAttribute('used');
    console.log(playedTurn);
    ++Numcount;
    let playerTurn = Numcount % 2;
    if (playerTurn === 0 && Numcount <= 9 && playedTurn !== 'disabled') {
      button.setAttribute('used', 'disabled');
      console.log(playedTurn === 'disabled');
      let divElem = document.createElement('p');
      button.appendChild(divElem);
      divElem.textContent = 'x';
      let gridButton = button.getAttribute('id');
      let rowButton = button.getAttribute('row');
      player1.Board[rowButton][gridButton] = 1;
      player1.status = false;

      console.log(Numcount);
    } else if (playerTurn === 1 && Numcount <= 9 && playedTurn !== 'disabled') {
      // if (button.getAttribute ===)
      button.setAttribute('used', 'disabled');
      let divElem = document.createElement('p');
      button.appendChild(divElem);
      divElem.textContent = 'O';
      let gridButton = button.getAttribute('id');
      let rowButton = button.getAttribute('row');
      player2.Board[rowButton][gridButton] = 2;
      player2.status = true;
      console.log(Numcount);
    } else if (playedTurn === 'disabled') {
      console.log('stopppp');
    }
  })
);

// IN order to create Tic Tac Toe, We need to create the Board.

//ONce the board has been created, we need to allow entering of X and O
