function reset() {
  location.reload();
}

function checkValid(button) {
  return button.textContent.length === 0; // return true or false
}

function markBox(button, players, turn) {
  button.textContent = players[turn]; // writes X or O 
}

function checkTie(box) {
  for (var a = 0; a < box.length; a++) {
    if (box[a].textContent.length === 0)
      return false;
  }
  return true;
}

// DB: there's gotta be a easier way to do this
function checkWinner(box, players, turn) {
 
  // horizontal row 1
  if (box[0].textContent === players[turn] &&
      box[1].textContent === players[turn] &&
      box[2].textContent === players[turn]) {
    box[0].style.boxShadow="0px 0px 5px 5px";
    box[1].style.boxShadow="0px 0px 5px 5px";
    box[2].style.boxShadow="0px 0px 5px 5px";
    return true;
  }
  
  // horizontal row 2
  if (box[3].textContent === players[turn] &&
      box[4].textContent === players[turn] &&
      box[5].textContent === players[turn]) {
    box[3].style.boxShadow="0px 0px 5px 5px";
    box[4].style.boxShadow="0px 0px 5px 5px";
    box[5].style.boxShadow="0px 0px 5px 5px";
      return true;
  }

  // horizontal row 3
  if (box[6].textContent === players[turn] &&
      box[7].textContent === players[turn] &&
      box[8].textContent === players[turn]) {
    box[6].style.boxShadow="0px 0px 5px 5px";
    box[7].style.boxShadow="0px 0px 5px 5px";
    box[8].style.boxShadow="0px 0px 5px 5px";
      return true;
  }

  // diagonal 1
  if (box[0].textContent === players[turn] &&
      box[4].textContent === players[turn] &&
      box[8].textContent === players[turn]) {
    box[0].style.boxShadow="0px 0px 5px 5px";
    box[4].style.boxShadow="0px 0px 5px 5px";
    box[8].style.boxShadow="0px 0px 5px 5px";
      return true;
  }
  
  // diagonal 2
  if (box[2].textContent === players[turn] &&
      box[4].textContent === players[turn] &&
      box[6].textContent === players[turn]) {
    box[2].style.boxShadow="0px 0px 5px 5px";
    box[4].style.boxShadow="0px 0px 5px 5px";
    box[6].style.boxShadow="0px 0px 5px 5px";
      return true;
  }
  
  // vertical row 1
  if (box[0].textContent === players[turn] &&
      box[3].textContent === players[turn] &&
      box[6].textContent === players[turn]) {
    box[0].style.boxShadow="0px 0px 5px 5px";
    box[3].style.boxShadow="0px 0px 5px 5px";
    box[6].style.boxShadow="0px 0px 5px 5px";
      return true;
  }
  
  // vertical row 2
  if (box[1].textContent === players[turn] &&
      box[4].textContent === players[turn] &&
      box[7].textContent === players[turn]) {
    box[1].style.boxShadow="0px 0px 5px 5px";
    box[4].style.boxShadow="0px 0px 5px 5px";
    box[7].style.boxShadow="0px 0px 5px 5px";
      return true;
  }
  
  // vertical row 3
  if (box[2].textContent === players[turn] &&
      box[5].textContent === players[turn] &&
      box[8].textContent === players[turn]) {
    box[2].style.boxShadow="0px 0px 5px 5px";
    box[5].style.boxShadow="0px 0px 5px 5px";
    box[8].style.boxShadow="0px 0px 5px 5px";
      return true;
  }
  
  return false;
}

function game() {
  var box = document.querySelectorAll("#game button");
  var turn = 0; // 0 = X, 1 = O;
  var players = ["X", "O"];
  var gameOver = false;

  // opening memo to player
  document.getElementById("memo").textContent = "X gets to start";

  // add event listers to every button
  for (var a = 0; a < box.length; a++) {
    box[a].addEventListener('click', function(){

      // skip if game is over
      if (gameOver)
          return;
      
      // check if button (this) has already been marked
      if (checkValid(this)) {

        // mark box with X or O
        markBox(this, players, turn); 
         
        // check for winner (true/false)
        gameOver = checkWinner(box, players, turn);
        
        if (gameOver) {  
          document.getElementById("memo").textContent = players[turn] + " wins! (wait, what?)";

          return;
        }
        
         // check for tie
        if (checkTie(box)) { 
          document.getElementById("memo").textContent = "Aww...a tie. Didn't see that coming.";

          gameOver = true;
          return;
        }

        // game not over. continue playing.
        turn++;  
        turn = (turn % 2); // toggle 1 and 0
      
        document.getElementById("memo").textContent = "go " + players[turn] + "!";

        // button already marked
      } else {
          document.getElementById("memo").textContent = "Hmm, try again.";
          return;
      }

    }, false);
  }

}

game();