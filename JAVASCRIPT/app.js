let cells = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let result = document.querySelector(".result");
let btns = document.querySelectorAll(".btn");
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
// console.log("is working");
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
    let c = cells[currentCondition[2]];
    //if the all the btns are empty and are not equal continue the game
    if (a == "" || b == "" || c == "") {
      continue;
    }
    //if the btn are output the same value as the current condition Tell the player you won
    if (a == b && b == c) {
      result.innerHTML = `Player ${a} won, congratulations`;
      btns.forEach((btn) => (btn.disabled = true));
    }
  }
};
//clearing all the states
function reset() {
  let cells = ["", "", "", "", "", "", "", "", ""];
  btns.forEach((btn) => {
    btn.value = "";
  });
  //since the states is clear the next player should start playing
  currentPlayer = "X";
  result.innerHTML = `Player X Turn`;
  btns.forEach((btn) => (btn.disabled = false));
}
//added the click handler to the reset button
document.querySelector("#reset").addEventListener("click", reset);

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => ticTacToe(btn, i));
});
