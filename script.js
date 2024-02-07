const choices = ["rock", "paper", "scissors"];

let playerChoice = prompt ("Rock, Paper or Scissors?");
playerChoice = playerChoice.toLowerCase();

function machineChoice () {
  let defChoice = Math.floor(Math.random()*choices.length)
  return choices[defChoice]
};

function defWinner () {
  let computerChoice = machineChoice();

  if (playerChoice === computerChoice) {
    return "Tie";
  }
  else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) { 
    return "Player wins."
  }
  else {return "Computer wins."}
}
console.log ("Player chooses " + playerChoice)
console.log ("Computer chooses " + machineChoice())
console.log (defWinner())







// Define an array with elements 0, 1, and 2
// Use Math.random() to generate a random index within the array length
// Get the randomly selected number from the array
// Show the selected number
// You can return the selected number if needed