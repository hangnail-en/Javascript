let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Generates random number between 0 and 9 to use as the target number to guess
const generateTarget = () => {
  return (Math.floor(Math.random() * 10));
};
// Function called to calculate the distance between the target and the number that was guessed
const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
};
// Function that compares the distances to determine which is closest
const compareGuesses = (userGuess, compGuess, target) => {
  let userClose = getAbsoluteDistance(userGuess, target);
  let compClose = getAbsoluteDistance(compGuess, target);
  switch (true) {
    case (userGuess > 9 || userGuess < 0):
      window.alert('Guesses should be between 0 and 9'); // Prompts the user to inform them that the number that was guessed is outside of the given parameter
      break;
    case (userClose < compClose || userClose === compClose):
      return (true);
      break;
    case (compClose < userClose):
      return (false);
      break;
  };
};
// Function used to add 1 to the winners score
const updateScore = (str) => {
  switch (true) {
    case (str === 'human'):
        return humanScore++; // Adds 1 to humanScore
        break;
    case (str === 'computer'):
        return computerScore++; // Adds 1 to computerScore
        break;
  };
};
// Function always called at the end to add 1 to the round counter
const advanceRound = () => {
    return currentRoundNumber++;
};
