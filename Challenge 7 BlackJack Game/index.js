// 1. Create two variables, firstCard and secondCard.
let firstCard = 7;

// Set their values to a random number between 2-11
let secondCard = 13;

// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard;

console.log(sum);

if (sum === 21) {
  console.log(`You Win 🥳. You've got Blackjack!`);
} else if (sum < 21) {
  console.log(
    `You are still in the game 🙃. Do you want to draw a new card? 🙂`
  );
} else {
  console.log(`You lost badly 🥴`);
}
