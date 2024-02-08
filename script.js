const options = ["rock", "paper", "scissors"];
let rounds = 0;
let score = {
  defeats: 0,
  ties: 0,
  victories: 0
}

function playRound() {
  let playerChoice = prompt("Rock, Paper, Scissors!").toLowerCase();
  let machineChoice = Math.floor(Math.random()*options.length);
  let computerChoice = options[machineChoice];
  
  console.log("Player Chooses " + playerChoice);
  console.log("Computer Choses " + computerChoice);
  
  function winner() {
    if (playerChoice === computerChoice) {
      score.ties++;
      return "Tie!";
    }
    else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      score.victories++
      return "Player wins this round!"
    }
    else {
      score.defeats++
      return "Computer wins this round!"}
  };
  console.log(winner())
  console.log("Defeats: " + score.defeats + " Ties: " + score.ties + " Victories: " + score.victories)
  rounds++;
};

while (rounds < 5) {
  playRound()
};
if (score.defeats === score.victories) {
  console.log("It's a tie! DEATHMACH!")
  playRound()
}
else if (score.defeats > score.victories) {
  console.log("You loose. :-( ")
}
else {console.log("YOU WIN!!!")}