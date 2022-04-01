const gameContainer = document.querySelector(".game-container");
const p1 = document.querySelector("#p1");
const firstChoice = document.querySelector("#first-choice");
const p2 = document.querySelector("#p2");
const secondChoice = document.querySelector("#second-choice");
const p3 = document.querySelector("#p3");
const thirdChoice = document.querySelector("#third-choice");
const playBtn = document.querySelector(".play-btn");
var score = document.querySelector(".score");

var playerChoice = "";
var aiChoice = "";
var possibleChoices = ["paper", "scissors", "rock"];
var possibleChoicesSource = [
  "./images/icon-paper.svg",
  "./images/icon-scissors.svg",
  "./images/icon-rock.svg",
];
var finalScore = 0;

firstChoice.addEventListener("click", () => {
  playerChoice = possibleChoices[0];
  game();
});

secondChoice.addEventListener("click", () => {
  playerChoice = possibleChoices[1];
  game();
});

thirdChoice.addEventListener("click", () => {
  playerChoice = possibleChoices[2];
  game();
});

function game() {
  aiChoice =
    possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

  var playerChoiceSrc = "";
  var aiChoiceSrc = "";
  if (playerChoice == possibleChoices[0]) {
    playerChoiceSrc = possibleChoicesSource[0];
  } else if (playerChoice == possibleChoices[1]) {
    playerChoiceSrc = possibleChoicesSource[1];
  } else {
    playerChoiceSrc = possibleChoicesSource[2];
  }

  if (aiChoice == possibleChoices[0]) {
    aiChoiceSrc = possibleChoicesSource[0];
  } else if (aiChoice == possibleChoices[1]) {
    aiChoiceSrc = possibleChoicesSource[1];
  } else {
    aiChoiceSrc = possibleChoicesSource[2];
  }

  var winlose = "";

  function resultCreate() {
    firstChoice.style.display = "none";
    secondChoice.style.display = "none";
    thirdChoice.style.display = "none";

    const firstChoiceRes = document.createElement("div");
    firstChoiceRes.classList.add("firstChoiceRes");
    gameContainer.appendChild(firstChoiceRes);
    firstChoiceRes.style.display = "flex";
    const firstChoiceResImg = document.createElement("img");
    firstChoiceRes.appendChild(firstChoiceResImg);
    firstChoiceResImg.src = playerChoiceSrc;
    const firstChoiceResTxt = document.createElement("p1");
    firstChoiceResTxt.innerHTML = "Ty";
    firstChoiceRes.appendChild(firstChoiceResTxt);

    const secondChoiceRes = document.createElement("div");
    secondChoiceRes.classList.add("secondChoiceRes");
    gameContainer.appendChild(secondChoiceRes);
    secondChoiceRes.style.display = "flex";
    const secondChoiceResImg = document.createElement("img");
    secondChoiceRes.appendChild(secondChoiceResImg);
    secondChoiceResImg.src = aiChoiceSrc;
    const secondChoiceResTxt = document.createElement("p1");
    secondChoiceResTxt.innerHTML = "Komputer";
    secondChoiceRes.appendChild(secondChoiceResTxt);

    const results = document.createElement("div");
    results.classList.add("results");
    gameContainer.appendChild(results);
    winlose = document.createElement("div");
    winlose.classList.add("win-lose");
    winlose.innerHTML = "";
    results.appendChild(winlose);
    const playAgainBtn = document.createElement("div");
    playAgainBtn.classList.add("play-again-btn");
    playAgainBtn.innerHTML = "Play Again";
    playAgainBtn.addEventListener("click", () => {
      firstChoice.style.display = "flex";
      secondChoice.style.display = "flex";
      thirdChoice.style.display = "flex";
      firstChoiceRes.remove();
      secondChoiceRes.remove();
      winlose.innerHTML = "";
      playAgainBtn.remove();
    });
    results.appendChild(playAgainBtn);
  }
  resultCreate();

  function validation() {
    if (playerChoice == aiChoice) {
      draw();
    } else if (playerChoice == "paper" && aiChoice == "rock") {
      win();
    } else if (playerChoice == "scissors" && aiChoice == "paper") {
      win();
    } else if (playerChoice == "rock" && aiChoice == "scissors") {
      win();
    } else {
      lose();
    }

    function draw() {
      winlose.innerHTML = "remis";
      score.innerHTML = finalScore += 1;
    }
    function win() {
      winlose.innerHTML = "wygrałeś";
      score.innerHTML = finalScore += 3;
    }
    function lose() {
      winlose.innerHTML = "przegrałeś";
    }
  }
  validation();
}

const rulesBtn = document.querySelector(".rulesBtn");
const rulesList = document.querySelector(".rules");

function rules() {
  if (rulesList.style.display == "none") {
    rulesList.style.display = "flex";
  } else {
    rulesList.style.display = "none";
  }
}
rulesBtn.addEventListener("click", rules);
