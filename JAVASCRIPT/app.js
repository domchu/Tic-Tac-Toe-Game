let cells = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let result = document.querySelector(".result");
let btns = document.querySelectorAll(".btns");
let conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const ticTacToe = (element, index) => {
  element.value = currentPlayer;
  element.disabled = true;
  cells[index] = currentPlayer;
  currentPlayer = currentPlayer == "X" ? "0" : "X";
  result.innerHTML = `Player ${currentPlayer} Turn`;

  for (let i = 0; i < conditions.length; i++) {
    let currentCondition = conditions[i];
    let a = cells[currentCondition[0]];
    let b = cells[currentCondition[1]];
    let c = cells[currentCondition[3]];
  }
};
