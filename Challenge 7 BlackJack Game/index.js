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

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 23;

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age < 21) {
  console.log(`You can not enter the club!`);
} else {
  console.log(`Welcome`);
}
