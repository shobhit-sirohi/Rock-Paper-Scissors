//ROCK = 1
//PAPER = 2
//SCISSORS = 3

let draw = (choice) => {
  let randomNumber = Math.random();
  console.log("randomNumber: " + randomNumber);
  let computerChoice;
  if (randomNumber < 0.33) {
    computerChoice = 1;
  } else if (randomNumber < 0.66) {
    computerChoice = 2;
  } else {
    computerChoice = 3;
  }

  //gifs placement
  document.querySelector("#AI").src = "images/paper.gif";
  document.querySelector("#HUMAN").src = "images/rock.gif";

  console.log("computerChoice: " + computerChoice);
  console.log(choice);
  if (choice === computerChoice) {
    console.log("DRAW GAME");
  } else if (choice === 1 && computerChoice === 2) {
    console.log("AI WON");
  } else if (choice === 1 && computerChoice === 3) {
    console.log("HUMAN WON");
  } else if (choice === 2 && computerChoice === 1) {
    console.log("HUMAN WON");
  } else if (choice === 2 && computerChoice === 3) {
    console.log("AI WON");
  } else if (choice === 3 && computerChoice === 1) {
    console.log("AI WON");
  } else if (choice === 3 && computerChoice === 2) {
    console.log("HUMAN WON");
  } else {
    console.log("error");
  }
};
