let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

// Practice 2 Challenge 5

// Solution :

function game() {
  return hands[Math.floor(Math.random() * hands.length)];
}

console.log(game());
