//ROCK = 1
//PAPER = 2
//SCISSORS = 3

//SCORES

let humanScore;
let aiScore;
if (localStorage.getItem("humanScore") > 0) {
  humanScore = localStorage.getItem("humanScore");
} else {
  humanScore = 0;
}
if (localStorage.getItem("aiScore") > 0) {
  aiScore = localStorage.getItem("aiScore");
} else {
  aiScore = 0;
}
document.querySelector(".humanScore").innerHTML =
  humanScore;
document.querySelector(".aiScore").innerHTML = aiScore;

//FUNCTION
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
  if (choice == 1) {
    document.querySelector("#HUMAN").src =
      "images/HUMANrock.png";
  } else if (choice == 2) {
    document.querySelector("#HUMAN").src =
      "images/HUMANpaper.png";
  } else if (choice == 3) {
    document.querySelector("#HUMAN").src =
      "images/HUMANscissors.png";
  }
  if (computerChoice == 1) {
    document.querySelector("#AI").src = "images/AIrock.png";
  } else if (computerChoice == 2) {
    document.querySelector("#AI").src =
      "images/AIpaper.png";
  } else if (computerChoice == 3) {
    document.querySelector("#AI").src =
      "images/AIscissors.png";
  }

  console.log("computerChoice: " + computerChoice);
  console.log(choice);
  if (choice === computerChoice) {
    console.log("DRAW GAME");
    humanScore++;
    aiScore++;
    document.querySelector(".aiScore").style.color = "grey";
    document.querySelector(".humanScore").style.color =
      "grey";
  } else if (choice === 1 && computerChoice === 2) {
    console.log("AI WON");
    aiScore++;
    document.querySelector(".aiScore").style.color =
      "green";
    document.querySelector(".humanScore").style.color =
      "red";
  } else if (choice === 1 && computerChoice === 3) {
    console.log("HUMAN WON");
    humanScore++;
    document.querySelector(".aiScore").style.color = "red";
    document.querySelector(".humanScore").style.color =
      "green";
  } else if (choice === 2 && computerChoice === 1) {
    console.log("HUMAN WON");
    humanScore++;
    document.querySelector(".aiScore").style.color = "red";
    document.querySelector(".humanScore").style.color =
      "green";
  } else if (choice === 2 && computerChoice === 3) {
    console.log("AI WON");
    aiScore++;
    document.querySelector(".aiScore").style.color =
      "green";
    document.querySelector(".humanScore").style.color =
      "red";
  } else if (choice === 3 && computerChoice === 1) {
    console.log("AI WON");
    aiScore++;
    document.querySelector(".aiScore").style.color =
      "green";
    document.querySelector(".humanScore").style.color =
      "red";
  } else if (choice === 3 && computerChoice === 2) {
    console.log("HUMAN WON");
    humanScore++;
    document.querySelector(".aiScore").style.color = "red";
    document.querySelector(".humanScore").style.color =
      "green";
  } else {
    console.log("error");
  }
  document.querySelector(".humanScore").innerHTML =
    humanScore;
  document.querySelector(".aiScore").innerHTML = aiScore;

  localStorage.setItem("humanScore", humanScore);
  localStorage.setItem("aiScore", aiScore);
};
